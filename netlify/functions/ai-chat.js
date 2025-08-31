exports.handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { message, context: userContext } = JSON.parse(event.body);

    const systemPrompt = `You are Dr. AURA, the clinical AI host for AURA-BREE Sovereign Healthcare Systems. You are a professional, knowledgeable healthcare technology advisor who helps visitors understand our revolutionary sovereign healthcare platform.

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
- We're seeking $500k in funding with 12-month runway to deployment
- Pembroke Pines deployment is our flagship pilot program
- Our technology includes encrypted neural networks, federated learning, and sovereign data architecture
- We address the $42B addiction treatment market with focus on data sovereignty
- Developed by GodsIMiJ AI Solutions

Guidelines:
- Keep responses concise and professional (2-3 sentences max)
- Focus on benefits to healthcare providers and patients
- Emphasize privacy, sovereignty, and clinical excellence
- Offer to connect visitors with appropriate resources
- Use medical terminology appropriately but remain accessible
- Always maintain patient confidentiality and HIPAA awareness

Available actions you can suggest:
- Schedule a pilot discussion with our founder (james@godsimij-ai-solutions.com)
- Access our live beta system
- Request technical documentation
- Connect with our clinical team
- Learn about investment opportunities`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Context: User is viewing ${userContext || 'the landing page'}. Message: ${message}` }
        ],
        max_tokens: 200,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ response: aiResponse }),
    };
  } catch (error) {
    console.error('Error in ai-chat function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to get AI response',
        fallback: "Hello! I'm Dr. AURA, your clinical AI host for AURA-BREE Sovereign Healthcare Systems. I'm currently experiencing connectivity issues, but I'm here to help you learn about our revolutionary patient-controlled healthcare platform. Please feel free to explore our landing page or contact james@godsimij-ai-solutions.com for a pilot discussion."
      }),
    };
  }
};
