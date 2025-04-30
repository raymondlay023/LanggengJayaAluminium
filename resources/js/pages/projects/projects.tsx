import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { Head } from '@inertiajs/react';

const projectsData = [
    {
        title: 'Pembuatan Kandang Kucing Aluminium',
        image: '/storage/projects/kandang-kucing.jpg',
        description: 'Kandang kucing custom berbahan aluminium yang kuat dan mudah dibersihkan.',
    },
    {
        title: 'Kusen Aluminium dengan Kaca',
        image: '/storage/projects/kusen-alumunium-kaca.jpg',
        description: 'Pemasangan kusen aluminium dengan panel kaca untuk pencahayaan maksimal.',
    },
    {
        title: 'Partisi Ruangan Aluminium',
        image: '/storage/projects/kusen-alumunium-partisi.jpg',
        description: 'Partisi aluminium elegan dan fungsional untuk ruang kantor dan rumah.',
    },
    {
        title: 'Kusen Jendela Kaca',
        image: '/storage/projects/kusen-jendela-kaca.jpg',
        description: 'Jendela kaca modern dengan rangka aluminium anti karat.',
    },
    {
        title: 'Pintu dan Jendela Aluminium',
        image: '/storage/projects/pintu-alumunium-dan-jendela.jpg',
        description: 'Solusi pintu dan jendela aluminium tahan lama untuk hunian Anda.',
    },
    {
        title: 'Pintu Geser Aluminium',
        image: '/storage/projects/pintu-geser.jpg',
        description: 'Pintu geser berbahan aluminium, cocok untuk ruang terbatas.',
    },
    {
        title: 'Bahan Kusen Alumunium',
        image: '/storage/projects/bahan-kusen-alumunium.jpg',
        description: 'Menyediakan berbagai jenis bahan kusen aluminium berkualitas tinggi untuk kebutuhan konstruksi dan renovasi.',
    },
];

export default function Projects() {
    return (
        <div className="flex min-h-screen flex-col items-center">
            <Head title="Projects" />
            <header className="w-full text-sm not-has-[nav]:hidden lg:max-w-7xl">
                <Navbar />
            </header>

            {/* Hero Section */}
            <section className="py-20 text-center" data-aos="fade-up">
                <div className="px-4">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">Proyek Kami</h1>
                    <p className="mx-auto max-w-2xl text-lg">Beberapa hasil karya terbaik kami dalam bidang aluminium untuk berbagai sektor.</p>
                </div>
            </section>

            {/* Projects List */}
            <section className="w-full max-w-7xl px-4 py-16">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {projectsData.map((project) => (
                        <div
                            key={project.title}
                            data-aos="fade-up"
                            className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg dark:bg-gray-800"
                        >
                            <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <CTA />
            <Footer />
        </div>
    );
}
