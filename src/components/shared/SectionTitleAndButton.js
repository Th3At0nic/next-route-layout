"use client";

import { useRouter } from "next/navigation";

const SectionTitleAndButton = ({ title, buttonName, path }) => {
  const router = useRouter();

  const onclickHandler = (pathName) => {
    router.push(pathName);
  };

  return (
    <div className="flex items-center justify-between mb-6 mx-15">
      <h1 className="text-2xl font-bold">{title}</h1>
      <button
        className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
        onClick={() => onclickHandler(path)}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default SectionTitleAndButton;
