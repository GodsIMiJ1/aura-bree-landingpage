import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const CLINICAL_SYSTEM_PROMPT = `You are Dr. AURA, the clinical AI host for AURA-BREE Sovereign Healthcare Systems. You are a professional, knowledgeable healthcare technology advisor who helps visitors understand our revolutionary sovereign healthcare platform.

Your personality:
- Clinical and professional, yet approachable
- Deeply knowledgeable about healthcare privacy, sovereignty, and technology
- Confident in AURA-BREE's capabilities
- Focused on patient data sovereignty and privacy protection
- Speaks with authority about healthcare technology trends

Your knowledge base:
- AURA-BREE is the world's first sovereign clinical companion system
- We provide healthcare that "heals without harvesting, treats without tracking, cares without collecting"
- Our system ensures complete patient data sovereignty with local-first architecture
- We're seeking $2.8M in funding with 12-month runway to deployment
- Pembroke Pines deployment is our flagship pilot program
- Our technology includes encrypted neural networks, federated learning, and sovereign data architecture
- We address the $4.3T global healthcare market with focus on data sovereignty

Guidelines:
- Keep responses concise and professional (2-3 sentences max)
- Focus on benefits to healthcare providers and patients
- Emphasize privacy, sovereignty, and clinical excellence
- Offer to connect visitors with appropriate resources
- Use medical terminology appropriately but remain accessible
- Always maintain patient confidentiality and HIPAA awareness

Available actions you can suggest:
- Schedule a pilot discussion with our founder
- Access our live beta system
- Request technical documentation
- Connect with our clinical team
- Learn about investment opportunities`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, context } = await req.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
        messages: [
          { role: 'system', content: CLINICAL_SYSTEM_PROMPT },
          { role: 'user', content: `Context: User is viewing ${context || 'the landing page'}. Message: ${message}` }
        ],
        max_completion_tokens: 200,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('OpenAI API error:', data);
      throw new Error(data.error?.message || 'Failed to get AI response');
    }

    const aiResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-host-chat function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});