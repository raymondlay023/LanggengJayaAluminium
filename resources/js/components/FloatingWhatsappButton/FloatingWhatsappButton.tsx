import { FaWhatsapp } from 'react-icons/fa';
const FloatingWhatsappButton = () => {
    return (
        <div className="fixed right-6 bottom-6 z-20">
            <span className="text-background-primary">
                <a
                    href="https://wa.me/+6281281654939"
                    target="_blank"
                    title="whatsapp link"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-green-600"
                >
                    <FaWhatsapp className="text-4xl" />
                    <span className="text-lg">Tanya Sekarang</span>
                </a>
            </span>
        </div>
    );
};

export default FloatingWhatsappButton;
