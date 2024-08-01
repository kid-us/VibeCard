import useProduct from "@/store/useProduct";
import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface Props {
  showPreview: (value: boolean) => void;
}

const Preview = ({ showPreview }: Props) => {
  const { back, front, productId } = useProduct();

  const printRef = useRef<HTMLDivElement>(null);

  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);

  //   Get images from a file
  useEffect(() => {
    if (front.image) {
      const url = URL.createObjectURL(front.image);
      setFrontImage(url);
    }
    if (back.image) {
      const url = URL.createObjectURL(back.image);
      setBackImage(url);
    }
  }, [front, back]);

  //   Style
  const style =
    Number(productId) === 2
      ? "lg:top-32 top-2 z-50 lg:w-[70%] w-[98%] lg:h-[75dvh] h-[98dvh]"
      : Number(productId) === 3 ||
        Number(productId) === 4 ||
        Number(productId) === 5
      ? "lg:top-32 top-2 z-50 lg:w-[50%] w-[98%] lg:h-[70dvh] h-[98dvh]"
      : "";

  // Handling Print
  const handlePrint = async () => {
    if (!printRef.current) return;
    // Capture the content of the modal
    const canvas = await html2canvas(printRef.current, {
      scale: 2, // Increase scale for better quality
      useCORS: true, // Use CORS to handle external resources
      scrollX: 0,
      scrollY: -window.scrollY, // Adjust for any scrolling
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height], // Set PDF dimensions to match canvas
    });

    // Adjust for scaling and multi-page content
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    // const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    let position = 0;
    let remainingHeight = imgHeight;
    // let remainingWidth = imgWidth;

    while (remainingHeight > 0) {
      const sliceHeight = Math.min(pdfHeight, remainingHeight);
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, sliceHeight);
      remainingHeight -= sliceHeight;
      position -= pdfHeight;
      if (remainingHeight > 0) {
        pdf.addPage();
      }
    }

    // pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("viebcard_product.pdf");
  };

  return (
    <>
      <div className="overlay w-full z-50"></div>
      <div className="flex justify-center align-center">
        <div
          ref={printRef}
          className={`fixed ${style} lg:w-[45%] w-[98%] lg:h-[100dvh] h-[98dvh] lg:top-4 top-2 z-50 bg-gray-200 rounded-lg border-gradient-2 lg:overflow-auto overflow-y-scroll`}
        >
          <div className="relative flex justify-between ">
            <button
              onClick={handlePrint}
              className="absolute lg:left-10 left-2 top-3 text-xl text-blue-600 bi-printer-fill"
            ></button>
            <p
              onClick={() => showPreview(false)}
              className="absolute lg:right-10 right-2 top-3 bi-x-lg text-xl text-red-600 cursor-pointer"
            ></p>
          </div>

          <>
            <div className="lg:px-20 px-2">
              <p className="lg:mt-8 text-sm mb-2 mt-14">Front</p>
              {/* Front */}
              <div
                className={`relative rounded-md w-full lg:h-[280px] h-[220px] mb-5 shadow-md shadow-zinc-900 overflow-hidden ${
                  front.pickedBg === "#ffffff" ? front.bgColor : ""
                }`}
                style={{
                  backgroundColor:
                    front.pickedBg === "#ffffff" ? "" : front.pickedBg,
                }}
              >
                <div
                  className={`flex justify-center items-center h-full overflow-hidden`}
                >
                  {frontImage && (
                    <div
                      className={`absolute`}
                      style={{
                        transform: `translate(${front.imagePosition.x}px, ${front.imagePosition.y}px)`,
                      }}
                    >
                      <img
                        src={frontImage}
                        alt="user"
                        className={`h-${front.imageSize} w-${front.imageSize} object-cover`}
                      />
                    </div>
                  )}
                  {front.text !== "" && (
                    <div
                      className="absolute top-0"
                      style={{
                        transform: `translate(${front.textPosition.x}px, ${front.textPosition.y}px)`,
                      }}
                    >
                      <p
                        className={`${front.fontStyle} text-${front.textSize} overflow-hidden text-ellipsis px-2`}
                        style={{
                          color: front.color,
                        }}
                      >
                        {front.text}
                      </p>
                    </div>
                  )}
                  {front.extraText !== "" && (
                    <div
                      className="absolute bottom-5"
                      style={{
                        transform: `translate(${front.extraTextPosition.x}px, ${front.extraTextPosition.y}px)`,
                      }}
                    >
                      <p
                        className={`${front.extraTextFontStyle} text-${front.extraTextFontSize} overflow-hidden text-ellipsis px-2`}
                        style={{
                          color: front.extraTextColor,
                        }}
                      >
                        {front.extraText}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {/* Back */}
              <p className="mt-8 text-sm mb-2">Back</p>
              <div
                className={`relative rounded-md w-full lg:h-[280px] h-[220px] mb-5 shadow-md shadow-zinc-900 overflow-hidden ${
                  back.pickedBg === "#ffffff" ? back.bgColor : ""
                }`} 
                style={{
                  backgroundColor:
                    back.pickedBg === "#ffffff" ? "" : back.pickedBg,
                }}
              >
                <div
                  className={`flex justify-center items-center h-full overflow-hidden`}
                >
                  {backImage && (
                    <div
                      className={`absolute`}
                      style={{
                        transform: `translate(${back.imagePosition.x}px, ${back.imagePosition.y}px)`,
                      }}
                    >
                      <img
                        src={backImage}
                        alt="user"
                        className={`h-${back.imageSize} w-${back.imageSize} object-cover`}
                      />
                    </div>
                  )}
                  {back.text !== "" && (
                    <div
                      className="absolute top-3"
                      style={{
                        transform: `translate(${back.textPosition.x}px, ${back.textPosition.y}px)`,
                      }}
                    >
                      <p
                        className={`${back.fontStyle} text-${back.textSize} overflow-hidden text-ellipsis px-2`}
                        style={{
                          color: back.color,
                        }}
                      >
                        {back.text}
                      </p>
                    </div>
                  )}
                  {back.extraText !== "" && (
                    <div
                      className="absolute bottom-5"
                      style={{
                        transform: `translate(${back.extraTextPosition.x}px, ${back.extraTextPosition.y}px)`,
                      }}
                    >
                      <p
                        className={`${back.extraTextFontStyle} text-${back.extraTextFontSize} overflow-hidden text-ellipsis px-2`}
                        style={{
                          color: back.extraTextColor,
                        }}
                      >
                        {back.extraText}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>

          {/*Large Device  Product 2  */}
          {/* {Number(productId) === 2 && (
            <div className="lg:block hidden">
              <div className="lg:flex hidden justify-center gap-x-80">
                <p className="mt-8 text-sm mb-2">Front</p>
                <p className="mt-8 text-sm mb-2">Back</p>
              </div>
              <div className="lg:flex justify-center gap-x-10 lg:mt-0 mt-10 lg:ms-0">
                Front
                <p className="mt-8 text-sm mb-2">Front</p>
                <div
                  className={`relative flex rounded-md lg:w-[310px] w-[200px] lg:h-[470px] h-[270px] mb-5 shadow-lg shadow-zinc-900 cursor-pointer overflow-hidden ${
                    front.pickedBg === "#ffffff" ? front.bgColor : ""
                  }`}
                  style={{
                    backgroundColor:
                      front.pickedBg === "#ffffff" ? "" : front.pickedBg,
                  }}
                >
                  <div
                    className={`flex justify-center items-center h-full overflow-hidden`}
                  >
                    {frontImage && (
                      <img
                        src={frontImage}
                        alt="user"
                        className={`h-${front.imageSize} w-${front.imageSize} object-cover`}
                      />
                    )}
                    {front.text !== "" && (
                      <p
                        className={`${front.textAlignment} ${front.fontStyle} text-${front.textSize} overflow-hidden text-ellipsis px-2`}
                        style={{
                          color: front.color,
                        }}
                      >
                        {front.text}
                      </p>
                    )}
                  </div>
                </div>
                Back
                <p className="mt-8 text-sm mb-2">Back</p>
                <div
                  className={`relative rounded-md lg:w-[310px] w-[200px] lg:h-[470px] h-[270px] mb-5 shadow-lg shadow-zinc-900 cursor-pointer overflow-hidden ${
                    back.pickedBg === "#ffffff" ? back.bgColor : ""
                  }`}
                  style={{
                    backgroundColor:
                      back.pickedBg === "#ffffff" ? "" : back.pickedBg,
                  }}
                >
                  <div
                    className={`flex justify-center items-center h-full overflow-hidden`}
                  >
                    {backImage && (
                      <img
                        src={backImage}
                        alt="user"
                        className={`h-${back.textSize} w-${back.textSize} object-cover`}
                      />
                    )}
                    {back.text !== "" && (
                      <p
                        className={`${back.textAlignment} ${back.fontStyle} text-${back.textSize} overflow-hidden text-ellipsis px-2`}
                        style={{
                          color: back.color,
                        }}
                      >
                        {back.text}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Preview;
