import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg">{question}</span>

        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden text-gray-700 leading-relaxed">
          {answer}
        </div>
      </div>

    </div>
  );
}
