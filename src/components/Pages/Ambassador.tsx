import { Link } from "react-router-dom";
import AmbassadorRegister from "../Ambassador/AmbassadorRegister";
import Faq from "../Home/FAQ";
import Footer from "../Footer/Footer";
import { useState } from "react";
import AmbassadorLogin from "../Ambassador/AmbassadorLogin";

const Ambassador = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="lg:container mx-auto px-2 text-white mt-5">
        <Link to={"/"} className="logo-font text-4xl">
          vibecard
        </Link>
        <div className="lg:grid grid-cols-2 gap-x-16 my-16">
          <div>
            <p className="text-xl ubuntu">Ready to get paid to vibecard?</p>
            <p className="text-lg mt-2">
              The vibecard Ambassador program allows you to sell vibecard to
              your network at a 15% discount, AND get paid 15% of those sales.
              Yep, you read that right: Get paid to give your friends a deal!
            </p>

            <p className="ubuntu mt-3 lg:hidden text-lg">
              Apply to become an Ambassador below, then keep reading for
              additional resources once you're approved!
            </p>

            {active ? (
              <p className="mt-10 ubuntu">
                Do you want to be our ambassador and ge paid?{" "}
                <button
                  onClick={() => setActive(false)}
                  className="text-teal-500"
                >
                  Create ambassador account
                </button>
              </p>
            ) : (
              <p className="mt-10 ubuntu">
                Already an ambassador?{" "}
                <button
                  onClick={() => setActive(true)}
                  className="text-teal-500"
                >
                  Login
                </button>
              </p>
            )}

            <div className="mt-16 lg:block hidden">
              <h1 className="mb-5">FAQs</h1>
              <Faq ambassador={true} />
            </div>
          </div>
          <div className="w-full">
            {active ? <AmbassadorLogin /> : <AmbassadorRegister />}
          </div>
        </div>
        <div className="lg:hidden">
          <h1 className="mb-4">FAQs</h1>
          <Faq ambassador={true} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ambassador;
