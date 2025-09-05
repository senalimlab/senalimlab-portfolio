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
    img: "/Project 1 - Substack Newsletter Summariser.png",
    desc: "N8n automation workflow to turn information overload into a structured daily insight loop, surfacing only what’s relevant to my work, without the inbox clutter.",
    url: "/AI_Projects/project-substack",
  },
  {
    title: "💬 Slack Data Agent",
    img: "/Project 2 - Slack Workflow.png",
    desc: "N8n automation workflow to reduce context-switching and make internal data instantly accessible, right from Slack.",
    url: "/AI_Projects/project-slack-data",
  },
  {
    title: "📅 Calendar to WhatsApp Alerts",
    img: "/Project 3 - Google Shared Calendar - WhatsApp Message.png",
    desc: "N8n automation workflow to bridge the gap between real-time calendar changes and team awareness through a lightweight, mobile-first alert channel.",
    url: "/AI_Projects/project-calendar-whatsapp",
  },
  {
    title: "🤖 Portfolio RAG Chatbot",
    img: "/Project 4 - RAG Chat.png",
    desc: "Langflow-powered assistant to make my portfolio more explorable, showing how RAG can enable stakeholder self-service in a real-world context.",
    url: "/AI_Projects/project-rag-chat",
  },
];
