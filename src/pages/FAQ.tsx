import React from 'react';
import { Terminal } from '../components/Terminal';

const faqs = [
  {
    question: "What type of agents can be deployed?",
    answer: "Genesys AI supports various types of AI agents including Analysis Agents for data processing, Interaction Agents for user engagement, Research Agents for information gathering, and Coordination Agents for managing multi-agent systems. Each type can be customized for specific use cases."
  },
  {
    question: "How does AI swarm technology work?",
    answer: "AI swarm technology utilizes distributed intelligence protocols where multiple AI agents work together in a coordinated manner. Each agent processes information independently while sharing insights through a neural bridge network, creating an emergent intelligence that's greater than the sum of its parts."
  },
  {
    question: "What's the difference between autonomous and supervised agents?",
    answer: "Autonomous agents operate independently within defined parameters, making decisions based on their training and objectives. Supervised agents require human oversight and approval for critical decisions, making them suitable for sensitive applications."
  },
  {
    question: "Can agents learn from each other?",
    answer: "Yes, through our proprietary knowledge sharing protocol, agents can exchange learned patterns and insights, leading to continuous improvement across the network while maintaining individual specializations."
  }
];

export const FAQ = () => {
  return (
    <Terminal>
      <div className="space-y-6">
        <h2 className="text-xl text-terminal-accent mb-6">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-terminal-accent/20 pb-4 last:border-0">
            <h3 className="text-terminal-purple mb-2">{faq.question}</h3>
            <p className="text-terminal-text">{faq.answer}</p>
          </div>
        ))}
      </div>
    </Terminal>
  );
};