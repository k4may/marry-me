import type { NextApiRequest, NextApiResponse } from "next";
import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN || '',
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { nome, valor, imagem } = req.body;

      const preference = new Preference(client);

      const itemId = `item-${Date.now()}`;

      const preferenceData = {
        items: [
          {
            id: itemId,
            title: nome,
            quantity: 1,
            unit_price: valor,
            picture_url: imagem,
          },
        ],

        // TODO: Configurar URLs corretas
        back_urls: {
          success: "https://localhost:3000/pagamento",
          failure: "https://localhost:3000/pagamento",
          pending: "https://localhost:3000/pagamento",
        },
        auto_return: "approved",
      };

      const response = await preference.create({ body: preferenceData });

      const preferenceId = response.id;

      res.status(200).json({ preferenceId });
    } catch (error) {
      console.error("Erro ao criar preferência:", error);
      res.status(500).json({ error: "Erro ao criar preferência de pagamento" });
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}