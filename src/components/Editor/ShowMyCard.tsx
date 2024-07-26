import useProduct from "@/store/useProduct";
import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface Props {
  showPreview: (value: boolean) => void;
}

const ShowMyCard = ({ showPreview }: Props) => {
  const { back, front, productId } = useProduct();

  const printRef = useRef<HTMLDivElement>(null);

  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);

  //   Get images from a file
  useEffect(() => {
    if (front.image) {
      const url = URL.createObjectURL(front.image);
      setFrontImage(url);
      return () => URL.revokeObjectURL(url);
    }
    if (back.image) {
      const url = URL.createObjectURL(back.image);
      setBackImage(url);
      return () => URL.revokeObjectURL(url);
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

  console.log(front.pickedBg);

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

          {/* Product 1 */}
          {Number(productId) === 1 && (
            <>
              <div className="lg:px-20 px-2">
                <p className="lg:mt-8 text-sm mb-2 mt-14">Front</p>
                {/* Front */}
                <div
                  className={`relative rounded-md w-full lg:h-[275px] h-[200px] mb-5 shadow-md shadow-zinc-900 cursor-pointer overflow-hidden ${
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
                {/* Back */}
                <p className="mt-8 text-sm mb-2">Back</p>
                <div
                  className={`relative rounded-md w-full lg:h-[275px] h-[200px] mb-5 shadow-md shadow-zinc-900 cursor-pointer overflow-hidden ${
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
                        className={`h-${back.imageSize} w-${back.imageSize} object-cover`}
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
            </>
          )}

          {/*Large Device  Product 2  */}
          {Number(productId) === 2 && (
            <div className="lg:block hidden">
              <div className="lg:flex hidden justify-center gap-x-80">
                <p className="mt-8 text-sm mb-2">Front</p>
                <p className="mt-8 text-sm mb-2">Back</p>
              </div>
              <div className="lg:flex justify-center gap-x-10 lg:mt-0 mt-10 lg:ms-0">
                {/* Front */}
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
                {/* Back */}
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
          )}

          {/* Product Small Device 2  */}
          {Number(productId) === 2 && (
            <div className="lg:hidden pb-5">
              {/* Front */}
              <p className={`text-sm mb-2 mt-10 text-center`}>Front</p>
              <div className="flex justify-center gap-x-5">
                <div
                  className={`${
                    front.pickedBg === "#ffffff" ? front.bgColor : ""
                  } relative rounded-md w-48 h-[260px] shadow-lg shadow-zinc-900 overflow-hidden`}
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
              </div>

              {/* Back */}
              <p className={`text-sm mb-2 text-center mt-5`}>Back</p>

              <div className="flex justify-center gap-x-5">
                <div
                  className={`${
                    back.pickedBg === "#ffffff" ? back.bgColor : ""
                  } relative rounded-md w-48 h-[260px] shadow-lg shadow-zinc-900 overflow-hidden`}
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
                        className={`h-${back.imageSize} w-${back.imageSize} object-cover`}
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
          )}

          {/* Product 3 */}
          {Number(productId) === 3 && (
            <div className="flex justify-center items-center h-full">
              <div
                className={`${
                  front.pickedBg === "#ffffff" ? front.bgColor : ""
                } relative rounded-md w-full lg:h-[290px] h-[230px] shadow-lg shadow-zinc-900 lg:mx-20 mx-2 overflow-hidden`}
                style={{
                  backgroundColor:
                    front.pickedBg === "#ffffff" ? "" : front.pickedBg,
                }}
              >
                <div className={`h-full`}>
                  <div className={`flex justify-center items-center h-full`}>
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
              </div>
            </div>
          )}

          {/* Product 4 for small and laptop */}
          {Number(productId) === 4 && (
            <div className="flex justify-center items-center h-full lg:mt-0">
              <div
                className={`${
                  front.pickedBg === "#ffffff" ? front.bgColor : ""
                } relative rounded-md w-full lg:h-[290px] h-[230px] shadow-lg shadow-zinc-900 lg:mx-20 mx-2 overflow-hidden`}
                style={{
                  backgroundColor:
                    front.pickedBg === "#ffffff" ? "" : front.pickedBg,
                }}
              >
                <div className={`h-full`}>
                  <div className={`flex justify-center items-center h-full`}>
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
                    {frontImage && (
                      <img
                        src={frontImage}
                        alt="user"
                        className={`h-${front.imageSize} w-${front.imageSize} object-cover`}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Front */}
          {Number(productId) === 5 && (
            <div className="flex justify-center items-center h-full">
              <div
                className={`${
                  front.pickedBg === "#ffffff" ? front.bgColor : ""
                } relative rounded-md lg:w-[310px] w-[280px] lg:h-[470px] h-[420px] shadow-lg shadow-zinc-900 overflow-hidden`}
                style={{
                  backgroundColor:
                    front.pickedBg === "#ffffff" ? "" : front.pickedBg,
                }}
              >
                <div className={`h-full`}>
                  <div className={`flex justify-center items-center h-full`}>
                    {frontImage && (
                      <img
                        src={frontImage}
                        alt="user"
                        className={`h-${front.imageSize}} w-${front.imageSize}} object-cover`}
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
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowMyCard;
