type Props = {
    images: string[];
};

const Gallery = ({ images }: Props) => {
    // Break images into groups of 3 to simulate the 4-column layout with 3 images per column
    const chunked = Array.from({ length: 4 }, (_, i) => images.filter((_, index) => index % 4 === i));

    return (
        <>
            {chunked.map((group, idx) => (
                <div className="grid gap-4" key={idx}>
                    {group.map((src, index) => (
                        <div key={index}>
                            <img className="h-auto max-w-full rounded-lg" src={src} alt={`Hero ${index}`} />
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default Gallery;
