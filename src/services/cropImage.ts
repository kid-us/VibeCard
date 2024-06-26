import { Area } from "react-easy-crop";

export const getCroppedImg = (imageSrc: string, pixelCrop: Area) => {
  const image = new Image();
  image.src = imageSrc;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (ctx) {
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return new Promise<string>((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          resolve(url);
        }
      }, "image/jpeg");
    });
  }
  return "";
};
