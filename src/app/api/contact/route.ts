import { NextRequest, NextResponse } from "next/server";
import { ContactSchema } from "@/lib/validation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = ContactSchema.safeParse(body);

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

    // Generate a WhatsApp deep link so the message actually reaches the boutique team
    const whatsappMsg =
      `*Al-Mukhtar Website Inquiry*%0A%0A` +
      `*Name:* ${data.name}%0A` +
      `*Email:* ${data.email}%0A` +
      `*Phone:* ${data.phone}%0A` +
      `*Subject:* ${data.subject}%0A` +
      `*Message:* ${data.message}%0A` +
      `%0A_Sent via Al-Mukhtar Official Portal_`;

    const whatsappUrl = `https://wa.me/966597193831?text=${whatsappMsg}`;

    return NextResponse.json({
      success: true,
      message: "Message received successfully / تم استلام رسالتكم بنجاح",
      inquiryId: `INQ-${Date.now().toString().slice(-6)}`,
      whatsappUrl,
      data,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error occurred / حدث خطأ أثناء إرسال الرسالة",
      },
      { status: 500 }
    );
  }
}
