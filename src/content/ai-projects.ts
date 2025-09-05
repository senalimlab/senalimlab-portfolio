export type AIProject = {
  title: string;
  img: string;
  desc: string;
  url: string;
  badge?: string;
};

export const aiProjects: AIProject[] = [
  {
    title: "📧 Substack Newsletter Summaries",
    img: "/ai_project1.png",
    desc: "Daily n8n workflow that pulls Substack emails from Gmail, summarizes them with ratings, emails me the recap, and marks the originals as read.",
    url: "/AI_Projects/project-substack",
  },
  {
    title: "💬 Slack Data Agent",
    img: "/ai_project2b.png",
    desc: "n8n automation that lets me query and update spreadsheet or database records directly from Slack messages.",
    url: "/AI_Projects/project-slack-data",
  },
  {
    title: "📅 Calendar to WhatsApp Alerts",
    img: "/ai_project3.png",
    desc: "When I create, update, or delete a Google Calendar event, this n8n flow notifies relevant people via WhatsApp.",
    url: "/AI_Projects/project-calendar-whatsapp",
  },
  {
    title: "🤖 Portfolio RAG Chatbot",
    img: "/ai_project4a.png",
    desc: "Langflow-powered assistant that answers visitor questions about me using a retrieval-augmented generation setup.",
    url: "/AI_Projects/project-rag-chat",
  },
];
