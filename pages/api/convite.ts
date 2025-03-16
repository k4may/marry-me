import type { NextApiRequest, NextApiResponse } from "next";

const RANGE = "A:D";

interface Convidado {
  nome: string;
  id: string;
  confirmado: boolean;
}

interface UpdateRequest {
  nome: string;
  id: string;
  confirmado: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Convidado[] | { error: string } | { message: string }>
) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ error: "ID não fornecido" });
      }

      const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEETS_ID_2}/values/${RANGE}?key=${process.env.GOOGLE_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!data.values) {
        return res
          .status(500)
          .json({ error: "Não foi possível recuperar os dados da planilha" });
      }

      const convidados: Convidado[] = data.values
        .filter((row: string[]) => row[2] === id)
        .map((row: string[]) => ({
          nome: row[0] || "Sem nome",
          id: row[2] || "",
          confirmado: String(row[3]).toLowerCase() === "true", // Normaliza e verifica
        }));

      if (convidados.length === 0) {
        return res
          .status(404)
          .json({ error: "Nenhum convidado encontrado para o ID fornecido" });
      }

      return res.status(200).json(convidados);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Erro ao buscar dados da planilha" });
    }
  } else if (req.method === "POST") {
    try {
      const { nome, id, confirmado }: UpdateRequest = req.body;

      if (!nome || !id) {
        return res.status(400).json({ error: "Nome e ID não fornecidos" });
      }

      const scriptUrl = process.env.SCRIPT_URL || "";

      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, id, confirmado }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Erro na requisição:", errorText);
        return res
          .status(500)
          .json({ error: "Erro ao enviar dados para o Google Apps Script" });
      }

      // Após a atualização, buscar os dados atualizados da planilha
      const updatedUrl = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEETS_ID_2}/values/${RANGE}?key=${process.env.GOOGLE_API_KEY}`;
      const updatedResponse = await fetch(updatedUrl);
      const updatedData = await updatedResponse.json();

      if (!updatedData.values) {
        return res
          .status(500)
          .json({ error: "Não foi possível recuperar os dados atualizados da planilha" });
      }

      const convidados: Convidado[] = updatedData.values
        .filter((row: string[]) => row[2] === id)
        .map((row: string[]) => ({
          nome: row[0] || "Sem nome",
          id: row[2] || "",
          confirmado: String(row[3]).toLowerCase() === "true", // Normaliza e verifica
        }));

      if (convidados.length === 0) {
        return res
          .status(404)
          .json({ error: "Nenhum convidado encontrado para o ID fornecido" });
      }

      return res.status(200).json(convidados);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao atualizar a planilha" });
    }
  } else {
    return res.status(405).json({ error: "Método não permitido" });
  }
}