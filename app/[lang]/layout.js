import "@/app/[lang]/globals.css";
import App from "@/components/layouts/app";
import {AppProvider} from "@/provider/AppProvider";
import {getDictionary} from "@/app/[lang]/dictionaries";

export const metadata = {
    title: "EUROPEAN UNIVERSITY OG ARMENIA",
    description: "",
};

async function getMenus() {
    const res = await fetch('https://eua.am/api/menus')
    return res.json()
}

export default async function RootLayout({params, children}) {
    const data = await getMenus();
    const dict = await getDictionary(params.lang)
    return (
        <html>
        <body>
        <AppProvider value={{data, dict}}>
            <App lang={params.lang}>
                {children}
            </App>
        </AppProvider>
        </body>
        </html>
    );
}
