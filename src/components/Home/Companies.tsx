import {
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
} from "@/assets";
import "./slider.css";

const companies = [
  { id: 1, img: company1 },
  { id: 2, img: company2 },
  { id: 3, img: company3 },
  { id: 4, img: company4 },
  { id: 5, img: company5 },
  { id: 6, img: company6 },
];

const Companies = () => {
  return (
    <div
      className="sliders pt-3"
      style={
        {
          "--width": "100px",
          "--height": "110px",
          "--quantity": companies.length,
        } as React.CSSProperties
      }
    >
      <div className="lists">
        {companies.map((c) => (
          <div
            key={c.id}
            className="items"
            style={
              {
                "--position": c.id,
              } as React.CSSProperties
            }
          >
            <img
              src={c.img}
              alt="Companies"
              className="h-20 w-full object-contain lg:px-0 px-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
