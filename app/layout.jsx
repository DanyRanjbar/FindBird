import Header from "@/components/Header/page";
import "../styles/globals.css"

const RootLayout = ({children}) => {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;