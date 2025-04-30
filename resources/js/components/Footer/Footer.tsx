const appName = import.meta.env.VITE_APP_NAME;

const Footer: React.FC = () => {
    return (
        <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2025{' '}
                <a href="https://flowbite.com/" className="hover:underline">
                    {appName}™
                </a>
                . All Rights Reserved.
            </span>
            <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
                <li>
                    <a href="#" className="me-4 hover:underline md:me-6">
                        Tentang Kami
                    </a>
                </li>
                <li>
                    <a href="#" className="me-4 hover:underline md:me-6">
                        Layanan
                    </a>
                </li>
                <li>
                    <a href="#" className="me-4 hover:underline md:me-6">
                        Proyek
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
