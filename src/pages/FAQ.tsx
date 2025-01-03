import React from 'react';
import { Terminal } from '../components/Terminal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  },
  {
    question: "What programming languages does Genesys AI support?",
    answer: "Genesys AI provides SDKs for Python, JavaScript, and Java. Additional languages can integrate via API."
  },
  {
    question: "Can I deploy agents on edge devices?",
    answer: "Yes, Genesys AI supports edge deployment for IoT and low-latency applications."
  },
  {
    question: "Is coding required to create agents?",
    answer: "While coding is optional, advanced users can script custom behaviors for their agents. Non-technical users can rely on the drag-and-drop interface and pre-built templates."
  }
];

export const FAQ = () => {
  return (
    <Terminal>
      <div className="space-y-6 max-w-full overflow-x-hidden">
        <h2 className="text-xl text-terminal-accent mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-4 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-terminal-accent/20">
              <AccordionTrigger className="text-terminal-purple hover:no-underline text-left pr-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-terminal-text">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Terminal>
  );
};