import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white p-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center text-center md:text-left space-y-4 md:space-y-0">
                {/* Logo */}
                <div>
                    <Image src="/inkhouse.jpg" alt="Ink House Studios Logo" width={50} height={50} />
                </div>

                {/* Address 1 */}
                <div>
                    <span>Fairview Studio</span>
                    <p>2 St Aidan&apos;s Park Rd, Marino, Dublin 3, D03 F5F2</p>
                </div>

                {/* Address 2 */}
                <div>
                    <span>Beaumont Studio</span>
                    <p>72D Shantalla Rd, Beaumont, Dublin 9, D09 N1F8</p>
                </div>

                {/* Social Buttons */}
                <div className="flex justify-center space-x-2">
                    <a href='https://facebook.com/inkhousestudios/'><FaFacebookF className="h-6 w-6" /></a>
                    <a href='https://www.instagram.com/ink_house_studios/'><FaInstagram className="h-6 w-6" /></a>
                    <a href='/Booking'><FaEnvelope className="h-6 w-6" /></a>
                </div>
            </div>
        </footer>


    );
};

export default Footer;
