import axios from "axios";
import { baseUrl } from "../../services/request";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../Button/Button";
import { qrCode, user } from "../../assets";
import Contacts from "../Layout/Contacts";
import SocialMedia from "../Layout/SocialMedia";
import Magnetic from "../GsapMagnetic/Magnetic";

interface Pronoun {
  font_size: string;
  font_style: string;
  font_color: string;
}

interface JobTitle {
  font_size: string;
  font_style: string;
  font_color: string;
}

interface Bio {
  font_size: string;
  font_style: string;
  font_color: string;
}

interface Company {
  font_size: string;
  font_style: string;
  font_color: string;
}

interface Location {
  font_size: string;
  font_style: string;
  font_color: string;
}

interface Name {
  font_size: string;
  font_style: string;
  font_color: string;
}

interface CardBg {
  bg_color: string;
}

interface CoverBg {
  bg_color: string;
}

interface Contacts {
  color: string;
  icon: string;
  link: string;
}

interface SocialMedia {
  color: string;
  icon: string;
  link: string;
}

interface StyleData {
  pronoun: Pronoun;
  jobTitle: JobTitle;
  bio: Bio;
  name: Name;
  company: Company;
  location: Location;
  coverBG: CoverBg;
  cardBg: CardBg;
  contacts: Contacts[];
  socialMedia: SocialMedia[];
}

interface Data {
  owner: string;
  bio: string;
  card_url: string;
  company_logo: string;
  company_name: string;
  cover_picture: string;
  email: string;
  full_name: string;
  job_title: string;
  main_picture: string;
  phone: string;
  pronouns: string;
}

const ViewCard = () => {
  const { id } = useParams();

  const [data, setData] = useState<Data>();
  const [styles, setStyles] = useState<StyleData>();

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/cards/card/${id}`)
      .then((response) => {
        setData(response.data);
        setStyles(JSON.parse(response.data.styles));
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="h-[100vh] menu-bg">
        <div className="lg:px-40 md:px-36 px-2">
          <div className="lg:pt-10 md:pt-10 py-5 lg:ps-24">
            <Link to={"/"} className="text-2xl text-teal-950 logo-font">
              vibecard
            </Link>
          </div>

          <div className="flex justify-center lg:mt-16 mt-5">
            <div className="w-80">
              {data && styles && (
                <Magnetic>
                  <div
                    className={`rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 z-0 lg:mb-0 mb-14 pb-10`}
                    style={{ backgroundColor: styles.cardBg.bg_color }}
                  >
                    <div
                      className={`lg:h-24 h-32 relative flex justify-between p-2 z-0 ${
                        !data?.cover_picture
                          ? styles.coverBG.bg_color === "gradient-cover" &&
                            `${styles.coverBG.bg_color} z-0`
                          : ""
                      }`}
                      style={{
                        backgroundImage:
                          data?.cover_picture && data?.cover_picture
                            ? `url("${data.cover_picture}")`
                            : undefined,
                        backgroundColor: styles.coverBG.bg_color,
                      }}
                    >
                      <div className="absolute lg:top-10 top-16 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden z-0">
                        <img
                          src={data.main_picture ? data.main_picture : user}
                          alt="user"
                        />
                      </div>
                      {/* Pronoun and Name */}
                      <div className="content-center">
                        <p
                          className={`absolute right-0 me-1 w-48 text-center overflow-hidden text-ellipsis text-nowrap ${
                            styles.name.font_style + " " + styles.name.font_size
                          } `}
                          style={{ color: styles.name.font_color }}
                        >
                          <span
                            className={` ${
                              styles.pronoun.font_style +
                              " " +
                              styles.pronoun.font_size
                            }`}
                            style={{ color: styles.pronoun.font_color }}
                          >
                            {data.pronouns && "(" + data.pronouns + ")"}{" "}
                          </span>

                          {data.full_name && data.full_name}
                        </p>
                      </div>
                    </div>
                    <div className="px-5 mt-10 text-white">
                      <div className="relative">
                        {data.company_logo && (
                          <img
                            src={data.company_logo ? data.company_logo : qrCode}
                            alt="Cover"
                            className="absolute right-0 -top-6 w-14 h-14 rounded-full border-2 bg-white"
                          />
                        )}
                        {/* Job Title */}
                        <p
                          className={`${
                            styles.jobTitle.font_style +
                            " " +
                            styles.jobTitle.font_size
                          } mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase lg:mt-0 mt-4 ${
                            !data.job_title && "invisible"
                          } `}
                          style={{ color: styles.jobTitle.font_color }}
                        >
                          {data.job_title && data.job_title}
                        </p>
                        {/* Company */}
                        <p
                          className={`${!data.company_name && "invisible"} ${
                            styles.company.font_style +
                            " " +
                            styles.company.font_size
                          }`}
                          style={{ color: styles.company.font_color }}
                        >
                          {data.company_name && "At " + data.company_name}
                        </p>
                        {/* Tag Line */}
                        <p
                          className={`mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase ${
                            !data.bio && "invisible"
                          } ${
                            styles.bio.font_style + " " + styles.bio.font_size
                          }`}
                          style={{ color: styles.bio.font_color }}
                        >
                          {data.bio && data.bio}
                        </p>
                        {/* Location */}
                        <p
                          className={`${
                            styles.location.font_style +
                            " " +
                            styles.location.font_size
                          } my-2`}
                          style={{ color: styles.location.font_color }}
                        >
                          <span
                            className="bi-geo-alt-fill me-2"
                            style={{ color: styles.location.font_color }}
                          ></span>
                          Lorem
                          {/* {locationVal && locationVal} */}
                        </p>
                      </div>

                      {/* Contacts */}
                      {styles.contacts.length > 0 && (
                        <div
                          className={`lg:my-2 my-5 ${
                            styles.contacts.length > 0
                              ? `grid ${
                                  styles.contacts.length <= 3
                                    ? "grid-cols-3"
                                    : "grid-cols-5"
                                }  gap-5 my-5`
                              : "invisible"
                          }`}
                        >
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
                                  styles.socialMedia.length <= 3
                                    ? "grid-cols-3"
                                    : "grid-cols-4"
                                }  gap-3`
                              : "invisible"
                          }`}
                        >
                          {styles.socialMedia.map((media) => (
                            <Link
                              key={media.icon}
                              to={`${media.link}`}
                              className={`${media.icon} text-3xl text-center rounded-md py-2 shadow-inner`}
                              style={{ backgroundColor: media.color }}
                            ></Link>
                          ))}
                        </div>
                      )}

                      <Button label="Save Contact" />
                    </div>
                  </div>
                </Magnetic>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCard;
