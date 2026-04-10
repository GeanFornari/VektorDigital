# Política de Privacidade — Kontrol

**Versão:** 1.0  
**Última atualização:** 19 de março de 2026  
**Desenvolvedor:** Geancarlo Fornari  
**Contato:** contato@vektordigital.com.br

---

## 1. Introdução

A privacidade dos nossos usuários é uma prioridade. Esta Política de Privacidade descreve, com transparência, quais dados o aplicativo **Kontrol** coleta, como os utiliza, com quem os compartilha e como você pode exercer seus direitos.

Esta política está em conformidade com a **Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018)** e, no que aplicável, com o **Regulamento Geral sobre a Proteção de Dados da União Europeia (GDPR)**.

---

## 2. Dados Coletados

### 2.1 Dados de Identificação e Autenticação

Ao criar sua conta no Kontrol, os seguintes dados são fornecidos pelos serviços de autenticação utilizados:

| Dado | Fonte | Condição |
|---|---|---|
| UID único (identificador interno Firebase) | Firebase Authentication | Sempre (conta anônima) |
| Endereço de e-mail | Google ou Apple | Somente se o usuário vincular uma conta |
| Nome completo | Google ou Apple | Somente se o usuário vincular uma conta |

> **Nota sobre a Apple:** O Sign In With Apple permite que o usuário opte por ocultar seu e-mail real, fornecendo um e-mail substituto gerado pela Apple. O Kontrol aceita e respeita essa preferência.

### 2.2 Dados Financeiros Inseridos pelo Usuário

Ao cadastrar assinaturas, os seguintes dados são armazenados no Cloud Firestore, associados exclusivamente ao UID do usuário:

- Nome do serviço (ex.: "Netflix", "Spotify").
- Categoria da assinatura.
- Valor e moeda da cobrança.
- Periodicidade (mensal, anual, semanal).
- Data de cobrança.
- Método de pagamento (campo de texto livre — **o usuário não deve inserir números completos de cartões**).
- URL do serviço para gestão da assinatura.
- Notas pessoais sobre a assinatura.
- Indicação de período de teste gratuito (*trial*) e data de vencimento.
- Status de ativação da assinatura.

### 2.3 Histórico de Pagamentos

O Kontrol gera e armazena automaticamente um **histórico mensal de gastos** no Firestore, calculado com base nas assinaturas cadastradas. Esses dados são usados para exibir relatórios de gastos ao usuário.

### 2.4 Preferências Locais

Dados de preferência do usuário (como idioma e estado de uso pela primeira vez) são armazenados **localmente no dispositivo** usando `SharedPreferences`. Esses dados **não são transmitidos** a servidores externos.

### 2.5 Dados Coletados Automaticamente por Terceiros

O Kontrol utiliza serviços de terceiros que podem coletar dados de forma independente, conforme suas próprias políticas:

| Serviço | Finalidade | Política de Privacidade |
|---|---|---|
| **Google Firebase** | Autenticação, banco de dados (Firestore) | [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy) |
| **Google Sign-In** | Login com conta Google | [policies.google.com/privacy](https://policies.google.com/privacy) |
| **Sign In with Apple** | Login com conta Apple | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| **RevenueCat** | Gerenciamento de assinaturas e compras in-app | [revenuecat.com/privacy](https://revenuecat.com/privacy) |

---

## 3. Uso dos Dados

Os dados coletados são utilizados exclusivamente para:

1. **Autenticação:** Criar, manter e identificar a conta do usuário.
2. **Funcionalidade principal:** Exibir, calcular e organizar as assinaturas cadastradas.
3. **Notificações locais:** Agendar e enviar lembretes de vencimento de *trials* e cobranças futuras.
4. **Relatórios:** Gerar gráficos e histórico de gastos mensais.
5. **Gerenciamento de planos:** Processar e verificar assinaturas premium dentro do Aplicativo via RevenueCat.

**O Kontrol não utiliza seus dados para fins publicitários, não os vende e não os compartilha com terceiros além dos serviços listados na Seção 2.5.**

---

## 4. Notificações

O Aplicativo solicita permissão para enviar **notificações locais** ao seu dispositivo. Essas notificações são geradas e exibidas exclusivamente no seu dispositivo e **não envolvem comunicação com servidores externos**. Você pode revogar essa permissão a qualquer momento nas configurações do seu sistema operacional.

---

## 5. Armazenamento e Segurança

Os dados sincronizados são armazenados na infraestrutura do **Google Firebase (Cloud Firestore)**, que adota padrões robustos de segurança, incluindo criptografia em trânsito (TLS) e em repouso.

Os dados são organizados de forma que **cada usuário acessa exclusivamente os seus próprios dados**, garantidos por Regras de Segurança do Firestore vinculadas ao UID de autenticação.

O desenvolvedor do Kontrol emprega esforços razoáveis para proteger suas informações, mas nenhum sistema de segurança é infalível. Recomendamos manter o sistema operacional e o Aplicativo sempre atualizados.

---

## 6. Retenção de Dados

Os dados são retidos enquanto o usuário mantiver uma conta ativa no Aplicativo. Ao solicitar a exclusão da conta, todos os dados associados ao UID do usuário serão removidos do Cloud Firestore dentro de um prazo razoável.

---

## 7. Direitos do Usuário (LGPD)

Em conformidade com a LGPD, o usuário possui os seguintes direitos:

| Direito | Descrição |
|---|---|
| **Confirmação e Acesso** | Saber se seus dados são tratados e acessar as informações armazenadas. |
| **Correção** | Solicitar a correção de dados incompletos, inexatos ou desatualizados. |
| **Exclusão** | Solicitar a exclusão dos seus dados pessoais. |
| **Portabilidade** | Solicitar a portabilidade dos seus dados para outro serviço. |
| **Revogação do consentimento** | Revogar o consentimento ao tratamento dos dados a qualquer momento. |
| **Oposição** | Opor-se ao tratamento de dados realizado sem o seu consentimento. |

Para exercer qualquer um desses direitos, entre em contato pelo e-mail: **contato@vektordigital.com.br**

---

## 8. Dados de Menores

O Kontrol **não é destinado a menores de 13 anos**. Não coletamos intencionalmente dados pessoais de crianças. Se tomarmos conhecimento de que coletamos dados de um menor sem o consentimento dos responsáveis, tomaremos as medidas necessárias para excluir essas informações imediatamente.

---

## 9. Transferência Internacional de Dados

Os dados são armazenados em servidores do Google (Firebase) que podem estar localizados fora do Brasil. O Google adota mecanismos de conformidade reconhecidos internacionalmente para essa transferência, incluindo cláusulas contratuais padrão aprovadas pela Comissão Europeia.

---

## 10. Alterações nesta Política

O desenvolvedor se reserva o direito de atualizar esta Política a qualquer momento. Notificações sobre alterações relevantes serão disponibilizadas no Aplicativo. O uso continuado após a publicação das alterações constitui aceitação da nova versão.

---

## 11. Contato e Encarregado de Dados (DPO)

Em caso de dúvidas, solicitações ou reclamações relacionadas à privacidade e proteção de dados, entre em contato:

**E-mail:** contato@vektordigital.com.br
**Desenvolvedor Responsável:** Gean Fornari

Este serviço não possui Encarregado de Dados (DPO) formalmente designado para esta versão. Caso necessário, o desenvolvedor poderá ser contactado diretamente pelo e-mail acima.
