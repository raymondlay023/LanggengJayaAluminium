import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MenuLinks } from './Navbar';

interface ResponsiveMenuProps {
    showMenu: boolean;
}

const appName = import.meta.env.VITE_APP_NAME;

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ showMenu }) => {
    return (
        <div>
            <div
                className={`${
                    showMenu ? 'left-0' : 'left-[-100%]'
                } fixed top-0 bottom-0 z-50 flex w-[75%] flex-col justify-between bg-white px-8 pt-16 pb-4 shadow-md transition-all duration-300 dark:bg-gray-900`}
            >
                {/* User section */}
                <div className="flex items-center justify-start gap-3">
                    <FaUserCircle size={50} />
                    <div>
                        <h1 className="text-sm text-slate-500">Premium User</h1>
                    </div>
                </div>

                {/* Menu Section */}
                <nav className="mt-12">
                    <ul className="space-y-4 text-xl">
                        {MenuLinks.map(({ id, name, link }) => (
                            <li key={id} className="cursor-pointer py-4">
                                <a href={link} className="mb-5 inline-block">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer Section */}
                <div>
                    <h1 className="text-center text-sm text-slate-500">&copy; 2025 {appName}. All rights reserved.</h1>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveMenu;
