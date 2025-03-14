import type { NextApiRequest, NextApiResponse } from 'next';

const RANGE = 'A:E';

interface Presente {
  nome: string;
  valor: number;
  imagem: string;
  categoria: string;
  descricao: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Presente[] | { error: string }>
) {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEETS_ID}/values/${RANGE}?key=${process.env.GOOGLE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.values) {
      return res.status(500).json({ error: 'Não foi possível recuperar os dados da planilha' });
    }

    const presentes: Presente[] = data.values.map((row: string[]) => ({
      nome: row[0] || 'Sem nome',
      valor: parseFloat(row[1]) || 0,
      imagem: row[2] || '',
      categoria: row[3] || 'Outros',
      descricao: row[4] || '',
    }));

    return res.status(200).json(presentes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar dados da planilha' });
  }
}