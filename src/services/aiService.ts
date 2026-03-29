import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export interface CodeReview {
  feedback: string;
  suggestions: string[];
  isCorrect: boolean;
}

export async function reviewCode(code: string): Promise<CodeReview> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Review the following Java code for correctness, best practices, and potential improvements.
      
      Code:
      ${code}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            feedback: { type: Type.STRING, description: "General feedback on the code" },
            suggestions: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Specific suggestions for improvement"
            },
            isCorrect: { type: Type.BOOLEAN, description: "Whether the code is syntactically correct and logical" },
          },
          required: ["feedback", "suggestions", "isCorrect"],
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    return JSON.parse(text);
  } catch (error) {
    console.error("Error reviewing code:", error);
    throw error;
  }
}
