const Apikey="your api key"
// Install dependencies before running:
// npm install @google/genai mime
// npm install -D @types/node

const { GoogleGenAI } = require('@google/genai');

async function main(prompt) {
    const ai = new GoogleGenAI({
        // apiKey: process.env.GEMINI_API_KEY,
        apiKey: Apikey,
    });

    const config = {
        responseMimeType: 'text/plain',
    };
    const model = 'learnlm-2.0-flash-experimental';
    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: prompt 
                },
            ],
        },
    ];

    // ...existing code...
    try {
        const response = await ai.models.generateContentStream({
            model,
            config,
            contents,
        });

       let result = '';
for await (const chunk of response) {
    const text = chunk.text || "";
    console.log(text);
    result += text;
}

        return result; // Return the full response text
    } catch (error) {
        console.error('Error generating AI response:', error);
    }
// ...existing code...
}

export default main;
