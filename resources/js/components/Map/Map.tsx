const Map = () => {
    return (
        <section className="flex justify-center">
            <div className="w-5/6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6504.880259507886!2d106.82282449052775!3d-6.501026543157332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c131c52f277f%3A0xfc510888f1867be6!2sLanggeng%20Jaya%20Alumunium!5e0!3m2!1sid!2sid!4v1745745319743!5m2!1sid!2sid"
                    width="800"
                    height="600"
                    className="h-[400px] w-full"
                    allowFullScreen
                    title="map"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default Map;
