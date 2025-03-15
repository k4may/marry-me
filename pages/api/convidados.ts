import type { NextApiRequest, NextApiResponse } from 'next';

const RANGE = 'A:C';  

interface Convidado {
  nome: string;
  id: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Convidado[] | { error: string }>
) {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEETS_ID_2}/values/${RANGE}?key=${process.env.GOOGLE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.values) {
      return res.status(500).json({ error: 'Não foi possível recuperar os dados da planilha' });
    }

    const convidados: Convidado[] = data.values.map((row: string[]) => ({
      nome: row[0] || 'Sem nome',  
      id: row[2] || '',            
    }));

    return res.status(200).json(convidados);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar dados da planilha' });
  }
}
