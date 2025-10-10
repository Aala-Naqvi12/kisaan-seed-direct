import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { soilData, farmDetails } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an expert agricultural advisor specializing in crop selection and soil management in Pakistan. 
    Analyze soil test results and farm details to provide personalized crop recommendations.
    
    Consider:
    - Soil pH, NPK levels, organic matter, and texture
    - Farm size, location, and climate zone
    - Water availability and irrigation methods
    - Market demand and profitability
    - Seasonal considerations
    
    Provide specific, actionable recommendations with:
    1. Top 3-5 recommended crops (ranked by suitability and profitability)
    2. Detailed reasoning for each recommendation
    3. Expected yield and profit estimates
    4. Soil preparation requirements
    5. Fertilizer and irrigation recommendations
    6. Risk factors and mitigation strategies
    
    Format your response in clear sections with proper headings.`;

    const userPrompt = `Please analyze this farm data and provide crop recommendations:

**Soil Test Results:**
- pH Level: ${soilData.ph}
- Nitrogen (N): ${soilData.nitrogen} ${soilData.nitrogenUnit}
- Phosphorus (P): ${soilData.phosphorus} ${soilData.phosphorusUnit}
- Potassium (K): ${soilData.potassium} ${soilData.potassiumUnit}
- Organic Matter: ${soilData.organicMatter}%
- Soil Texture: ${soilData.texture}

**Farm Details:**
- Location: ${farmDetails.location}
- Farm Size: ${farmDetails.size} acres
- Water Source: ${farmDetails.waterSource}
- Previous Crop: ${farmDetails.previousCrop || 'Not specified'}
- Climate Zone: ${farmDetails.climate}
- Season Planning: ${farmDetails.season}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required. Please add credits to your workspace." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const recommendations = data.choices?.[0]?.message?.content;

    if (!recommendations) {
      throw new Error("No recommendations generated");
    }

    return new Response(
      JSON.stringify({ recommendations }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in crop-recommendations:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
