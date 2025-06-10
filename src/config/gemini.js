const Apikey="AIzaSyBI-LoMfFBnAzH_RQnQdbi2Aa_Yc6cUJnk"
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

    try {
        const response = await ai.models.generateContentStream({
            model,
            config,
            contents,
        });
console.log(response); // Check response structure

// Asynchronously iterate through response if needed
for await (const chunk of response) {
    console.log(await chunk.text); // Ensure chunk.text() is called
}

// Properly await response.text()
return await response.text;
// Return the full response text
    } catch (error) {
        console.error('Error generating AI response:', error);
    }
}

export default main;
