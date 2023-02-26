import Header from "@/components/Header/page";
import "../styles/globals.css"
import Image from "next/image";
const RootLayout = ({children}) => {
    return (
        <html>
            <body>
                <Image className=" absolute top-0 right-0" width={650} height={500} src={"/pngwing.com 2.png"}/>
                <Header className=" relative top-0"/>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;