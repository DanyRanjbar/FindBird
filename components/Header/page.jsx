import Image from "next/image";
import NavButton from "../navButton/page";

const Header = () => {
  return (
    <header className=" py-5 px-28 bg-transparent relative">
      <div className=" flex justify-between items-center">
        <div className=" flex items-start">
          <Image
            width={150}
            height={100}
            alt={"findbird logo"}
            src={"/find bird2.png"}
          />
        </div>

        <div className=" flex items-center">
          <NavButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
