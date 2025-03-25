import Contact from "@/components/Contact";

export default function ContactPage({params}) {
    return (
        <Contact lang={params.lang ? params.lang : 'hy'}/>
    );
}
