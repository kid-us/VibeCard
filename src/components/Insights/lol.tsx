{cards.length> 0 &&

cards[0].card_layout === "default" ? (
  <div className="h-[100vh] w-[130vw]">
    <div
      className={`rounded-2xl overflow-hidden shadow-lg shadow-zinc-800 z-0 lg:mb-0 mb-14`}
      style={{ backgroundColor: cards[0].styles.cardBg.bg_color }}
    >
      <div
        className={`lg:h-24 h-32 relative flex justify-between z-0 ${
          !cards[0].covor_picture
            ? cards[0].styles.coverBG.bg_color === "gradient-cover" &&
              `${cards[0].styles.coverBG.bg_color} z-0`
            : ""
        }`}
      >
        {cards[0].covor_picture && (
          <img
            src={cards[0].covor_picture}
            alt="cover"
            className="w-full object-cover
        "
          />
        )}
        <div className="absolute lg:top-10 top-16 left-2 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden z-0">
          <img
            src={cards[0].main_picture ? cards[0].main_picture : userPic}
            alt="user"
          />
        </div>
        {/* Pronoun and Name */}
        <div className="content-center">
          <p
            className={`absolute right-0 me-1 w-48 text-center overflow-hidden text-ellipsis text-nowrap ${
              cards[0].styles.name.font_style +
              " " +
              cards[0].styles.name.font_size
            } ${cards[0].covor_picture && "glass-effect text-shadow"}`}
            style={{ color: cards[0].styles.name.font_color }}
          >
            <span
              className={` ${
                cards[0].styles.pronoun.font_style +
                " " +
                cards[0].styles.pronoun.font_size
              }`}
              style={{ color: cards[0].styles.pronoun.font_color }}
            >
              {cards[0].pronouns && "(" + cards[0].pronouns + ")"}{" "}
            </span>

            {cards[0].full_name && cards[0].full_name}
          </p>
        </div>
      </div>
      <div className="px-5 mt-10 text-white">
        <div className="relative">
          {cards[0].company_logo && (
            <img
              src={cards[0].company_logo}
              alt="Cover"
              className="absolute right-0 -top-6 w-14 h-14 rounded-full border-2 bg-white"
            />
          )}
          {/* Job Title */}
          <p
            className={`${
              cards[0].styles.jobTitle.font_style +
              " " +
              cards[0].styles.jobTitle.font_size
            } mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase lg:mt-0 mt-4 ${
              !cards[0].job_title && "invisible"
            } `}
            style={{ color: cards[0].styles.jobTitle.font_color }}
          >
            {cards[0].job_title && cards[0].job_title}
          </p>
          {/* Company */}
          <p
            className={`${!cards[0].company_name && "invisible"} ${
              cards[0].styles.company.font_style +
              " " +
              cards[0].styles.company.font_size
            }`}
            style={{ color: cards[0].styles.company.font_color }}
          >
            {cards[0].company_name && "At " + cards[0].company_name}
          </p>
          {/* Tag Line */}
          <p
            className={`mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase ${
              !cards[0].bio && "invisible"
            } ${
              cards[0].styles.bio.font_style +
              " " +
              cards[0].styles.bio.font_size
            }`}
            style={{ color: cards[0].styles.bio.font_color }}
          >
            {cards[0].bio && cards[0].bio}
          </p>
          {/* Location */}
          <p
            className={`${
              cards[0].styles.location.font_style +
              " " +
              cards[0].styles.location.font_size
            } my-2`}
            style={{ color: cards[0].styles.location.font_color }}
          >
            <span
              className="bi-geo-alt-fill me-2"
              style={{ color: cards[0].styles.location.font_color }}
            ></span>

            {cards[0].location && cards[0].location}
          </p>
        </div>

        {/* Contacts */}
        {cards[0].styles.contacts.length > 0 && (
          <div
            className={`lg:my-2 my-5 ${
              cards[0].styles.contacts.length > 0
                ? `grid ${
                    cards[0].styles.contacts.length <= 3
                      ? "grid-cols-3"
                      : "grid-cols-5"
                  }  gap-5 my-5`
                : "invisible"
            }`}
          >
            {cards[0].styles.contacts.map((c) => (
              <p
                key={c.icon}
                className={`${c.icon} text-3xl text-center rounded-lg py-2 shadow-inner`}
                style={{
                  color: c.color.replace("bg", "text"),
                }}
              ></p>
            ))}
          </div>
        )}

        {/* Social Media */}
        {cards[0].styles.socialMedia.length > 0 && (
          <div
            className={`lg:mb-0 mb-5 ${
              cards[0].styles.socialMedia.length > 0
                ? `grid ${
                    cards[0].styles.socialMedia.length <= 3
                      ? "grid-cols-3"
                      : "grid-cols-4"
                  }  gap-3`
                : "invisible"
            }`}
          >
            {cards[0].styles.socialMedia.map((media) => (
              <p
                key={media.icon}
                className={`${media.icon} text-3xl text-center rounded-md py-2 shadow-inner`}
                style={{ backgroundColor: media.color }}
              ></p>
            ))}
          </div>
        )}

        <button
          className={`w-full rounded-lg py-4 mb-8 mt-5 shadow-md font-poppins font-extrabold shadow-zinc-950`}
          style={{
            backgroundColor: cards[0].styles.button.bg_color,
            color: cards[0].styles.button.text_color,
          }}
        >
          Save Contact
        </button>
      </div>
    </div>
  </div>
) : cards[0].card_layout === "centered" ? (
  <div
    className={`rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 lg:mb-0 mb-14`}
    style={{ backgroundColor: cards[0].styles.cardBg.bg_color }}
  >
    <div
      className={`lg:h-24 h-32 relative flex justify-between ${
        !cards[0].covor_picture
          ? cards[0].styles.coverBG.bg_color === "gradient-cover" &&
            `${cards[0].styles.coverBG.bg_color} z-0`
          : ""
      }`}
    >
      {cards[0].covor_picture && (
        <img
          src={cards[0].covor_picture}
          alt="cover"
          className="w-full object-cover
    "
        />
      )}

      <div className="absolute lg:top-10 top-16 left-1/3 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden">
        <img
          src={cards[0].main_picture ? cards[0].main_picture : userPic}
          alt="user"
        />
      </div>
      {cards[0].company_logo && (
        <img
          src={cards[0].company_logo}
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
              cards[0].styles.name.font_style +
              " " +
              cards[0].styles.name.font_size
            } `}
            style={{ color: cards[0].styles.name.font_color }}
          >
            <span
              className={` ${
                cards[0].styles.pronoun.font_style +
                " " +
                cards[0].styles.pronoun.font_size
              }`}
              style={{ color: cards[0].styles.pronoun.font_color }}
            >
              {cards[0].pronouns && "(" + cards[0].pronouns + ")"}{" "}
            </span>

            {cards[0].full_name && cards[0].full_name}
          </p>
        </div>

        {/* Job Title */}
        <p
          className={`${
            cards[0].styles.jobTitle.font_style +
            " " +
            cards[0].styles.jobTitle.font_size
          } mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-center ${
            !cards[0].job_title && "invisible"
          } `}
          style={{ color: cards[0].styles.jobTitle.font_color }}
        >
          {cards[0].job_title && cards[0].job_title}
        </p>
        {/* Company */}
        <p
          className={`${!cards[0].company_name && "invisible"} ${
            cards[0].styles.company.font_style +
            " " +
            cards[0].styles.company.font_size
          } text-center`}
          style={{ color: cards[0].styles.company.font_color }}
        >
          {cards[0].company_name && "At " + cards[0].company_name}
        </p>
        {/* Tag Line */}
        <p
          className={`mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-center ${
            !cards[0].bio && "invisible"
          } ${
            cards[0].styles.bio.font_style + " " + cards[0].styles.bio.font_size
          }`}
          style={{ color: cards[0].styles.bio.font_color }}
        >
          {cards[0].bio && cards[0].bio}
        </p>
        {/* Location */}
        <p
          className={`${
            cards[0].styles.location.font_style +
            " " +
            cards[0].styles.location.font_size
          } my-2 text-center ${!location && "invisible"}`}
          style={{ color: cards[0].styles.location.font_color }}
        >
          <span
            className="bi-geo-alt-fill me-2"
            style={{ color: cards[0].styles.location.font_color }}
          ></span>
          {cards[0].location && cards[0].location}
        </p>
      </div>

      {/* Contacts */}
      {cards[0].styles.contacts.length > 0 && (
        <div
          className={`lg:my-2 my-5 ${
            cards[0].styles.contacts.length > 0
              ? `grid ${
                  cards[0].styles.contacts.length <= 3
                    ? "grid-cols-3"
                    : "grid-cols-5"
                }  gap-5 my-5`
              : "invisible"
          }`}
        >
          {cards[0].styles.contacts.map((c) => (
            <p
              key={c.icon}
              className={`${c.icon} text-3xl text-center rounded-lg py-2 shadow-inner`}
              style={{
                color: c.color.replace("bg", "text"),
              }}
            ></p>
          ))}
        </div>
      )}

      {/* Social Media */}
      {cards[0].styles.socialMedia.length > 0 && (
        <div
          className={`lg:mb-0 mb-5 ${
            cards[0].styles.socialMedia.length > 0
              ? `grid ${
                  cards[0].styles.socialMedia.length <= 3
                    ? "grid-cols-3"
                    : "grid-cols-4"
                }  gap-3`
              : "invisible"
          }`}
        >
          {cards[0].styles.socialMedia.map((media) => (
            <p
              key={media.icon}
              className={`${media.icon} text-3xl text-center rounded-md py-2 shadow-inner`}
              style={{ backgroundColor: media.color }}
            ></p>
          ))}
        </div>
      )}

      <button
        className={`w-full rounded-lg py-4 mb-8 mt-5 shadow-md font-poppins font-extrabold shadow-zinc-950`}
        style={{
          backgroundColor: cards[0].styles.button.bg_color,
          color: cards[0].styles.button.text_color,
        }}
      >
        Save Contact
      </button>
    </div>
  </div>
) : (
  cards[0].card_layout === "right" && (
    <div
      className={`rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 lg:mb-0 mb-10`}
      style={{ backgroundColor: cards[0].styles.cardBg.bg_color }}
    >
      <div
        className={`lg:h-24 h-32 relative flex justify-between ${
          !cards[0].covor_picture
            ? cards[0].styles.coverBG.bg_color === "gradient-cover" &&
              cards[0].styles.coverBG.bg_color
            : ""
        }`}
      >
        {cards[0].covor_picture && (
          <img
            src={cards[0].covor_picture}
            alt="cover"
            className="w-full object-cover
    "
          />
        )}

        <div className="absolute lg:top-10 top-16 right-2 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden">
          <img
            src={cards[0].main_picture ? cards[0].main_picture : userPic}
            alt="user"
            className=""
          />
        </div>
        {/* Pronoun and Name */}
        <div className="content-center">
          <p
            className={`absolute left-0 w-48 text-center overflow-hidden text-ellipsis text-nowrap ${
              cards[0].styles.name.font_style +
              " " +
              cards[0].styles.name.font_size
            } ${cards[0].covor_picture && "glass-effect text-shadow"} `}
            style={{ color: cards[0].styles.name.font_color }}
          >
            <span
              className={` ${
                cards[0].styles.pronoun.font_style +
                " " +
                cards[0].styles.pronoun.font_size
              }`}
              style={{ color: cards[0].styles.pronoun.font_color }}
            >
              {cards[0].pronouns && "(" + cards[0].pronouns + ")"}{" "}
            </span>

            {cards[0].full_name && cards[0].full_name}
          </p>
        </div>
      </div>
      <div className="px-5 mt-10 text-white">
        <div className="relative">
          {cards[0].company_logo && (
            <img
              src={cards[0].company_logo}
              alt="Cover"
              className="absolute left-0 -top-6 w-14 h-14 rounded-full border-2 bg-white"
            />
          )}
          {/* Job Title */}
          <p
            className={`${
              cards[0].styles.jobTitle.font_style +
              " " +
              cards[0].styles.jobTitle.font_size
            } mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-end lg:mt-0 mt-4 ${
              !cards[0].job_title && "invisible"
            } `}
            style={{ color: cards[0].styles.jobTitle.font_color }}
          >
            {cards[0].job_title && cards[0].job_title}
          </p>
          {/* Company */}
          <p
            className={`${!cards[0].company_name && "invisible"} ${
              cards[0].styles.company.font_style +
              " " +
              cards[0].styles.company.font_size
            } text-end`}
            style={{ color: cards[0].styles.company.font_color }}
          >
            {cards[0].company_name && "At " + cards[0].company_name}
          </p>
          {/* Tag Line */}
          <p
            className={`mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-end ${
              !cards[0].bio && "invisible"
            } ${
              cards[0].styles.bio.font_style +
              " " +
              cards[0].styles.bio.font_size
            }`}
            style={{ color: cards[0].styles.bio.font_color }}
          >
            {cards[0].bio && cards[0].bio}
          </p>
          {/* Location */}
          <p
            className={`${
              cards[0].styles.location.font_style +
              " " +
              cards[0].styles.location.font_size
            } my-2 text-end ${!location && "invisible"}`}
            style={{ color: cards[0].styles.location.font_color }}
          >
            <span
              className="bi-geo-alt-fill me-2"
              style={{ color: cards[0].styles.location.font_color }}
            ></span>
            {cards[0].location && cards[0].location}
          </p>
        </div>
      </div>
      <div className="px-4">
        {/* Contacts */}
        {cards[0].styles.contacts.length > 0 && (
          <div
            className={`lg:my-2 my-5 ${
              cards[0].styles.contacts.length > 0
                ? `grid ${
                    cards[0].styles.contacts.length <= 3
                      ? "grid-cols-3"
                      : "grid-cols-5"
                  }  gap-5 my-5`
                : "invisible"
            }`}
          >
            {cards[0].styles.contacts.map((c) => (
              <p
                key={c.icon}
                className={`${c.icon} text-3xl text-center rounded-lg py-2 shadow-inner`}
                style={{
                  color: c.color.replace("bg", "text"),
                }}
              ></p>
            ))}
          </div>
        )}

        {/* Social Media */}
        {cards[0].styles.socialMedia.length > 0 && (
          <div
            className={`lg:mb-0 mb-5 ${
              cards[0].styles.socialMedia.length > 0
                ? `grid ${
                    cards[0].styles.socialMedia.length <= 3
                      ? "grid-cols-3"
                      : "grid-cols-4"
                  }  gap-3`
                : "invisible"
            }`}
          >
            {cards[0].styles.socialMedia.map((media) => (
              <p
                key={media.icon}
                className={`${media.icon} text-white text-3xl text-center rounded-md py-2 shadow-inner`}
                style={{ backgroundColor: media.color }}
              ></p>
            ))}
          </div>
        )}

        <button
          className={`w-full rounded-lg py-4 mb-8 mt-5 shadow-md font-poppins font-extrabold shadow-zinc-950`}
          style={{
            backgroundColor: cards[0].styles.button.bg_color,
            color: cards[0].styles.button.text_color,
          }}
        >
          Save Contact
        </button>
      </div>
    </div>
  )
)

}