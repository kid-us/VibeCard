const Content = () => {
  return (
    <div>
      <p className="text-sm text-gray-300 mb-4">Contents</p>

      <div className="bg-white rounded p-2 mb-5">
        <p className="text-xs">Recommended</p>

        <div className="flex justify-between bg-indigo-50 p-2 rounded-lg mt-3 shadow shadow-zinc-800">
          <p className="bi-linkedin text-blue-500 text-xl"></p>
          <p className="bi-plus bg-white shadow shadow-zinc-900 rounded px-2 cursor-pointer active:shadow-none"></p>
        </div>
        <div className="flex justify-between bg-indigo-50 p-2 rounded-lg mt-3 shadow shadow-zinc-800">
          <p className="bi-instagram text-red-500 text-xl"></p>
          <p className="bi-plus bg-white shadow shadow-zinc-900 rounded px-2 cursor-pointer active:shadow-none"></p>
        </div>
        <div className="flex justify-between bg-indigo-50 p-2 rounded-lg mt-3 shadow shadow-zinc-800">
          <p className="bi-globe2 text-zinc-500 text-xl"></p>
          <p className="bi-plus bg-white shadow shadow-zinc-900 rounded px-2 cursor-pointer active:shadow-none"></p>
        </div>

        <p className="text-xs my-5">Contact</p>
        <div className="flex justify-between bg-indigo-50 p-2 rounded-lg mt-3 shadow shadow-zinc-800">
          <p className="bi-geo-alt-fill text-zinc-500 text-xl"></p>
          <p className="bi-plus bg-white shadow shadow-zinc-900 rounded px-2 cursor-pointer active:shadow-none"></p>
        </div>
        <div className="flex justify-between bg-indigo-50 p-2 rounded-lg mt-3 shadow shadow-zinc-800">
          <p className="bi-telegram text-cyan-500 text-xl"></p>
          <p className="bi-plus bg-white shadow shadow-zinc-900 rounded px-2 cursor-pointer active:shadow-none"></p>
        </div>

        <p className="text-xs my-5">Social Media</p>
        <div className="flex justify-between bg-indigo-50 p-2 rounded-lg mt-3 shadow shadow-zinc-800">
          <p className="bi-facebook text-blue-600 text-xl"></p>
          <p className="bi-plus bg-white shadow shadow-zinc-900 rounded px-2 cursor-pointer active:shadow-none"></p>
        </div>
        <div className="flex justify-between bg-indigo-50 p-2 rounded-lg mt-3 shadow shadow-zinc-800">
          <p className="bi-youtube text-red-600 text-xl"></p>
          <p className="bi-plus bg-white shadow shadow-zinc-900 rounded px-2 cursor-pointer active:shadow-none"></p>
        </div>
        <div className="flex justify-between bg-indigo-50 p-2 rounded-lg mt-3 shadow shadow-zinc-800">
          <p className="bi-twitter text-cyan-600 text-xl"></p>
          <p className="bi-plus bg-white shadow shadow-zinc-900 rounded px-2 cursor-pointer active:shadow-none"></p>
        </div>
        <div className="flex justify-between bg-indigo-50 p-2 rounded-lg mt-3 shadow shadow-zinc-800">
          <p className="bi-tiktok text-zinc-600 text-xl"></p>
          <p className="bi-plus bg-white shadow shadow-zinc-900 rounded px-2 cursor-pointer active:shadow-none"></p>
        </div>
        <div className="flex justify-between bg-indigo-50 p-2 rounded-lg mt-3 shadow shadow-zinc-800">
          <p className="bi-snapchat text-yellow-600 text-xl"></p>
          <p className="bi-plus bg-white shadow shadow-zinc-900 rounded px-2 cursor-pointer active:shadow-none"></p>
        </div>
      </div>
    </div>
  );
};

export default Content;
