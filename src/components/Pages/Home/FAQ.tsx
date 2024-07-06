import { useState } from "react";
import faq from "../../../services/faq";

const Faq = () => {
  const [id, setId] = useState<number>(0);

  const handleFaq = (faqId: number) => {
    if (id === faqId) {
      setId(0);
    } else {
      setId(faqId);
    }
  };
  return (
    <div className="mt-16 lg:px-0 px-4">
      <h1 className="text-center text-2xl text-white">FAQ</h1>
      <div className="mt-10 flex justify-center">
        <div className="lg:w-[60%] w-full">
          {faq.map((faqs) => (
            <div key={faqs.id}>
              <div className="flex justify-between w-full mb-5 border-b pb-4 border-gray-700">
                <div>
                  <p className="lg:text-xl text-lg text-white">
                    {faqs.question}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => handleFaq(faqs.id)}
                    className={`btn-bg text-white rounded px-2 cursor-pointer pt-1 ${
                      id === faqs.id ? "bi-caret-up-fill" : "bi-caret-down-fill"
                    } text-2xl`}
                  ></button>
                </div>
              </div>
              {id === faqs.id && (
                <div className="text-sm bg-secondary px-3 py-5 mb-4 rounded lg:mx-10 mx-2">
                  <p className="text-white chakra text-lg">{faqs.answer}</p>
                </div>
              )}
              {/* <hr className="border-gray-400 rounded-full border mb-4 mx-5" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
