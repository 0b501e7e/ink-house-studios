import Image from "next/image"

export default function Hero() {
    return (
        <div className="relative w-full min-h-screen bg-black"> {/* Set a minimum height for mobile */}
            <div className="animate-fadeInFromBlack">
                {/* Next.js 13 Image component usage */}
                <Image
                    src="/setup.jpeg"
                    alt="Setup"
                    fill // This replaces the layout="fill"
                    style={{ objectFit: 'cover' }} // Apply object-fit via inline styles
                    priority // Ensures image is preloaded
                />
                <div className="font-fancy absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
                    <h1 className="text-white font-extrabold text-5xl sm:text-6xl mb-4 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]">
                        Ink House Studios
                    </h1>
                    <p className="text-white text-lg sm:text-xl mb-8 [text-shadow:_1px_1px_8px_rgb(0_0_0_/_80%)]">
                        Creating art that lasts a lifetime
                    </p>
                    {/* Add more content or buttons here */}
                </div>
            </div>
        </div>
    );
}
