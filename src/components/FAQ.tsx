import FAQItem from "../components/FAQItem";
import { faqData } from "../data/faqData";

export default function FAQ() {
  return (
    <section className="max-w-4xl mx-auto px-6 ">
      <h2 className="text-3xl text-center mb-12 text-[#2f6f6b]">
        Gyakran ismételt kérdések - Mire számíthatok?
      </h2>

      <div className="space-y-2">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}
