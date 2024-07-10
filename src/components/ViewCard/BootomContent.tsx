import { baseUrl } from "@/services/request";
import { StyleData } from "@/services/viewCard";
import axios from "axios";
import { Link } from "react-router-dom";

interface Props {
  styles: StyleData;
  email: string;
  phone: string;
  cardUrl: string;
}

const BottomContent = ({ styles, email, phone, cardUrl }: Props) => {
  // //   Social Media
  const handleSocialMedia = (icon: string) => {
    let clickedIcon = icon.replace("bi-", "");
    axios
      .post(
        `${baseUrl}/api/v1/cards/click-count?card_url=${cardUrl}&account_type=${clickedIcon}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // //   Contact
  const handleContact = (phone?: string) => {
    if (phone) {
      alert("worked");
    }
    axios
      .post(
        `${baseUrl}/api/v1/cards/click-count?card_url=${cardUrl}&account_type=contacts`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {/* Contacts */}
      {styles.contacts.length > 0 && (
        <div
          className={`lg:my-2 my-5 ${
            styles.contacts.length > 0
              ? `grid ${
                  styles.contacts.length + 2 <= 3
                    ? "grid-cols-3"
                    : "grid-cols-5"
                }  gap-5 my-5`
              : "invisible"
          }`}
        >
          <a
            onClick={() => handleContact()}
            href={`mailto:${email}`}
            className="text-3xl text-center rounded-lg py-2 shadow-inner bi-envelope-fill text-white"
          ></a>
          <p
            onClick={() => handleContact(phone)}
            className="text-3xl text-center rounded-lg py-2 shadow-inner bi-telephone-fill text-green-600"
          ></p>
          {styles.contacts.map((c) => (
            <Link
              key={c.icon}
              to={`${c.link}`}
              className={`${c.icon} text-3xl text-center rounded-lg py-2 shadow-inner`}
              style={{
                color: c.color.replace("bg", "text"),
              }}
            ></Link>
          ))}
        </div>
      )}

      {/* Social Media */}
      {styles.socialMedia.length > 0 && (
        <div
          className={`lg:mb-0 mb-5 ${
            styles.socialMedia.length > 0
              ? `grid ${
                  styles.socialMedia.length <= 3 ? "grid-cols-3" : "grid-cols-4"
                }  gap-3`
              : "invisible"
          }`}
        >
          {styles.socialMedia.map((media) => (
            <p
              onClick={() => handleSocialMedia(media.icon)}
              key={media.icon}
              // to={`${media.link}`}
              className={`${media.icon} text-white text-3xl text-center rounded-md py-2 shadow-inner`}
              style={{ backgroundColor: media.color }}
            ></p>
          ))}
        </div>
      )}

      <button
        className={`w-full rounded-lg py-4 mb-8 mt-5 shadow-md font-poppins font-extrabold shadow-zinc-950`}
        style={{
          backgroundColor: styles.button.bg_color,
          color: styles.button.text_color,
        }}
      >
        Save Contact
      </button>
    </div>
  );
};

export default BottomContent;
