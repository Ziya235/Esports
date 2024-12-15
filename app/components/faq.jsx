"use client";
import React, { useState } from "react";
import "../styles/faq.css";

const Faq = () => {
  const faqs = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ backgroundColor: "transparent" }} // Explicitly transparent
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          />
        </svg>
      ),
      question: "What is eSports, and how is it different from regular gaming?",
      answer:
        "eSports, or electronic sports, refers to competitive video gaming where players or teams compete in organized tournaments. Unlike regular gaming, eSports involves professional players, structured leagues, and significant prize pools, often drawing large audiences worldwide.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ backgroundColor: "transparent" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      question: "How can I start following an eSports game if I’ve never played it?",
      answer:
        "You can earn free credits through daily check-ins, hourly rewards, completing activities, participating in events, and inviting friends. Make sure to check in regularly to keep collecting!",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ backgroundColor: "transparent" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      question: "Where can I find eSports tournaments to watch?",
      answer:
        "Yes, we prioritize security! Your account is protected with advanced encryption and security measures. We also recommend using a strong password and enabling two-factor authentication for additional safety.",
    },
    {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ backgroundColor: "transparent" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
        question: "How do I pick a team or player to support?",
        answer:
          "Yes, we prioritize security! Your account is protected with advanced encryption and security measures. We also recommend using a strong password and enabling two-factor authentication for additional safety.",
      },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      style={{
        background: "linear-gradient(96.06deg, #192231 0%, #181F2A 100%)",
      }}
    >
      <div className="faq">
        <div className="faq_right">
          <h1 className="faqs_title">FAQs</h1>
        </div>
        <div className="faq_left">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-button"
                  aria-expanded={activeIndex === index}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-question-content">
                    <span className="question-text">{faq.question}</span>
                  </div>
                  <svg
                    className={`chevron ${
                      activeIndex === index ? "rotated" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeIndex === index && (
                  <div id={`faq-answer-${index}`} className="faq-answer">
                    <div className="faq-answer-content">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
