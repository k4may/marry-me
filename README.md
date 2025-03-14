# Marry-Me

Marry-Me é um projeto que facilita a gestão de listas de presentes de casamento, permitindo a integração com Mercado Pago para pagamentos e Google Sheets para armazenamento de informações dos presentes.

## 📂 Estrutura do Projeto

A estrutura do projeto segue o padrão a seguir:

```
/components
  - Filtros.tsx
  - LoadingSpinner.tsx
  - PresenteCard.tsx

/pages
  /api
    - pagamento.ts
    - presentes.ts
  - presentes.tsx

/public
  - brasao-casamento.png
  - file.svg
  - globe.svg
  - next.svg
  - vercel.svg
  - window.svg

/src/app
  - favicon.ico
  - globals.css
  - layout.tsx
  - page.tsx
```

## ⚙️ Configuração

Para executar o projeto corretamente, é necessário configurar variáveis de ambiente no arquivo `.env.local`.

Ao clonar o repositório, você encontrará um arquivo `.env.example`. Renomeie esse arquivo para `.env.local` e substitua os valores conforme descrito abaixo.

### 🔹 Mercado Pago
Para utilizar o Mercado Pago, é necessário criar uma aplicação e obter o token de acesso para o Checkout Pro. Defina a seguinte variável no `.env.local`:

```
MERCADOPAGO_ACCESS_TOKEN=your_mercado_pago_access_token_here
```

### 🔹 Google Sheets
O projeto utiliza o Google Sheets para armazenar informações dos presentes. Para isso, siga os passos:
1. Crie um projeto no Google Cloud.
2. Habilite a API do Google Sheets.
3. Obtenha o ID da planilha e a chave de API.

Defina as variáveis no `.env.local`:
```
GOOGLE_SHEETS_ID=your_google_sheets_id_here
GOOGLE_API_KEY=your_google_api_key_here
```

## 🔑 Como Obter as Credenciais

### Mercado Pago:
1. Acesse o [Painel do Mercado Pago](https://www.mercadopago.com.br/developers/pt/guides/payments/api).
2. Crie uma nova aplicação.
3. No painel da aplicação, gere um **Access Token**.
4. Substitua `your_mercado_pago_access_token_here` pelo token gerado.

### Google Sheets:
1. Acesse o [Google Cloud Console](https://console.cloud.google.com/).
2. Crie um novo projeto.
3. Habilite a **API do Google Sheets**.
4. Crie uma **chave de API** e substitua `your_google_api_key_here` pela chave gerada.
5. Para obter o **ID da Planilha**, abra a planilha no Google Sheets e copie o ID da URL (a parte entre `/d/` e `/edit` na URL).
6. Substitua `your_google_sheets_id_here` pelo ID da planilha.

## 📋 Modelo da Planilha
A planilha utilizada para armazenar as informações dos presentes deve seguir o seguinte formato:

| Coluna | Conteúdo |
|--------|------------|
| A      | Nome do presente |
| B      | Preço |
| C      | URL da imagem |
| D      | Categorias (separadas por vírgula) |
| E      | Descrição |

**Importante:** Certifique-se de substituir corretamente os metadados ao integrar os dados.

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/k4may/marry-me.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd marry-me
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Renomeie `.env.example` para `.env.local` e configure as variáveis conforme descrito acima.
5. Execute o projeto:
   ```bash
   npm run dev
   ```
6. Acesse no navegador: `http://localhost:3000`

## 📧 Contato
- **Nome:** Kalebe Maynard
- **Email:** [kalebemaynard@outlook.com](mailto:kalebemaynard@outlook.com)
- **GitHub:** [k4may](https://github.com/k4may)
