const Watermark = () => {
  return (
    <>
      <p className="absolute top-1 px-1 right-2 z-40 logo-font text-xs watermark-effect text-shadow text-white">
        vibecard
      </p>
      <p className="absolute top-0 z-50  h-6 w-full"></p>
    </>
  );
};

export default Watermark;
