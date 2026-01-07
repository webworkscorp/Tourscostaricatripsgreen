import { GoogleGenAI } from "@google/genai";

export const getTourRecommendation = async (userPreference: string, lang: 'es' | 'en' = 'es') => {
  try {
    // Protección vital: Evita crash si process no está definido en el cliente
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    
    if (!apiKey) {
        console.warn("API Key no disponible en el cliente.");
        return lang === 'es' 
          ? "El servicio de asistente virtual no está disponible en este momento."
          : "The virtual assistant service is not available at this time.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `El usuario está interesado en tours personalizados en Costa Rica.
      Agencia: Costa Rica Trips green.
      Idioma de respuesta: ${lang === 'es' ? 'Español' : 'Inglés'}.
      Contexto: Ofrecemos experiencias adaptadas a los destinos elegidos por el usuario y su presupuesto. 
      Naturaleza, Cultura, Aventura y Actividades Acuáticas. Atendemos a todo público (niños, jóvenes, adultos mayores, personas con discapacidad).
      Preferencia del usuario: "${userPreference}"
      
      Responde como un diseñador de viajes experto de Costa Rica Trips green. 
      Usa un tono PROFESIONAL, HUMILDE y CERCANO. 
      EVITA palabras como "lujo", "premium", "exclusivo" o "élite".
      Enfócate en la calidad del servicio, la seguridad y el disfrute.
      Explica cómo nos adaptamos a su presupuesto. Sé breve (máximo 120 palabras). 
      RESPONDE ÚNICAMENTE EN ${lang === 'es' ? 'ESPAÑOL' : 'INGLÉS'}.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'es' 
      ? "¡Pura Vida! Soy su asistente de Costa Rica Trips green. Estamos listos para ayudarle a organizar sus vacaciones de forma sencilla y profesional. Cuénteme sus planes."
      : "Pura Vida! I am your Costa Rica Trips Green assistant. We are ready to help you organize your vacation in a simple and professional way. Tell me about your plans.";
  }
};