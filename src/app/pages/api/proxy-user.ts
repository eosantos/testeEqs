import { NextResponse } from 'next/server';

// Interface para os dados do usuário
interface UserData {
  uid: number;
  email: string;
  created: number;
  last_access: number;
  is_active: boolean;
  name: string;
  phone: string;
  cpf: string;
  user_type: string;
  registration_reason: string;
  investor_profile: string;
  created_via_api: boolean;
  is_agent: boolean;
}

// Método GET
export async function GET() {
  try {
    const response = await fetch(
      'https://dev-eqseed.pantheonsite.io/api/v1/user',
      {
        headers: {
          Authorization: 'Basic ZXFzZWVkOmJyYXppbA=='
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.status}`);
    }

    const data: UserData = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar dados' },
      { status: 500 }
    );
  }
}
