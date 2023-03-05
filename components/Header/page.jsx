import NavButton from "../navButton/page";
import "../../styles/Home-css.modules.css"
const Header = () => {
  return (
    <header className=" py-5 px-28 bg-transparent relative">
      <div className=" flex justify-between items-center">
        <div className=" flex items-start">
          <h1 className="text-bold text-2xl ml-10 logo-anim">FindBird</h1>
        </div>

        <div className=" flex items-center">
          <NavButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
