import { NextRequest, NextResponse } from "next/server";
import { BookingSchema } from "@/lib/validation";
import { createWhatsAppLink } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = BookingSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
          message: "Validation failed / فشل التحقق من البيانات",
        },
        { status: 400 }
      );
    }

    const data = result.data;

    // Generate formatted WhatsApp confirmation message for the customer
    const branchName = data.branch === "flagship" ? "Flagship Boutique (Olaya 12214)" : "Fitting Studio (Olaya 12222)";
    const whatsappMsg = `*Al-Mukhtar Fitting Appointment Request*%0A%0A` +
      `*Name:* ${data.fullName}%0A` +
      `*Phone:* ${data.phone}%0A` +
      `*Location:* ${branchName}%0A` +
      `*Service:* ${data.serviceType}%0A` +
      `*Fabric/Style:* ${data.fabricPreference}%0A` +
      `*Preferred Date:* ${data.preferredDate}%0A` +
      `*Preferred Time:* ${data.preferredTime}%0A` +
      (data.notes ? `*Notes:* ${data.notes}%0A` : "") +
      `%0A_Sent via Al-Mukhtar Official Portal_`;

    const whatsappUrl = `https://wa.me/966597193831?text=${whatsappMsg}`;

    return NextResponse.json({
      success: true,
      message: "Fitting appointment received successfully / تم استلام طلب الموعد بنجاح",
      bookingId: `AMK-${Date.now().toString().slice(-6)}`,
      whatsappUrl,
      data,
    });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error occurred / حدث خطأ أثناء معالجة الطلب",
      },
      { status: 500 }
    );
  }
}
