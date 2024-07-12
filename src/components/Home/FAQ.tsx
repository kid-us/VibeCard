import { useState } from "react";
import faq from "../../services/faq";

interface Props {
  textSize?: boolean;
}

const Faq = ({ textSize }: Props) => {
  const [id, setId] = useState<number>(0);

  const handleFaq = (faqId: number) => {
    if (id === faqId) {
      setId(0);
    } else {
      setId(faqId);
    }
  };
  return (
    <>
      {faq.map((faqs) => (
        <div key={faqs.id}>
          <div className="flex justify-between w-full mb-5 border-b pb-4 border-gray-700">
            <div>
              <p
                className={`${
                  textSize ? "text-sm" : "lg:text-xl text-lg "
                } text-white`}
              >
                {faqs.question}
              </p>
            </div>
            <div>
              <button
                onClick={() => handleFaq(faqs.id)}
                className={`text-white rounded px-2 py-0 shadow-none cursor-pointer pt-1 ${
                  id === faqs.id ? "bi-caret-up-fill" : "bi-caret-down-fill"
                }  textSize ? "text-sm" : "text-2xl "
                }`}
              ></button>
            </div>
          </div>
          {id === faqs.id && (
            <div
              className={`text-sm ${
                textSize ? "px-1 mx-2" : "px-3 mx-2 lg:mx-10"
              } py-5 mb-4 rounded `}
            >
              <p className={`text-white ${textSize ? "text-sm" : "text-lg"}`}>
                {faqs.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Faq;
