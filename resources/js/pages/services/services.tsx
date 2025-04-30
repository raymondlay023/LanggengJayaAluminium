import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { Head } from '@inertiajs/react';
import { FaBriefcase, FaCouch, FaDoorOpen, FaExpandArrowsAlt, FaStore, FaToolbox, FaUtensils, FaWarehouse, FaWindowMaximize } from 'react-icons/fa';

const servicesData = [
    {
        name: 'Pembuatan Kusen Aluminium',
        icon: FaDoorOpen,
        link: '#',
        description: 'Kusen pintu dan jendela aluminium kuat, tahan lama, dan estetis.',
        aosDelay: '0',
    },
    {
        name: 'Rolling Door Aluminium',
        icon: FaWarehouse,
        link: '#',
        description: 'Rolling door berkualitas untuk toko, garasi, dan area komersial Anda.',
        aosDelay: '100',
    },
    {
        name: 'Display Case Aluminium',
        icon: FaCouch,
        link: '#',
        description: 'Etalase aluminium minimalis dan modern untuk kebutuhan bisnis Anda.',
        aosDelay: '200',
    },
    {
        name: 'Pembuatan Gerobak',
        icon: FaStore,
        link: '#',
        description: 'Gerobak aluminium custom yang kokoh dan menarik untuk usaha Anda.',
        aosDelay: '300',
    },
    {
        name: 'Kitchen Set',
        icon: FaUtensils,
        link: '#',
        description: 'Kitchen set aluminium modern, tahan lama, dan mudah dibersihkan.',
        aosDelay: '400',
    },
    {
        name: 'Menjual Bahan Kusen',
        icon: FaToolbox,
        link: '#',
        description: 'Tersedia berbagai bahan kusen aluminium berkualitas tinggi.',
        aosDelay: '500',
    },
    {
        name: 'Pintu / Jendela Aluminium',
        icon: FaWindowMaximize,
        link: '#',
        description: 'Solusi pintu dan jendela aluminium yang fungsional dan stylish.',
        aosDelay: '600',
    },
    {
        name: 'Pintu Expanda',
        icon: FaExpandArrowsAlt,
        link: '#',
        description: 'Pintu expanda yang aman dan tahan lama untuk berbagai kebutuhan.',
        aosDelay: '700',
    },
    {
        name: 'Pembuatan Lemari',
        icon: FaBriefcase,
        link: '#',
        description: 'Lemari aluminium elegan dan tahan lama untuk rumah atau kantor.',
        aosDelay: '800',
    },
];

export default function Services() {
    return (
        <div className="flex min-h-screen flex-col items-center">
            <Head title="Services" />
            <header className="w-full text-sm not-has-[nav]:hidden lg:max-w-7xl">
                <Navbar />
            </header>

            {/* Hero Section */}
            <section className="py-20 text-center" data-aos="fade-up">
                <div className="px-4">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">Layanan Kami</h1>
                    <p className="mx-auto max-w-2xl text-lg">
                        Menyediakan solusi aluminium terbaik untuk segala kebutuhan konstruksi dan desain Anda.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="w-full max-w-7xl px-4 py-16">
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                    {servicesData.map((service) => (
                        <div
                            key={service.name}
                            data-aos="fade-up"
                            data-aos-delay={service.aosDelay}
                            className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg dark:bg-gray-800"
                        >
                            <div className="text-primary mb-4 text-4xl">{service.icon && <service.icon />}</div>
                            <h3 className="text-xl font-semibold">{service.name}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <CTA />
            <Footer />
        </div>
    );
}
