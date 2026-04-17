import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, phone, categories, message } = await req.json();

    if (!name || !company || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { getDb } = await import("@/lib/firebase");
    const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
    const db = getDb();

    await addDoc(collection(db, "businessInquiries"), {
      name,
      company,
      email,
      phone: phone || null,
      categories: categories || [],
      message: message || null,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("business-inquiry error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
