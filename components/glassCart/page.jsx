import "../../styles/Home-css.modules.css";
import Image from "next/image";

const GlassCart = (props) => {
  return (
    <div>
      <div className=" w-60 h-80 rounded-2xl bg-blur">
        <div className="">
          <div className=" flex justify-center">
            <Image width={100} height={50} src={props.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCart;
