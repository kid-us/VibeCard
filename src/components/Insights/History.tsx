interface Props {
  view: number;
  contact: number;
  social: number;
}

const History = ({ view, contact, social }: Props) => {
  return (
    <div className="lg:grid grid-cols-3 pb-5 lg:gap-x-5">
      {/* Card Views */}
      <div className="w-full shadow shadow-gray-400 rounded px-5 py-4 bg-white text-black lg:mb-0 mb-3">
        <p className="chakra">Card Views</p>
        <h1 className="font-poppins text-3xl mt-3 font-extrabold">{view}</h1>
      </div>
      {/* Link taps */}
      <div className="w-full shadow shadow-gray-600 rounded px-5 py-4 bg-white text-black lg:mb-0 mb-3">
        <p className="chakra">Links taps</p>
        <h1 className="font-poppins text-3xl mt-3 font-extrabold">{social}</h1>
      </div>
      {/* Contact Downloaded */}
      <div className="w-full shadow shadow-gray-600 rounded px-5 py-4 bg-white text-black lg:mb-0 mb-3">
        <p className="chakra">Contact Taps</p>
        <h1 className="font-poppins text-3xl mt-3 font-extrabold">{contact}</h1>
      </div>
    </div>
  );
};

export default History;
