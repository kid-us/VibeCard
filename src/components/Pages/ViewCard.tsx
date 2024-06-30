import axios from "axios";
import { baseUrl } from "../../services/request";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { qrCode, userPic } from "../../assets";
import Contacts from "../Layout/Contacts";
import SocialMedia from "../Layout/SocialMedia";
import Magnetic from "../GsapMagnetic/Magnetic";
import Loading from "../Loading/Loading";

interface Pronoun {
  font_size: string;
  font_style: string;
  font_color: string;
}

interface Buttton {
  bg_color: string;
  text_color: string;
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
  button: Buttton;
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
  covor_picture: string;
  email: string;
  card_layout: string | number;
  location: string;
  full_name: string;
  job_title: string;
  main_picture: string;
  phone: string;
  pronouns: string;
  qr_code: string;
}

const ViewCard = () => {
  const { id } = useParams();

  const [data, setData] = useState<Data>();
  const [styles, setStyles] = useState<StyleData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/cards/card/${id}`)
      .then((response) => {
        setLoading(false);
        setData(response.data);
        setStyles(JSON.parse(response.data.styles));
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  // console.log(styles);
  // console.log(data);

  return (
    <>
      {loading && <Loading />}
      <div className="h-[100vh] menu-bg">
        <div className="lg:px-40 md:px-36 px-2">
          <div className="lg:pt-10 md:pt-10 py-5 lg:ps-24">
            <Link to={"/"} className="text-2xl text-teal-950 logo-font">
              vibecard
            </Link>
          </div>

          <div className="lg:flex justify-center lg:mt-16 mt-5 lg:pb-0 pb-5">
            <div className="lg:block flex justify-center lg:me-28 lg:mb-0 mb-10 lg:content-center">
              <img
                src={data?.qr_code}
                alt="Qr code"
                className="lg:w-80 w-72 rounded-2xl shadow-2xl shadow-zinc-950"
              />
            </div>
            <div className="lg:w-[28%]">
              {/* Default / Left */}
              {data && styles && data.card_layout === "default" && (
                <Magnetic>
                  <div
                    className={`rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 z-0 lg:mb-0 mb-14`}
                    style={{ backgroundColor: styles.cardBg.bg_color }}
                  >
                    <div
                      className={`lg:h-24 h-32 relative flex justify-between z-0 ${
                        !data?.covor_picture
                          ? styles.coverBG.bg_color === "gradient-cover" &&
                            `${styles.coverBG.bg_color} z-0`
                          : ""
                      }`}
                    >
                      {data.covor_picture && (
                        <img
                          src={data.covor_picture}
                          alt="cover"
                          className="w-full object-cover
            "
                        />
                      )}
                      <div className="absolute lg:top-10 top-16 left-2 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden z-0">
                        <img
                          src={data.main_picture ? data.main_picture : userPic}
                          alt="user"
                        />
                      </div>
                      {/* Pronoun and Name */}
                      <div className="content-center">
                        <p
                          className={`absolute right-0 me-1 w-48 text-center overflow-hidden text-ellipsis text-nowrap ${
                            styles.name.font_style + " " + styles.name.font_size
                          } ${
                            data.covor_picture && "glass-effect text-shadow"
                          }`}
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

                          {data.location && data.location}
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
                  </div>
                </Magnetic>
              )}
              {/* Centered */}
              {data && styles && data.card_layout === "centered" && (
                <Magnetic>
                  <div
                    className={`rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 lg:mb-0 mb-14`}
                    style={{ backgroundColor: styles.cardBg.bg_color }}
                  >
                    <div
                      className={`lg:h-24 h-32 relative flex justify-between ${
                        !data?.covor_picture
                          ? styles.coverBG.bg_color === "gradient-cover" &&
                            `${styles.coverBG.bg_color} z-0`
                          : ""
                      }`}
                    >
                      {data.covor_picture && (
                        <img
                          src={data.covor_picture}
                          alt="cover"
                          className="w-full object-cover
            "
                        />
                      )}

                      <div className="absolute lg:top-10 top-16 left-1/3 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden">
                        <img
                          src={data.main_picture ? data.main_picture : userPic}
                          alt="user"
                        />
                      </div>
                      {data.company_logo && (
                        <img
                          src={data.company_logo ? data.company_logo : qrCode}
                          alt="Cover"
                          className="absolute top-20 right-28 w-12 h-12 rounded-full border-2 bg-white"
                        />
                      )}
                    </div>
                    <div className="px-5 mt-10 text-white">
                      <div className="relative">
                        {/* Name and Pronoun */}
                        <div className="content-center">
                          {/* Pronoun and Name */}
                          <p
                            className={` text-center overflow-hidden text-ellipsis text-nowrap ${
                              styles.name.font_style +
                              " " +
                              styles.name.font_size
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

                        {/* Job Title */}
                        <p
                          className={`${
                            styles.jobTitle.font_style +
                            " " +
                            styles.jobTitle.font_size
                          } mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-center ${
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
                          } text-center`}
                          style={{ color: styles.company.font_color }}
                        >
                          {data.company_name && "At " + data.company_name}
                        </p>
                        {/* Tag Line */}
                        <p
                          className={`mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-center ${
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
                          } my-2 text-center ${!data.location && "invisible"}`}
                          style={{ color: styles.location.font_color }}
                        >
                          <span
                            className="bi-geo-alt-fill me-2"
                            style={{ color: styles.location.font_color }}
                          ></span>
                          {data.location && data.location}
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
                  </div>
                </Magnetic>
              )}
              {/* Right */}
              {data && styles && data.card_layout === "right" && (
                <Magnetic>
                  <div
                    className={`rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 lg:mb-0 mb-10`}
                    style={{ backgroundColor: styles.cardBg.bg_color }}
                  >
                    <div
                      className={`lg:h-24 h-32 relative flex justify-between ${
                        !data.covor_picture
                          ? styles.coverBG.bg_color === "gradient-cover" &&
                            styles.coverBG.bg_color
                          : ""
                      }`}
                    >
                      {data.covor_picture && (
                        <img
                          src={data.covor_picture}
                          alt="cover"
                          className="w-full object-cover
            "
                        />
                      )}

                      <div className="absolute lg:top-10 top-16 right-2 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden">
                        <img
                          src={data.main_picture ? data.main_picture : userPic}
                          alt="user"
                          className=""
                        />
                      </div>
                      {/* Pronoun and Name */}
                      <div className="content-center">
                        <p
                          className={`absolute left-0 w-48 text-center overflow-hidden text-ellipsis text-nowrap ${
                            styles.name.font_style + " " + styles.name.font_size
                          } ${
                            data.covor_picture && "glass-effect text-shadow"
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
                            className="absolute left-0 -top-6 w-14 h-14 rounded-full border-2 bg-white"
                          />
                        )}
                        {/* Job Title */}
                        <p
                          className={`${
                            styles.jobTitle.font_style +
                            " " +
                            styles.jobTitle.font_size
                          } mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-end lg:mt-0 mt-4 ${
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
                          } text-end`}
                          style={{ color: styles.company.font_color }}
                        >
                          {data.company_name && "At " + data.company_name}
                        </p>
                        {/* Tag Line */}
                        <p
                          className={`mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-end ${
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
                          } my-2 text-end ${!data.location && "invisible"}`}
                          style={{ color: styles.location.font_color }}
                        >
                          <span
                            className="bi-geo-alt-fill me-2"
                            style={{ color: styles.location.font_color }}
                          ></span>
                          {data.location && data.location}
                        </p>
                      </div>
                    </div>
                    <div className="px-4">
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
                              className={`${media.icon} text-white text-3xl text-center rounded-md py-2 shadow-inner`}
                              style={{ backgroundColor: media.color }}
                            ></Link>
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
