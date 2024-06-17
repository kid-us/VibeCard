import { ChangeEvent, useState } from "react";

interface Props {
  type: "profile" | "cover" | "logo";
  onPreviewChange: (
    type: "profile" | "cover" | "logo",
    preview: string | null
  ) => void;
  title: string;
}

const InputImages = ({ type, title, onPreviewChange }: Props) => {
  const [, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const previewURL = URL.createObjectURL(selectedFile);
      setPreview(previewURL);
      onPreviewChange(type, previewURL);
      if (type === "cover") {
        console.log("Lorem");
      }
    }
  };

  return (
    <div>
      <p className="text-xs text-gray-800 mb-4 font-poppins first-letter:uppercase">
        {title}
      </p>
      <div
        className={`border rounded-lg border-gray-300 bg-stone-200 ${
          type === "cover" ? "w-72 h-24" : "w-28 h-24"
        } p-1 relative overflow-hidden`}
      >
        <input
          type="file"
          id={`${type}-file`}
          className="hidden"
          onChange={handleFileChange}
          accept="image/*"
        />
        {preview ? (
          <div>
            <img
              src={preview}
              alt={`${type} preview`}
              className="file-preview"
            />
          </div>
        ) : (
          <label htmlFor={`${type}-file`} className="cursor-pointer">
            <div className="flex flex-col text-center mt-5">
              <i className="bi-image text-xl text-gray-800"></i>
              <span className="text-[8px] text-gray-600">
                Select image or video file or drag and drop one here
              </span>
            </div>
          </label>
        )}
      </div>
    </div>
  );
};

export default InputImages;
