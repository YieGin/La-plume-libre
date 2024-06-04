import { sendMail } from '@/utils/mail';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, firstName, lastName, message } = await req.json();
  try {
    await sendMail({
      from: email,
      firstName: firstName,
      lastName: lastName,
      body: message,
    });
    return new NextResponse(JSON.stringify({ message: 'Mail envoyé avec succès' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "Erreur lors de l'envoi de l'e-mail" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}