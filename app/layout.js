
import "../app/globals.css";
import App from "../components/layouts/app";


export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <App>
            {children}
        </App>
        </body>
        </html>
    );
}
