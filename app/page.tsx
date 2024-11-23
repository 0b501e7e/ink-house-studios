'use client';
import { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import Gallery from './components/Gallery';

export default function Home() {
    const headingRef = useRef(null);
    const textRef = useRef(null);
    // Additional refs for new sections and images
    const imageRef = useRef(null);
    const additionalTextRef = useRef(null);
    const imageAnimationRef = useRef(null);
    const textAnimationRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeInUp');
                        entry.target.classList.remove('opacity-0');
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Add new refs for separate animation
        [headingRef, textRef, imageAnimationRef, textAnimationRef, additionalTextRef].forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, []);


    return (
        <div>
            <Hero />
            <div id="About" className="font-roboto text-lg font-bold bg-black max-w-full text-white space-y-12">
                <div className="max-w-full py-16 px-8 text-black bg-white">
                    <div className="max-w-4xl mx-auto p-8 rounded-lg border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
                        {/* Heading and Introduction */}
                        <h2 ref={headingRef} 
                            className="text-5xl font-fancy font-extrabold mb-8 text-center opacity-0 tracking-wide">
                            Welcome to Ink House Studios
                        </h2>
                        
                        {/* Decorative separator */}
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-8"></div>
                        
                        <p ref={textRef} 
                            className="text-lg leading-relaxed text-center text-gray-800 max-w-3xl mx-auto opacity-0">
                            Start your journey or fulfil your ambition at our studios, 
                            no matter what style, size or concept you have in mind.
                            Our elite artists respect your skin and will work with you 
                            to create a unique piece that you will be proud of, forever.
                        </p>
                    </div>
                </div>
                <div>
                    <Gallery images={[
                        '/tattoos/gallery/one.jpg',
                        '/tattoos/gallery/two.jpg',
                        '/tattoos/gallery/three.jpg',
                        '/tattoos/gallery/four.jpg',
                        '/tattoos/gallery/five.jpg',
                        '/tattoos/gallery/six.jpg',
                    ]} />
                </div>


                {/* Additional Description */}
                <div ref={additionalTextRef} className="max-w-full py-16 px-8 text-black bg-white">
                    <div className="max-w-4xl mx-auto p-8 rounded-lg border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
                        <h2 className='text-5xl font-fancy font-bold mb-8 text-center tracking-wide'>
                            Fine Line Tattoo Studio
                        </h2>
                        
                        {/* Optional decorative element between title and text */}
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-8"></div>
                        
                        <p className="text-lg leading-relaxed text-center text-gray-800 max-w-3xl mx-auto">
                            Ink House Tattoo Studio is the leading fine line tattoo specialists in Dublin.
                            Our artists are very skilled in this form of tattoo body art and will be able to work on any fine
                            line tattoo design you may be interested in. We have built a following on this fine line
                            tattoo work and continue to impress clients with the high quality of our work.
                            Have a look at our portfolio for some of the fine line tattoos we have given our clients recently.
                        </p>
                    </div>
                </div>
                <div className='max-w-full'>
                    <Section
                        type='imageBackground'
                        imageUrl='/tattoos/tattoobackground.jpg'
                        text='Ink House Studios is a professional tattoo studio
                     in Dublin with well experienced tattoo artists. 
                     Being entrusted to take you on your tattoo journey is 
                     something which we value greatly, and anyone is welcomed and 
                     encouraged to book a free consultation with us to learn more 
                     about the services we offer. '
                        alignment='center'
                    />
                </div>
            </div>
        </div>
    );
}
