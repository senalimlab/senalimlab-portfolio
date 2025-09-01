 // src/data/caseStudies.ts
export type CaseStudy =  {
  title: string;
  img: string;
  desc: string;
  url: string;
  badge?: string;
};

export const caseStudiesInclusion: CaseStudy[] =  [
  {
    title: "🌱 Youth Mental Health",
    img: "/thumb_youth.png",
    desc: "For youth mental health, I imagined an emotional check-in tool for schools, helping spot distress early and making support feel normal and approachable.",
    url: "/Case_Studies/case-youth.pdf",
    badge: "NEW",
  },
  {
      title: "🧓 Ageing with Dignity",
      img: "/thumb_senior.png",
      desc: "For seniors and caregivers, I mapped out simple concepts that could make support routines less stressful — maybe a tap-in mood kiosk, or delivery rhythms that help staff and users avoid burnout.",
      url: "/Case_Studies/case-senior.pdf",
    },
  {
    title: "🔗 Inclusive Digitalisation",
    img: "/thumb_one.png",
    desc: "For digital inclusion, I explored what it might take to move beyond pilot programs, building lasting digital partnerships where everyone’s voice is included from day one.",
    url: "/Case_Studies/case-one.pdf",
  },
  {
    title: "♿ Systems for People of Determination",
    img: "/thumb_pod.png",
    desc: "I sketched out how support for people with disabilities could be rolled out step by step, with a focus on daily realities instead of frameworks.",
    url: "/Case_Studies/case-pod.pdf",
  },
  {
    title: "Building Everyday Trust (CDC Vouchers)",
    img: "/thumb_voucher.png",
    desc: "Even for something like national vouchers, I looked at how thoughtful design can help hesitant users trust and adopt new tools, not just feel left behind (This thinking builds on my reflection here)",
    url: "/Case_Studies/case-voucher.pdf",
  },
  {
    title: "🔗 From Digital Touch Points to Digital Ecosystem",
    img: "/thumb_digital_ecosystem.png",
    desc: "For a global logistics platform, I explored how to connect separate digital tools into a seamless ecosystem — reducing friction, building trust, and improving experiences quietly over time.",
    url: "/Case_Studies/case-digital-ecosystem.pdf",
   },
  {
    title: "🤝 MSF Case Management Scaling Strategy",
    img: "/thumb_msf.png",
    desc: "For Singapore’s social sector, I mapped out how to scale a national case management system so every agency, volunteer, and frontline worker adopts it with confidence — and no family waits because the system failed them.",
    url: "/Case_Studies/case-msf.pdf",
  }
  ];



export const caseStudiesMission: CaseStudy[] =  [
  {
    title: "⚓ Crisis Triage System",
    img: "/thumb_crisis1.png",
    desc: "I mapped out a unified triage and tasking system for military teams, aiming to balance human judgment with tech support and fit real decision-making workflows.",
    url: "https://gamma.app/docs/Crisis-Triage-Ecosystem-01lr9crq9g9vk2v",
    badge: "FOSS",
 },
  {
    title: "🚨 Public Safety Triage Ecosystem",
    img: "/thumb_crisis2.png",
    desc: "I also explored what an AI-powered triage process for public safety might look like, focusing on explainability and compliance so that technology earns trust, not confusion.",
    url: "https://gamma.app/docs/Crisis-Triage-Ecosystem-zwdjkqc3valxi1d",
  }
  ];

