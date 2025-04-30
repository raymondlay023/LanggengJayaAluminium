import Slider from 'react-slick';

interface Testimonial {
    id: number;
    name: string;
    text: string;
    img: string;
}

const testimonialData: Testimonial[] = [
    {
        id: 1,
        name: 'Ratimah Elsa Ardy',
        text: 'Pelayanan nya ramah, kualitas sangat bagus dan anti rayap👍👍 …',
        img: 'https://lh3.googleusercontent.com/a/ACg8ocKdMi_GEMQe13VR343zsc_0yHXvrlH2goSK2HuwWO-IGJ2g9g=w40-h40-p-rp-mo-br100',
    },
    {
        id: 2,
        name: 'Perkasa Aluminium',
        text: 'Toko nya amanah.recomeded untuk pemesanan',
        img: 'https://lh3.googleusercontent.com/a/ACg8ocI0oVSivz8tUPhI81rKZzGTHL8XhHwYShouygmN4fIn4pXuYA=w40-h40-p-rp-mo-br100',
    },
    {
        id: 3,
        name: 'tarno aluminium',
        text: 'Kusen aluminium dan jendela aluminium anti rayap dan kuat',
        img: 'https://lh3.googleusercontent.com/a-/ALV-UjW3f7S_-alLCV4iMXhP6zwfRU-_HmWS0nrBGiN9odBPaO9zQXmtzA=w40-h40-p-rp-mo-ba2-br100',
    },
    {
        id: 4,
        name: 'Kasworo Bowo',
        text: 'Pelayanan yg profesional',
        img: 'https://lh3.googleusercontent.com/a-/ALV-UjUhjhQlcmX0JQnKGzxdr3YEawE5gBUtqgBJRffTNuclS-5f35aY=w79-h79-p-rp-mo-ba4-br100',
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className="p-6 sm:place-items-center dark:text-white">
            <div className="space-y-3 pb-6 text-center">
                <h1 data-aos="fade-up" className="text-secondary-foreground/50 dark:text-foreground text-4xl font-extralight">
                    Apa Kata Pelanggan Kami
                </h1>
                <p data-aos="fade-up" data-aos-delay="300">
                    Lihat pengalaman nyata dari mereka yang telah menggunakan layanan kami.
                </p>
            </div>

            <div data-aos="fade-up" className="container">
                <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6">
                    <Slider {...settings}>
                        {testimonialData.map(({ id, name, text, img }) => (
                            <div key={id} className="my-6">
                                <div className="relative mx-4 flex flex-col gap-5 rounded-xl p-5 sm:flex-row md:gap-14 dark:bg-gray-800">
                                    <div className="flex flex-col place-items-center">
                                        <img src={img} alt={`Photo of ${name}`} className="h-20 w-20 rounded-full" />
                                        <h1 className="text-md mt-2 text-center font-bold">{name}</h1>
                                        <div className="mt-1 flex items-center">
                                            <svg
                                                className="ms-1 h-4 w-4 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg
                                                className="ms-1 h-4 w-4 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg
                                                className="ms-1 h-4 w-4 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg
                                                className="ms-1 h-4 w-4 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg
                                                className="ms-1 h-4 w-4 text-yellow-300 dark:text-yellow-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-black/80 sm:pt-10 xl:pr-40 dark:text-white/80">{text}</p>
                                    <p className="absolute right-0 -bottom-10 font-serif text-[12rem] text-black/10">,,</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
