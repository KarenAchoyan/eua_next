import "@/app/[lang]/globals.css";
import App from "@/components/layouts/app";


export default async function RootLayout({params, children }) {

    console.log(params)
    return (
        <html >
        <body>
        <App locale={'en'}>
            {children}
        </App>
        </body>
        </html>
    );
}
