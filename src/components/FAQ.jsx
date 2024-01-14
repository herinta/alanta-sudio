import React, { useState } from 'react';

const Question = ({questionText, answerText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transition-all duration-200 bg-white rounded-xl shadow-md cursor-pointer hover:bg-gray-50">
      <button
        type="button"
        onClick={toggleAnswer}
        className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
      >
        <span className="flex text-lg font-semibold text-black">{questionText}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-6 h-6 text-gray-400 ${isOpen ? 'transform rotate-0' : 'transform rotate-180'}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div style={{ display: isOpen ? 'block' : 'none' }} className="px-4 pb-5 sm:px-6 sm:pb-6">
        <p>{answerText}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-10 bg-[#FFE5E5] sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#756AB6] sm:text-4xl lg:text-5xl">
            Explore Common Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <Question
            questionId="1"
            questionText="How can I get started?"
            answerText="Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup."
          />
          <Question
            questionId="2"
            questionText="What is the pricing structure?"
            answerText="Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget."
          />
          <Question
            questionId="3"
            questionText="What kind of support do you provide?"
            answerText="We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base."
          />
          <Question
            questionId="4"
            questionText="Can I cancel my subscription anytime?"
            answerText="Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users."
          />
        </div>
        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?{' '}
          <span className="cursor-pointer font-medium text-[#756AB6] transition-all duration-200 hover:text-[#756AB6] focus:text-[#756AB6] hover-underline">
            Contact our support
          </span>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
