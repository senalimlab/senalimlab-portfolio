export type AutomationProject = {
  title: string;
  img: string;
  desc: string;
  url: string;
  badge?: string;
};

export const automationProjects: AutomationProject[] = [
  {
    title: "📧 Substack Digest Automation",
    img: "/ai-automation/substack-digest.svg",
    desc: "Daily n8n flow that summarizes Substack newsletters from Gmail, rates them and sends me a digest while marking emails as read.",
    url: "/AI_Automation/substack-digest",
  },
  {
    title: "💬 Slack Data Bot",
    img: "/ai-automation/slack-data-bot.svg",
    desc: "Interact with spreadsheets and databases directly from Slack using n8n.",
    url: "/AI_Automation/slack-data-bot",
  },
  {
    title: "📆 Calendar WhatsApp Alerts",
    img: "/ai-automation/calendar-whatsapp.svg",
    desc: "n8n watches my Google Calendar and sends WhatsApp updates when events are created, updated or deleted.",
    url: "/AI_Automation/calendar-whatsapp",
  },
  {
    title: "🧠 RAG Chat Assistant",
    img: "/ai-automation/rag-assistant.svg",
    desc: "Langflow-powered assistant that answers questions about me on this portfolio site.",
    url: "/AI_Automation/rag-assistant",
  },
];
