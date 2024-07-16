import { Area } from "react-easy-crop";

export const getCroppedImg = async (
  imageSrc: string,
  pixelCrop: Area,
  rotation = 0
): Promise<string> => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Could not get canvas context");
  }

  // Calculate the bounding box of the rotated image
  const maxSize = Math.max(image.width, image.height);
  canvas.width = maxSize;
  canvas.height = maxSize;

  // Rotate the image around its center
  ctx.translate(maxSize / 2, maxSize / 2);
  ctx.rotate((rotation * Math.PI) / 180);
  ctx.translate(-maxSize / 2, -maxSize / 2);

  // Draw the rotated image
  ctx.drawImage(
    image,
    (maxSize - image.width) / 2,
    (maxSize - image.height) / 2
  );

  // Extract the image data from the rotated canvas
  const data = ctx.getImageData(0, 0, maxSize, maxSize);

  // Reset canvas size to the cropped area size
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the cropped image data
  ctx.putImageData(
    data,
    -pixelCrop.x - (maxSize - image.width) / 2,
    -pixelCrop.y - (maxSize - image.height) / 2
  );

  // Return the cropped image as a blob URL
  return new Promise((resolve, reject) => {
    canvas.toBlob((file) => {
      if (file) {
        resolve(URL.createObjectURL(file));
      } else {
        reject(new Error("Canvas is empty"));
      }
    }, "image/jpeg");
  });
};

const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // Avoid CORS issues
    image.src = url;
  });
