import Image from "next/image";
const Loading = () => {
    return (
        <div className=" flex justify-center items-center h-full w-full bg-white transition-all">
            <Image width={200} priority={true} height={200} src={"/original-86a47cb9ffa9135050fb8bb72fe3af55.png"}/>
        </div>
    );
}

export default Loading;
