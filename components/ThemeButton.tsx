"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
// import { LuSun, LuMoon } from "react-icons/lu"/;
import { CiLight, CiDark } from "react-icons/ci";

const ThemeButton = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();
    const toggleTheme = () => {
        const newTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={toggleTheme}
            type='button'
            title='toggle theme'
            className='border border-slate-300 rounded-lg p-1 hover:border-blue-600 hover:text-blue-600 transition'>
            {resolvedTheme == "dark" ? (
                <CiLight size={24} />
            ) : (
                <CiDark size={24} />
            )}
        </button>
    );
};

export default ThemeButton;
