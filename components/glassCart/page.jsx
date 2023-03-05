import "../../styles/Home-css.modules.css";
import Image from "next/image";

const GlassCart = () => {
  return (
    <div className=" flex items-center gap-8">
      <div className=" w-60 h-80 p-10 rounded-2xl bg-blur">
        <div className=" flex flex-col justify-center">
          <div className=" flex justify-center p-2">
            <Image width={110} height={50} src={"https://s2.uupload.ir/files/1_j3tw.png"} />
          </div>
          <div className=" flex justify-center">
            <p className=" text-bold">Blue jay</p>
          </div>
          <div className=" flex justify-center">
            <p className=" text-zinc-400 text-sm">Cyanocitta cristata</p>
          </div>
          <div className=" flex justify-center mt-5">
            <p className=" text-zinc-400 textnowrap text-xs">deciduous and coniferous forests</p>
          </div>
          <a className="effect-underline text-cyan-400 text-sm flex justify-center mt-2" href="#">learn more</a>
        </div>
      </div>

      <div className=" w-60 h-80 p-10 rounded-2xl bg-blur">
        <div className=" flex flex-col justify-center">
          <div className=" flex justify-center">
            <Image width={60} height={50} src={"https://s2.uupload.ir/files/3_5ak5.png"} />
          </div>
          <div className=" flex justify-center">
            <p className=" text-bold">Silver Breasted</p>
          </div>
          <div className=" flex justify-center">
            <p className=" text-zinc-400 text-sm">Eurylaimidae</p>
          </div>
          <div className=" flex justify-center mt-5">
            <p className=" text-zinc-400 textnowrap text-xs">subtropical or tropical moist lowland forest and subtropical or tropical moist montane forest</p>
          </div>
          <a className="effect-underline text-cyan-400 text-sm flex justify-center mt-2" href="#">learn more</a>
        </div>
      </div>

      <div className=" w-60 h-80 p-10 rounded-2xl bg-blur">
        <div className=" flex flex-col justify-center">
          <div className=" flex justify-center mb-5">
            <Image width={60} height={50} src={"https://s2.uupload.ir/files/wallpaperflare.com_wallpaper_2b33.png"} />
          </div>
          <div className=" flex justify-center">
            <p className=" text-bold">Lilac breasted</p>
          </div>
          <div className=" flex justify-center">
            <p className=" text-zinc-400 text-sm">Coraciidae</p>
          </div>
          <div className=" flex justify-center mt-5">
            <p className=" text-zinc-400 textnowrap text-xs">open woodland and savanna, and it is for the most part absent from treeless places</p>
          </div>
          <a className="effect-underline text-cyan-400 text-sm flex justify-center mt-2" href="#">learn more</a>
        </div>
      </div>
    </div>
  );
};

export default GlassCart;
