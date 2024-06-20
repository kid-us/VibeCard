const Footer = () => {
  return (
    <div className="bg-zinc-800 text-white w-full mt-28 p-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-4">
          <div>
            <p className="logo-font text-3xl">vibecard</p>
            <p className="text-sm mt-20">
              2024 <span className="logo-font">vibecard</span> inc.
            </p>
          </div>
          <div>
            <p className="text-gray-300 font-poppins">Products & Pricing</p>
          </div>
          <div>
            <p className="text-gray-300 font-poppins">Resources</p>
          </div>
          <div>
            <p className="text-gray-300 font-poppins">Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
