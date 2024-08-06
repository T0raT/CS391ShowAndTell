"use client"
import {useState} from "react";
import {GlobeDemo} from "@/components/ui/GlobeDemo";


const ThemeToggle = ({setDark, dark}) => {

    return (

        <label className="z-50 absolute top-5 left-5 inline-flex items-center cursor-pointer ">
            <input type="checkbox" value="" className="sr-only peer" onChange={() => setDark(!dark)}/>
            <div
                className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white"></div>
            <span
                className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{dark ? "Dark" : "Light"} Mode</span>
        </label>

    )
}


export default function Home() {
    const [dark, setDark] = useState(true);

    return (
        <main className={`h-screen w-screen ${dark ? `dark` : ``} bg-${dark ? `black` : `white`}`}>
            {/* Checkout the component */}
            <ThemeToggle setDark={setDark} dark={dark} />
            <GlobeDemo/>
        </main>
    );
}
