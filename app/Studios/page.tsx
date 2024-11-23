'use client';
import React, { useEffect, useRef } from 'react';
import Section from "../components/Section";
import Quote from "../components/Quote";
import Image from 'next/image';

export default function Studios() {
    const quoteText = "Ink your life with the art of passion.";
    const leftImageRef = useRef(null);
    const rightImageRef = useRef(null);
    const thirdImageRef = useRef(null);  // New reference
    const fourthImageRef = useRef(null); // New reference
    const fifthImageRef = useRef(null);  // New reference

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-x-[-100%]', 'translate-x-[100%]');
                        const targetElement = entry.target as HTMLElement;
                        targetElement.classList.add(targetElement.dataset.direction === 'left' ? 'animate-slideInLeft' : 'animate-slideInRight');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        [leftImageRef, rightImageRef, thirdImageRef, fourthImageRef, fifthImageRef].forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="max-w-full text-white bg-black overflow-hidden">
            <Quote text={quoteText} />

            <Section
                type="imageBackground"
                imageUrl="/tattoos/tattoobackground.jpg"
                text="Start your journey or fulfill your ambition at our studios, no matter what style, size or concept you have in mind. Our elite artists respect your skin and will work with you to create a unique piece that you will be proud of, forever."
            />

            <div className="flex flex-wrap justify-between items-center p-4">
                <div ref={leftImageRef} className="w-1/3 opacity-0" data-direction="left">
                    <Image src='/studio3.jpeg' alt='Left Studio' layout='responsive' width={500} height={333} />
                </div>

                <div className="w-1/3 p-4 text-center">
                    <p>Our studios are designed to spark creativity and ensure comfort. Open, airy spaces filled with natural light set the stage for art to come alive. Each corner of our studio tells a story of tradition, innovation, and passion for the ink that binds us.</p>
                </div>

                <div ref={rightImageRef} className="w-1/3 opacity-0" data-direction="right">
                    <Image src='/studio4.jpg' alt='Right Studio' layout='responsive' width={500} height={333} />
                </div>
            </div>

            {/* Additional image sections */}
            <div className="flex flex-wrap justify-between items-center p-4">
                <div ref={thirdImageRef} className="w-1/3 opacity-0" data-direction="left">
                    <Image src='/studio5.jpeg' alt='Third Studio' layout='responsive' width={500} height={333} />
                </div>
                <div ref={fourthImageRef} className="w-1/3 opacity-0" data-direction="right">
                    <Image src='/studio6.jpeg' alt='Fourth Studio' layout='responsive' width={500} height={333} />
                </div>
            </div>

            <div className="flex flex-wrap justify-between items-center p-4">
                <div ref={fifthImageRef} className="w-1/3 opacity-0" data-direction="left">
                    <Image src='/studio7.jpeg' alt='Fifth Studio' layout='responsive' width={500} height={333} />
                </div>
            </div>
        </div>
    );
}
