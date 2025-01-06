import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Does StoryScape work with videos without transcripts?",
      answer: "Yes, StoryScape can process videos without transcripts by using its AI-based transcription feature.",
    },
    {
      question: "What kind of media is supported?",
      answer: "StoryScape supports a variety of formats, including MP4, MOV, AVI, and more.",
    },
    {
      question: "Is StoryScape Free?",
      answer: "StoryScape offers a free trial, after which you can subscribe to a paid plan for full access.",
    },
    {
      question: "What languages does StoryScape support?",
      answer: "StoryScape supports multiple languages, including English, Spanish, French, and more.",
    },
    {
      question: "I have more questions. How can I contact you?",
      answer: "You can reach out to us via our contact form or send us an email at support@storyscape.com.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-toggle">{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
