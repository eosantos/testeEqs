// services/userService.ts

export interface UserData {
  uid: number;
  name: string;
  email: string;
  phone: number;
  cpf: string;
  user_type: string;
  investor_profile: string;
}

export const fetchUserData = async (): Promise<UserData> => {
  const response = await fetch(
    'https://dev-eqseed.pantheonsite.io/api/v1/user',
    {
      credentials: 'include'
    }
  );

  if (!response.ok) {
    throw new Error(`Erro ao buscar dados: ${response.status}`);
  }

  return response.json();
};
