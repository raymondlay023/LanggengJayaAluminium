import { useState } from 'react';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import AppLogoIcon from '../app-logo-icon';
import DarkMode from './DarkMode';
import ResponsiveMenu from './ResponsiveMenu';

// Define a type for menu link items
interface MenuLink {
    id: number;
    name: string;
    link: string;
    routeName: string;
}

export const MenuLinks: MenuLink[] = [
    { id: 1, name: 'Home', link: route('home'), routeName: 'home' },
    { id: 1, name: 'Tentang Kami', link: route('about'), routeName: 'about' },
    { id: 2, name: 'Layanan', link: route('services'), routeName: 'services' },
    { id: 3, name: 'Proyek', link: route('projects'), routeName: 'projects' },
];

const appName = import.meta.env.VITE_APP_NAME;

const Navbar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    };

    return (
        <nav className="dark:text-white">
            <div className="container py-8 md:py-6">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div>
                        <a href="/" className="flex items-center">
                            {/* <AppLogo /> */}
                            <AppLogoIcon className="size-24 fill-current text-black dark:text-white" />
                            <span className="text-xl font-semibold sm:text-2xl">{appName}</span>
                        </a>
                    </div>
                    {/* Desktop Navlinks Section */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-8">
                            {MenuLinks.map(({ id, name, link, routeName }) => {
                                const isActive = route().current(routeName); // Sesuaikan jika pakai route name
                                // console.log(url);
                                return (
                                    <li key={id} className="cursor-pointer py-4">
                                        <a
                                            href={link}
                                            className={`py-2 text-xl font-medium transition-all duration-300 ${
                                                isActive
                                                    ? 'text-primary underline underline-offset-8'
                                                    : 'hover:text-primary/50 hover:underline hover:underline-offset-8'
                                            }`}
                                        >
                                            {name}
                                        </a>
                                    </li>
                                );
                            })}
                            <a
                                href="https://wa.me/+6281281654939"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary text-primary-foreground text-lg font-semibold"
                            >
                                Hubungi Kami
                            </a>
                            <DarkMode />
                        </ul>
                    </div>
                    {/* Mobile View */}
                    <div className="flex items-center gap-4 md:hidden">
                        <DarkMode />
                        {showMenu ? (
                            <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer text-2xl" />
                        ) : (
                            <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer text-2xl" />
                        )}
                    </div>
                </div>
            </div>
            {/* Mobile Menu Section */}
            <ResponsiveMenu showMenu={showMenu} />
        </nav>
    );
};

export default Navbar;
