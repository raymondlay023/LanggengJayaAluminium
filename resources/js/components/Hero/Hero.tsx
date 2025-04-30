import Gallery from './Gallery';

type Props = {
    images: string[];
};

const Hero = ({ images }: Props) => {
    return (
        <>
            <main className="bg-background dark:text-primary p-8 duration-300 sm:place-items-center dark:bg-gray-950">
                <div className="container mt-10 flex min-h-[620px] sm:mt-0 md:max-w-7xl">
                    <div className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2">
                        {/* Text content section*/}
                        <div className="order-1 xl:pr-40">
                            <h1 data-aos="fade-up" className="text-4xl font-semibold sm:text-5xl">
                                Solusi Inovatif dari <span className="text-primary">Aluminium Berkualitas</span>
                            </h1>
                            <div data-aos="fade-up" data-aos-delay="300" className="mt-6">
                                Langgeng Jaya Aluminium adalah mitra terpercaya Anda dalam menghadirkan berbagai produk aluminium seperti kusen pintu,
                                rolling door, etalase, dan krey aluminium. Kami mengubah material kuat ini menjadi solusi fungsional dan estetis yang
                                menunjang kebutuhan rumah hingga bisnis Anda.
                            </div>

                            <div className="mt-12"></div>
                        </div>
                        {/* Image section*/}
                        <div data-aos="zoom-in" className="relative order-2 mt-8 sm:mt-0">
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                <Gallery images={images} />
                            </div>
                            <div
                                data-aos="slide-right"
                                data-aos-delay="200"
                                className="absolute -right-6 -bottom-5 rounded-xl bg-white px-4 py-2 shadow-md sm:-right-14 dark:bg-gray-900"
                            >
                                <p>⭐Proyek</p>
                                <h1 className="text-center font-bold">
                                    200+ <span className="font-normal">Selesai</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Hero;
