import { useRouter } from "next/router";

const FlipCard = () => {
  const router = useRouter();
  return (
    <>
      <div
        className=" w-96 h-[360px] mx-10 mb-20 mt-10
          bg-transparent drop-shadow-2xl border-2 border-slate-300 shadow-black rounded-xl
      hover:bg-slate-200 hover:bg-opacity-50 hover:border-none cursor-pointer
    "
      >
        <div className="h-36 w-96 rounded-2xl">
          <h1 className="flex justify-center items-center h-full w-full text-8xl font-bold text-white drop-shadow">
            Hello
          </h1>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
