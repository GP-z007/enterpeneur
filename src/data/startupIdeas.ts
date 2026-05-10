export interface StartupIdea {
  id: string;
  name: string;
  problem: string;
  audience: string;
  monetization: string;
  category: string;
}

export const mockIdeas: StartupIdea[] = [
  {
    id: "1",
    name: "CodeMentor AI",
    problem: "Junior developers struggle to find personalized mentorship.",
    audience: "Self-taught developers and bootcamp grads.",
    monetization: "Freemium with a $15/mo subscription for advanced AI pairing.",
    category: "tech",
  },
  {
    id: "2",
    name: "ZenSpace",
    problem: "Remote workers experience burnout and lack structured breaks.",
    audience: "Remote employees and freelancers.",
    monetization: "B2B SaaS charging companies $5/user/month.",
    category: "health",
  },
  {
    id: "3",
    name: "SkillSwap",
    problem: "High cost of specialized courses for niche skills.",
    audience: "Lifelong learners and hobbyists.",
    monetization: "Transaction fee on certified peer-to-peer tutoring.",
    category: "education",
  },
  {
    id: "4",
    name: "EcoDeliver",
    problem: "High carbon footprint of last-mile local deliveries.",
    audience: "Eco-conscious local businesses.",
    monetization: "Per-delivery fee + premium green certification for businesses.",
    category: "eco",
  },
  {
    id: "5",
    name: "FinLearn",
    problem: "Teens lack practical personal finance knowledge.",
    audience: "High school students and parents.",
    monetization: "B2B partnerships with schools and banks.",
    category: "education",
  }
];

export const generateIdea = (category: string): StartupIdea => {
  const filtered = mockIdeas.filter(idea => idea.category.toLowerCase() === category.toLowerCase());
  if (filtered.length > 0) {
    return filtered[Math.floor(Math.random() * filtered.length)];
  }
  return mockIdeas[Math.floor(Math.random() * mockIdeas.length)];
};

export const generatePitch = (): string => {
  const templates = [
    "We are the Uber for {audience}, solving the problem of {problem} by offering a simple subscription.",
    "Imagine a world where {problem} is no longer an issue. Our product helps {audience} achieve exactly that.",
    "For {audience} who suffer from {problem}, we provide a platform that changes everything."
  ];
  const idea = mockIdeas[Math.floor(Math.random() * mockIdeas.length)];
  const template = templates[Math.floor(Math.random() * templates.length)];
  return template.replace("{audience}", idea.audience).replace("{problem}", idea.problem.toLowerCase());
};
