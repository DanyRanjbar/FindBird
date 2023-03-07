import "../styles/Home-css.modules.css";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import GlassCart from "@/components/glassCart/page";
import Header from "@/components/Header/page";
import Step from "@/components/step/page";

const HomePage = () => {
  return (
    <div>
      <Image
        className=" image-anim absolute top-0 right-0"
        width={630}
        height={500}
        src={"/pngwing.com 2.png"}
      />
      <Header className=" absolute top-0" />
      <div className=" flex flex-col mt-40 relative animation-h1">
        <h1 className=" my-4 text-6xl text-bold">Helping you</h1>
        <h1 className=" my-4 text-6xl">to get information</h1>
        <h1 className=" my-4 text-6xl">about your bird</h1>
        <div className="opacity-anim flex items-center gap-7">
          <input
            className=" w-80 h-11 px-4 text-sm outline-none rounded-full border border-zinc-400 my-7"
            placeholder="find your bird"
            type="search"
          />

          <button
            className=" w-11 h-11 rounded-full
           border-none bg-red-500 flex hover:bg-red-400 transition-all
           justify-center items-center text-white outline-none text-2xl"
          >
            <CiSearch />
          </button>
        </div>
        <div className=" flex gap-6 mt-10">
          <GlassCart />
        </div>
      </div>

      <div className=" flex justify-around my-40 pt-14 px-10">
        <div className=" my-14 mx-2">
          <Image width={250} height={500} src={"/3_5ak5.png"} />
        </div>
        <div className=" flex flex-col w-[500px]">
          <div className="text-5xl flex gap-2 items-center">
            <p className=" text-bold">How it</p><p>works</p> 
          </div>
          <p className=" my-5">
            This is step to get your bird information
          </p>

          <div>
            <Step/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
