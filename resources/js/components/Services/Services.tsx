import React from 'react';
import { FaDoorOpen } from 'react-icons/fa';
import { GiGate, GiRollingDices, GiShop } from 'react-icons/gi';

interface Service {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    link: string;
    description: string;
    aosDelay: string;
}

const serviceData: Service[] = [
    {
        name: 'Aluminium Door & Window Frames',
        icon: FaDoorOpen,
        link: '#',
        description:
            'Pembuatan dan pemasangan kusen pintu serta jendela berbahan aluminium yang kuat, tahan lama, dan estetis untuk rumah dan bangunan komersial.',
        aosDelay: '0',
    },
    {
        name: 'Rolling Door Aluminium',
        icon: GiRollingDices,
        link: '#',
        description:
            'Solusi rolling door aluminium yang kokoh dan praktis untuk toko, gudang, atau garasi Anda. Dirancang untuk keamanan dan kemudahan penggunaan.',
        aosDelay: '300',
    },
    {
        name: 'Display Case / Etalase',
        icon: GiShop,
        link: '#',
        description: 'Pembuatan etalase aluminium yang elegan dan fungsional untuk keperluan bisnis seperti toko, showroom, atau pameran produk.',
        aosDelay: '500',
    },
    {
        name: 'Folding Gate',
        icon: GiGate,
        link: '#',
        description:
            'Folding gate aluminium kokoh dan praktis, memberikan perlindungan ekstra dengan desain yang efisien untuk rumah, toko, dan bangunan komersial.',
        aosDelay: '700',
    },
];

const Services = () => {
    return (
        <>
            <div className="bg-gray-100 p-6 py-12 sm:grid sm:place-items-center dark:bg-black dark:text-white">
                <div className="container">
                    {/* Header Section */}
                    <div className="space-y-3 pb-12 text-center">
                        <h1 data-aos="fade-up" className="text-4xl font-semibold">
                            Layanan Terbaik Kami
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="300">
                            Kami menghadirkan berbagai solusi berbahan aluminium berkualitas tinggi—dari kusen pintu, rolling door, hingga etalase dan
                            krey aluminium—semua dibuat dengan presisi dan keandalan.
                        </p>
                    </div>

                    {/* Card Section */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {serviceData.map(({ name, icon, description, aosDelay }) => {
                            const Icon = icon;

                            return (
                                <div key={name} data-aos="fade-up" data-aos-delay={aosDelay} className="card space-y-3 p-4 sm:space-y-4">
                                    <div>
                                        <Icon className="text-primary text-4xl" />
                                    </div>
                                    <h1 className="text-lg font-semibold">{name}</h1>
                                    <p className="text-gray-600 dark:text-gray-400">{description}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Button Section */}
                    <div data-aos="fade-up" data-aos-delay="900" data-aos-offset="0" className="mt-4 text-center sm:mt-8">
                        <a href="/services" className="btn-primary text-primary-foreground">
                            View All Services
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
