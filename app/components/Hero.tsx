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
                    <h1 className="text-white drop-shadow-2xl font-extrabold text-5xl sm:text-6xl mb-4">Ink House Studios</h1>
                    <p className="text-white drop-shadow-lg text-lg sm:text-xl mb-8">Creating art that lasts a lifetime</p>
                    {/* Add more content or buttons here */}
                </div>
            </div>
        </div>
    );
}
