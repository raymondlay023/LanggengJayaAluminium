import React, { useEffect, useState } from 'react';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';

const DarkMode: React.FC = () => {
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        const element = document.documentElement;
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            element.classList.add('dark');
        } else {
            element.classList.remove('dark');
        }
    }, [theme]); // added dependency to prevent running on every render

    return (
        <>
            {theme === 'dark' ? (
                <BiSolidSun onClick={() => setTheme('light')} className="cursor-pointer text-4xl" />
            ) : (
                <BiSolidMoon onClick={() => setTheme('dark')} className="cursor-pointer text-4xl" />
            )}
        </>
    );
};

export default DarkMode;
