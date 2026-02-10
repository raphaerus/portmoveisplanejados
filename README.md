# 🪑 Portfólio Digital Premium (White Label)

> Um template de alta conversão desenvolvido para Marcenarias e Móveis Planejados, focado em performance e captação de leads via WhatsApp.

![Status](https://img.shields.io/badge/Status-Production-green)
![Tech](https://img.shields.io/badge/Stack-Next.js_14_|_Tailwind_CSS-blue)

## 🎯 Objetivo do Projeto
Este projeto resolve a dor de pequenos prestadores de serviço que dependem do Instagram para fechar vendas de alto valor (ticket médio > R$ 3.000). 

A solução entrega um portfólio visual (Masonry Layout), rápido e focado em converter visitantes em contatos no WhatsApp.

## 🚀 Tecnologias Utilizadas
- **Next.js 14** (App Router): Para renderização ultra-rápida e SEO.
- **Tailwind CSS**: Estilização responsiva e moderna.
- **TypeScript**: Tipagem segura para a configuração do cliente.
- **Lucide React**: Ícones leves.

## ⚙️ Arquitetura "White Label"
O projeto foi arquitetado para ser reutilizável. Toda a personalização do cliente está centralizada em um único arquivo de configuração (`app/_data/clientData.ts`).

Isso permite o deploy de um novo cliente em menos de 10 minutos, alterando apenas:
- Nome da Empresa
- Cores da Marca
- Número do WhatsApp
- Links das Fotos

### Exemplo de Configuração (`clientData.ts`):
```typescript
export const clientData = {
  businessName: "Marcenaria Exemplo",
  whatsappNumber: "5511999999999",
  hero: {
    title: "Móveis que inspiram",
    // ...
  }
};
📦 Como Rodar Localmente
Clone o repositório:

Bash
git clone [https://github.com/seu-usuario/seu-repo.git](https://github.com/seu-usuario/seu-repo.git)
Instale as dependências:

Bash
npm install
# ou
yarn install
Rode o servidor de desenvolvimento:

Bash
npm run dev
Acesse http://localhost:3000.

Desenvolvido por Raphael Chaves