import { SocialMediaContent } from "../../../../services/contents";
import { useContentStore } from "../../../../store/useContentStore";

interface Props {
  id: number;
  error: boolean;
  contents: SocialMediaContent[];
  selectedContents: string[];
  deleteItem: (iconName: string) => void;
  update: (content: SocialMediaContent) => void;
  setId: (value: number) => void;
  onError: (error: boolean) => void;
  onLink: (value: string) => void;
}

const ContentItems = ({
  id,
  error,
  contents,
  selectedContents,
  deleteItem,
  update,
  setId,
  onError,
  onLink,
}: Props) => {
  const { socialMedia } = useContentStore();
  return (
    <div>
      {contents.map((content) => (
        <div key={content.id}>
          <div
            className={`relative flex justify-between p-2 rounded-lg mt-3 shadow-md shadow-zinc-800`}
            style={{ backgroundColor: content.color.replace("text", "bg") }}
          >
            <p className={`${content.icon} text-xl text-white ms-3`}>
              <span className="text-xs ms-5 text-gray-200">
                {content.label}
              </span>
            </p>

            {id === content.id ? (
              <p
                onClick={() => {
                  setId(0);
                  onError(false);
                }}
                className="bi-x-lg bg-red-800 text-white rounded px-2 cursor-pointer shadow-red-600 shadow active:shadow-none pt-1"
              ></p>
            ) : selectedContents.includes(content.icon) ? (
              <div className="flex space-x-2">
                <p
                  onClick={() => deleteItem(content.icon)}
                  className="bi-trash bg-red-800 text-white rounded px-2 cursor-pointer shadow-red-600 shadow active:shadow-none pt-1"
                ></p>
                <p
                  onClick={() => setId(content.id)}
                  className="bi-pen-fill bg-green-800 text-white rounded px-2 cursor-pointer shadow-red-600 shadow active:shadow-none pt-1"
                ></p>
              </div>
            ) : (
              <p
                onClick={() => setId(content.id)}
                className="bi-plus-lg bg-white rounded-full w-8 h-8 px-2 cursor-pointer shadow-zinc-900 shadow-lg active:shadow-none pt-1 text-black"
              ></p>
            )}
          </div>

          {/* Link Input */}
          {content.id === id && (
            <div className="relative bg-white animate__animated animate__fadeInDown mt-1">
              <input
                type="text"
                className={`bg-white w-full py-2 px-3 rounded shadow-md border border-black shadow-zinc-950 placeholder:text-sky-900 text-sm focus:outline-none text-black ${
                  error && "border border-red-500 font-poppins font-semibold"
                }`}
                placeholder={
                  socialMedia.find((s) => s.icon === content.icon)?.link ||
                  "Link"
                }
                onChange={(e) => onLink(e.currentTarget.value)}
                autoFocus
              />
              <p
                onClick={() => update(content)}
                className="absolute bi-check top-0 right-0 text-xl px-3 me-1 mt-1 text-center bg-sky-800 text-white rounded cursor-pointer shadow-md shadow-zinc-900 hover:bg-sky-900"
              ></p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentItems;
