import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <div className="flex min-h-screen flex-col items-center sm:justify-center">
            <Head title="About" />
            <header className="w-full text-sm not-has-[nav]:hidden lg:max-w-7xl">
                <Navbar />
            </header>

            {/* Hero Section */}
            <section className="py-20 text-center" data-aos="fade-up">
                <div className="px-4">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">Tentang Kami</h1>
                    <p className="mx-auto max-w-2xl text-lg">
                        Langgeng Jaya Aluminium sudah berdiri sejak 24 Agustus 2010 untuk membantu Anda mewujudkan berbagai kebutuhan aluminium, mulai
                        dari pintu, jendela, hingga etalase dan lainnya.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="flex w-full justify-center bg-gray-100 py-16 dark:bg-gray-800" data-aos="fade-left">
                <div className="grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-3xl font-semibold">Visi dan Misi Kami</h2>
                        <p className="text-lg">
                            <span className="font-bold">Visi kami</span> adalah menjadi mitra terpercaya dalam industri aluminium dengan menghadirkan
                            produk dan layanan berkualitas tinggi.
                        </p>
                        <p className="text-lg">
                            <span className="font-bold">Misi kami</span> adalah terus berinovasi dalam pembuatan kusen, rolling door, display case,
                            krey aluminium, serta berbagai produk lainnya untuk memenuhi kebutuhan dan ekspektasi pelanggan yang terus berkembang.
                        </p>
                    </div>
                    <div data-aos="fade-up">
                        <img
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Our Vision and Mission"
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>
            {/* Why choosing us section */}
            <section className="bg-white py-16 dark:bg-gray-900" data-aos="fade-up">
                <div className="px-4 text-center">
                    <h2 className="text-primary mb-10 text-3xl font-semibold">Mengapa Memilih Langgeng Jaya Aluminium?</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div data-aos="flip-left">
                            <h3 className="text-primary text-xl font-semibold">Bahan Berkualitas</h3>
                            <p className="dark:text-primary/70 text-gray-600">
                                Kami hanya menggunakan aluminium premium yang tahan lama dan ramah lingkungan.
                            </p>
                        </div>
                        <div data-aos="flip-left" data-aos-delay="200">
                            <h3 className="text-primary text-xl font-semibold">Tim Profesional</h3>
                            <p className="dark:text-primary/70 text-gray-600">
                                Dikerjakan oleh tenaga ahli dengan pengalaman 15+ tahun di bidangnya.
                            </p>
                        </div>
                        <div data-aos="flip-left" data-aos-delay="400">
                            <h3 className="text-primary text-xl font-semibold">Desain Menyesuaikan</h3>
                            <p className="dark:text-primary/70 text-gray-600">
                                Kami menawarkan desain yang bisa disesuaikan dengan kebutuhan dan selera Anda.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section (optional) */}
            {/* <section className="py-16">
                    <div className="px-4 text-center">
                        <h2 className="mb-8 text-3xl font-semibold">Tim Profesional Kami</h2>
                        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                            <div className="rounded-xl bg-white p-6 text-center shadow dark:bg-gray-700">
                                <img
                                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Team Member"
                                    className="mx-auto mb-4 h-24 w-24 rounded-full"
                                />
                                <h3 className="text-xl font-semibold">Andi Wijaya</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Direktur Utama</p>
                            </div>
                            <div className="rounded-xl bg-white p-6 text-center shadow dark:bg-gray-700">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Team Member"
                                    className="mx-auto mb-4 h-24 w-24 rounded-full"
                                />
                                <h3 className="text-xl font-semibold">Siti Nurhaliza</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Manajer Operasional</p>
                            </div>
                            <div className="rounded-xl bg-white p-6 text-center shadow dark:bg-gray-700">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Team Member"
                                    className="mx-auto mb-4 h-24 w-24 rounded-full"
                                />
                                <h3 className="text-xl font-semibold">Rudi Hartono</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Kepala Produksi</p>
                            </div>
                        </div>
                    </div>
                </section> */}

            {/* Call to Action */}
            <CTA />

            <Footer />
        </div>
    );
}
