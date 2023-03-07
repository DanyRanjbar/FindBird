import { GiArchiveRegister , GiHummingbird } from "react-icons/gi";
import { HiCamera } from "react-icons/hi"
import { IoIosCloudUpload } from "react-icons/io"
import { BsFileEarmarkCheckFill } from "react-icons/bs"
import { RiQuestionnaireFill } from "react-icons/ri"
import "../../styles/Home-css.modules.css";

const Step = () => {
  return (
    <div className=" text-zinc-500 flex flex-wrap gap-10">
      <div className=" flex flex-col w-48 gap-2">
        <div className=" border border-zinc-500 w-14 h-14 flex justify-center items-center rounded-2xl text-3xl">
          <GiArchiveRegister />
        </div>
        <div className=" text-zinc-800 text-bold text-lg">Step One</div>
        <p className=" text-sm">You must register and enter your account</p>
      </div>
      <div className=" flex flex-col w-48 gap-2">
        <div className=" border border-zinc-500 w-14 h-14 flex justify-center items-center rounded-2xl text-3xl">
          <GiHummingbird />
        </div>
        <div className=" text-zinc-800 text-bold text-lg">Step Two</div>
        <p className=" text-sm">Add your birds data to the website</p>
      </div>
      <div className=" flex flex-col w-48 gap-2">
        <div className=" border border-zinc-500 w-14 h-14 flex justify-center items-center rounded-2xl text-3xl">
          <HiCamera />
        </div>
        <div className=" text-zinc-800 text-bold text-lg">Step Three</div>
        <p className=" text-sm">Upload the photo of your bird</p>
      </div>
      <div className=" flex flex-col w-48 gap-2">
        <div className=" border border-zinc-500 w-14 h-14 flex justify-center items-center rounded-2xl text-3xl">
          <IoIosCloudUpload />
        </div>
        <div className=" text-zinc-800 text-bold text-lg">Step Fourth</div>
        <p className=" text-sm">Send us your bird information</p>
      </div>
      <div className=" flex flex-col w-48 gap-2">
        <div className=" border border-zinc-500 w-14 h-14 flex justify-center items-center rounded-2xl text-3xl">
          <RiQuestionnaireFill />
        </div>
        <div className=" text-zinc-800 text-bold text-lg">Step Fifth</div>
        <p className=" text-sm">Confirmation of the accuracy of information by our experts</p>
      </div>
      <div className=" flex flex-col w-48 gap-2">
        <div className=" border border-zinc-500 w-14 h-14 flex justify-center items-center rounded-2xl text-3xl">
          <BsFileEarmarkCheckFill />
        </div>
        <div className=" text-zinc-800 text-bold text-lg">Step Sixth</div>
        <p className=" text-sm">Posting your information by our experts</p>
      </div>
      
    </div>
  );
};

export default Step;
