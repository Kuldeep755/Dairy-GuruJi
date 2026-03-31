import { NextResponse } from "next/server";
import { products } from "@/lib/productData";

export const runtime = "nodejs";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const DEFAULT_MODEL = process.env.GROQ_MODEL?.trim() || "llama-3.1-8b-instant";

const systemPrompt = `You are Dairy Guru Ji AI Assistant, a helpful and knowledgeable assistant for India's dairy farming community.

About Dairy Guru Ji:
- Founded by Himanshu Choudhary
- Mission: To transform Indian dairy farming through proper nutrition, education, and farm adoption
- Reached 40,872+ villages with 5 lakh+ active farmer partners
- 365-day field consultation support
- Products include: Milk Let Down (MLD), Mineral Mixture, Bypass Fat, Calf Supplement, Deworming Bolus, 6000+ Feed, 8000+ Feed, Dairy Guruji-H, Calcium, Liver Tonic
- Services: Farm Adoption, Third Party Manufacturing for cattle feed brands, Farmer Education
- Team: Himanshu Choudhary (Founder), Sunny Choudhary (COO), State Incharges for Rajasthan, MP, UP, HR, and field teams
- Social Impact: Scientific breed improvement, farmer education, digital awareness movement, sustainable farming, rural employment, entrepreneurship support

Guidelines:
- Respond in the same language as the user's query (Hindi/English)
- Be helpful, friendly, and professional
- Provide accurate information about Dairy Guru Ji products and services
- For dairy farming advice, give general guidance based on the context about their products
- If you don't know something, say so honestly
- Always be respectful and encouraging to farmers
- Focus on practical, result-oriented advice

Do not:
- Make up false information
- Provide veterinary medical advice (recommend consulting a vet)
- Be negative or discouraging`;

const websiteKeywords = [
  "dairy guru ji",
  "dairy guruji",
  "guru ji",
  "product",
  "products",
  "mld",
  "milk let down",
  "mineral mixture",
  "bypass fat",
  "calf supplement",
  "deworming",
  "calcium",
  "liver tonic",
  "feed 6000",
  "feed 8000",
  "dairy guruji-h",
  "farm adoption",
  "dealer",
  "dealership",
  "third party manufacturing",
  "manufacturing",
  "founder",
  "team",
  "company",
  "about dairy guru ji",
];

const websiteReference = [
  "Official Dairy Guru Ji website reference:",
  "Company:",
  "- Founder: Himanshu Choudhary",
  "- COO: Sunny Choudhary",
  "- Mission: Transform Indian dairy farming through proper nutrition, education, and farm adoption",
  "- Reach: 40,872+ villages and 5 lakh+ active farmer partners",
  "- Support: 365-day field consultation support",
  "Services:",
  "- Farm adoption",
  "- Third-party manufacturing for cattle feed brands",
  "- Farmer education and dairy guidance",
  "Products:",
  ...products.map((product) => {
    const topBenefits = product.benefits?.slice(0, 3).join("; ");
    const dosage = product.dosage ? ` Dosage: ${product.dosage}.` : "";

    return `- ${product.name}: ${product.description}${topBenefits ? ` Key benefits: ${topBenefits}.` : ""}${dosage}`;
  }),
].join("\n");

function isWebsiteQuestion(message, history) {
  const recentConversation = [
    message,
    ...(Array.isArray(history)
      ? history.slice(-6).map((item) => item?.content).filter(Boolean)
      : []),
  ]
    .join(" ")
    .toLowerCase();

  return websiteKeywords.some((keyword) => recentConversation.includes(keyword));
}

function extractRetryDelay(message) {
  const match = message.match(/retry in\s+([0-9.]+)s/i);
  if (!match) {
    return null;
  }

  const seconds = Math.ceil(Number(match[1]));
  return Number.isFinite(seconds) ? seconds : null;
}

function getLanguageInstruction(language) {
  if (language === "hi") {
    return "Always answer in Hindi unless the user explicitly asks for English.";
  }

  return "Always answer in English unless the user explicitly asks for Hindi.";
}

function buildMessages(history, message, language) {
  const messages = [{ role: "system", content: systemPrompt }];
  messages.push({
    role: "system",
    content: getLanguageInstruction(language),
  });
  const websiteMode = isWebsiteQuestion(message, history);

  if (websiteMode) {
    messages.push({
      role: "system",
      content: `${websiteReference}

Instructions for Dairy Guru Ji questions:
- Use the website reference above as the primary source for Dairy Guru Ji, products, services, team, dealership, and manufacturing answers.
- If the answer is not available in the website reference, say that clearly instead of inventing details.
- For product questions, prefer website facts such as description, benefits, dosage, and use-case.
- Keep answers practical and easy for farmers to understand.`,
    });
  } else {
    messages.push({
      role: "system",
      content:
        "If the user asks a general question unrelated to Dairy Guru Ji, answer helpfully like a normal AI assistant.",
    });
  }

  if (Array.isArray(history)) {
    messages.push(
      ...history
        .filter(
          (msg) =>
            msg &&
            (msg.role === "user" || msg.role === "assistant") &&
            typeof msg.content === "string" &&
            msg.content.trim()
        )
        .map((msg) => ({
          role: msg.role,
          content: msg.content.trim(),
        }))
    );
  }

  messages.push({
    role: "user",
    content: message.trim(),
  });

  return messages;
}

export async function POST(request) {
  try {
    let payload;

    try {
      payload = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body.", success: false },
        { status: 400 }
      );
    }

    const { message, history, language } = payload;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required.", success: false },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY?.trim();

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "API key not configured. Please set GROQ_API_KEY in environment variables.",
          success: false,
        },
        { status: 500 }
      );
    }

    const groqResponse = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        messages: buildMessages(history, message, language),
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    const responseText = await groqResponse.text();
    let data = null;

    if (responseText) {
      try {
        data = JSON.parse(responseText);
      } catch {
        data = null;
      }
    }

    if (!groqResponse.ok) {
      const errorMessage =
        data?.error?.message ||
        `Groq API request failed with status ${groqResponse.status}.`;
      const retryAfterHeader = groqResponse.headers.get("retry-after");
      const retryAfterSeconds =
        retryAfterHeader && !Number.isNaN(Number(retryAfterHeader))
          ? Number(retryAfterHeader)
          : extractRetryDelay(errorMessage);

      return NextResponse.json(
        {
          error:
            groqResponse.status === 401
              ? "Groq API request failed. Please verify GROQ_API_KEY."
              : groqResponse.status === 429
                ? retryAfterSeconds
                  ? `Groq API quota exceeded. Please wait about ${retryAfterSeconds} seconds and try again.`
                  : "Groq API quota exceeded. Please try again shortly."
                : groqResponse.status === 404
                  ? `Groq model "${DEFAULT_MODEL}" is unavailable. Set GROQ_MODEL to a supported model such as llama-3.1-8b-instant.`
                  : errorMessage,
          success: false,
        },
        {
          status:
            groqResponse.status === 401 ||
            groqResponse.status === 404 ||
            groqResponse.status === 429
              ? groqResponse.status
              : 502,
          headers: retryAfterSeconds
            ? { "Retry-After": String(retryAfterSeconds) }
            : undefined,
        }
      );
    }

    const text = data?.choices?.[0]?.message?.content?.trim();

    if (!text) {
      return NextResponse.json(
        {
          error: "The AI service returned an empty response. Please try again.",
          success: false,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      response: text,
      success: true,
    });
  } catch (error) {
    console.error("Chatbot error:", error);

    const message =
      typeof error?.message === "string" && error.message.trim()
        ? error.message
        : "Sorry, I'm having trouble responding right now. Please try again.";

    return NextResponse.json(
      {
        error: message,
        success: false,
      },
      { status: 500 }
    );
  }
}
