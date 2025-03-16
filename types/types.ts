export interface Convidado {
  nome: string;
  id: string;
  confirmado: boolean;
}

export interface ConvitePageProps {
  convidados: Convidado[];
  error?: string;
}