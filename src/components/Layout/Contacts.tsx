import { Link } from "react-router-dom";
import { useContentStore } from "../../store/useContentStore";
import { useCardData } from "@/store/useCardData";

const Contacts = () => {
  const { contact } = useContentStore();
  const { emailVal, phoneVal } = useCardData();

  return (
    <div
      className={`lg:my-2 my-5 ${
        contact.length > 0
          ? `grid ${
              contact.length + 2 <= 3 ? "grid-cols-3" : "grid-cols-5"
            }  gap-5 my-5`
          : "invisible"
      }`}
    >
      {emailVal !== "" && phoneVal !== "" && (
        <>
          <a
            href={`mailto:${emailVal}`}
            className="text-3xl text-center rounded-lg py-2 shadow-inner bi-envelope-fill text-white"
          ></a>
          <p className="bi-telephone-fill text-green-500 text-3xl text-center rounded-lg py-2 shadow-inner"></p>
        </>
      )}
      {contact.map((c) => (
        <Link
          key={c.icon}
          to={`${c.link}`}
          className={`${c.icon} text-3xl text-center rounded-lg py-2 shadow-inner`}
          style={{ color: c.color.replace("bg", "text") }}
        ></Link>
      ))}
    </div>
  );
};

export default Contacts;
