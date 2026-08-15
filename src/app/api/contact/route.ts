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

    return NextResponse.json({
      success: true,
      message: "Message received successfully / تم استلام رسالتكم بنجاح",
      inquiryId: `INQ-${Date.now().toString().slice(-6)}`,
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
