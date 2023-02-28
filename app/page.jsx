import "../styles/text-bold.modules.css";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import Header from "@/components/Header/page";
import GlassCart from "@/components/glassCart/page";


const HomePage = () => {
  return (
    <div>
      <Image className=" absolute top-0 right-0" width={630} height={500} src={"/pngwing.com 2.png"}/>
      <Header className=" absolute top-0"/>
      <div className=" flex flex-col ml-40 mt-40 relative">
        <h1 className=" my-4 text-6xl text-bold">Helping you</h1>
        <h1 className=" my-4 text-6xl">to get information</h1>
        <h1 className=" my-4 text-6xl">about your bird</h1>
        <div className=" flex items-center gap-7">
          <input
            className=" w-80 h-11 px-4 text-sm outline-none rounded-full border border-zinc-400 my-7"
            placeholder="find your bird"
            type="search"
          />

          <button
            className=" w-11 h-11 rounded-full
           border-none bg-red-500 flex
           justify-center items-center text-white outline-none text-2xl"
          >
            <CiSearch />
          </button>
        </div>
      </div>

      <div>
        <GlassCart />
      </div>
    </div>
  );
};

export default HomePage;
