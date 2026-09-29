import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { message, history = [] } = await request.json();

  if (!message || typeof message !== 'string') {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 });
  }

  const openAIApiKey = process.env.OPENAI_API_KEY;

  if (!openAIApiKey) {
    return NextResponse.json({
      reply: `Thanks for reaching out. You asked: "${message}". This MVP is ready to connect to OpenAI — add your API key in .env.local and the app will respond with live AI answers.`,
    });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are FlowBot AI, a helpful customer support assistant for a SaaS startup.',
          },
          ...history,
          { role: 'user', content: message },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText }, { status: response.status });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? 'I am not sure how to answer that yet.';

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unexpected error' },
      { status: 500 }
    );
  }
}
