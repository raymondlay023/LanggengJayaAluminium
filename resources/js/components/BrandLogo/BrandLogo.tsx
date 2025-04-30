import Brand1 from '../../assets/brands/acer-logo.png';
import Brand3 from '../../assets/brands/apple-logo.png';
import Brand4 from '../../assets/brands/github-logo.png';
import Brand2 from '../../assets/brands/samsung-logo.png';

const BrandLogo = () => {
    return (
        <>
            <div className="dark:bg-gray-900 dark:text-white sm:place-items-center p-6">
                <div className="container py-12">
                    <h1 data-aos="fade-up" className="text-center font-semibold text-xl">Powering next-gen companies</h1>
                    <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center justify-evenly gap-3 py-6 md:px-32">
                        <img src={Brand1} className="w-32" alt="" />
                        <img src={Brand2} className="w-32" alt="" />
                        <img src={Brand3} className="w-32" alt="" />
                        <img src={Brand4} className="w-32" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandLogo;
