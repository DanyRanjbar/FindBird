import Link from "next/link";

const NavButton = () => {
  return (
    <div className=" flex justify-between items-center gap-1">
      <Link href={"/"}>
        <button
          className=" w-[110px] h-6 
            text-base bg-transparent flex
            justify-center items-center
            transition-all hover:transition-all hover:text-zinc-500">
            Home
        </button>
      </Link>
      <Link href={"/"}>
        <button
          className=" w-[110px] h-6 
            text-base bg-transparent flex
            justify-center items-center
            transition-all hover:transition-all hover:text-zinc-500">
            How it work
        </button>
      </Link>
      <Link href={"/"}>
        <button
          className=" w-[110px] h-6 
            text-base bg-transparent flex
            justify-center items-center
            transition-all hover:transition-all hover:text-zinc-500">
            info
        </button>
      </Link>
      <Link href={"/"}>
        <button
          className=" w-[110px] h-6 
            text-base bg-transparent flex
            justify-center items-center
            transition-all hover:transition-all hover:text-zinc-500">
            News
        </button>
      </Link>
      <Link href={"/"}>
        <button
          className=" w-[110px] h-6 
            text-base bg-transparent flex
            justify-center items-center
            transition-all hover:transition-all hover:text-zinc-500">
            Contact
        </button>
      </Link>
    </div>
  );
};

export default NavButton;
