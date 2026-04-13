// Contém código gerado por IA
// ignore_for_file: dangling_library_doc_comments
/**
 * Rota de API para subscrição na Newsletter via MailerLite.
 * Gerencia a comunicação segura entre o frontend e a API do MailerLite.
 */

import type { APIRoute } from 'astro';

export const prerender = false; // Garante que esta rota seja executada no servidor

/**
 * Endpoint POST /api/subscribe
 * Classes/Métodos:
 * - POST: Trata a requisição de inscrição, valida o e-mail e envia para o MailerLite.
 */
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({
        success: false,
        message: 'E-mail inválido.'
      }), { status: 400 });
    }

    const apiKey = import.meta.env.MAILERLITE_API_KEY;
    const groupId = import.meta.env.MAILERLITE_GROUP_ID;

    if (!apiKey) {
      console.error('MailerLite API Key não configurada.');
      return new Response(JSON.stringify({
        success: false,
        message: 'Erro de configuração no servidor.'
      }), { status: 500 });
    }

    const payload: any = {
      email,
      status: 'unconfirmed', // Ativa o double opt-in se configurado na conta
    };

    if (groupId) {
      payload.groups = [groupId];
    }

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Erro MailerLite:', data);
      return new Response(JSON.stringify({
        success: false,
        message: data.message || 'Erro ao processar inscrição.'
      }), { status: response.status });
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Inscrição realizada com sucesso!'
    }), { status: 200 });

  } catch (error) {
    console.error('Erro na rota de API:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Erro interno no servidor.'
    }), { status: 500 });
  }
};
