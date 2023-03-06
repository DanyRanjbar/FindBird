import Image from "next/image";
import Link from "next/link";

const getData=async () => {
    const Data=await fetch("http://localhost:3004/birdlist");
    return Data.json();
}

const Bird = async () => {
    const data=await getData();
    return (
        <div>
            Bird
            <br />
            <Link href={"/"}>home</Link>

            <div>
                {data.map((data)=>{
                    <div key={data.id}>
                        <p>name: {data.title}</p>
                        <Image width={50} height={50} src={data.image}/>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Bird;