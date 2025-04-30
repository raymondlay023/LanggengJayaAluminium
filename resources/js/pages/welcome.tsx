import FloatingWhatsappButton from '@/components/FloatingWhatsappButton/FloatingWhatsappButton';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Map from '@/components/Map/Map';
import Navbar from '@/components/Navbar/Navbar';
import ProjectsComp from '@/components/ProjectsComp/ProjectsComp';
import Services from '@/components/Services/Services';
import Testimonials from '@/components/Testimonials/Testimonials';
import { Head } from '@inertiajs/react';

type Props = {
    images: string[];
};

export default function Welcome({ images }: Props) {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center sm:justify-center">
                {/* Header */}
                <header className="w-full not-has-[nav]:hidden md:max-w-7xl">
                    <Navbar />
                </header>
                {/* Body */}
                <div className="w-full justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <Hero images={images} />
                    <Services />
                    <Testimonials />
                    <ProjectsComp />
                    <Map />
                    <Footer />
                    <FloatingWhatsappButton />
                </div>
                {/* <div className="hidden h-14.5 lg:block">Made with 💖 by Raymond Lay</div> */}
            </div>
        </>
    );
}
