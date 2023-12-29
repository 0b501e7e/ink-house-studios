import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

type GalleryProps = {
    images: string[];
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const galleryRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-slideInRight', 'animate-fadeInUp');
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const images = galleryRef.current?.querySelectorAll<HTMLDivElement>('.gallery-image');

        images?.forEach((img, index) => {
            observer.observe(img);
            img.style.animationDelay = `${index * 0.3}s`; // Stagger the animation
        });

        return () => images?.forEach((img) => observer.unobserve(img));
    }, []);

    return (
        <div ref={galleryRef} className="flex flex-wrap justify-center md:justify-start overflow-x-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="gallery-image transform transition-all duration-1000 ease-out opacity-0 -translate-x-50 m-2"
                    style={{ width: 'calc(33.333% - 1rem)' }} // Three images per row with margin
                >
                    <div className="w-full pb-[66.66%] relative"> {/* Aspect ratio of 3:2 */}
                        <Image
                            src={image}
                            alt={`Gallery image ${index}`}
                            layout='fill'
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>
                </div>
            ))}
        </div>




    );
};

export default Gallery;
