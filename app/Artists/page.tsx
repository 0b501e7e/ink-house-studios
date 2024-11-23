import Image from 'next/image';
import { FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa';

export default function Artists() {
    const artists = [
        {
            name: 'Rachel',
            imageUrl: '/profiles/photos/rachel.jpg',
            instagram: 'https://www.instagram.com/raymoonshine_tattoos/',
            facebook: '#',
            twitter: '#',
        },
        {
            name: 'Trixy',
            imageUrl: '/profiles/photos/trixy.jpg',
            instagram: 'https://www.instagram.com/tattoobyt/',
            facebook: '#',
            twitter: '#',
        },
        {
            name: 'Megan',
            imageUrl: '/profiles/photos/megan.jpg',
            instagram: 'https://www.instagram.com/mf_ink_20/',
            facebook: '#',
            twitter: '#',
        },
        {
            name: 'Gavin',
            imageUrl: '/profiles/photos/gav.jpg',
            instagram: 'https://www.instagram.com/gavtraceytattoos/',
            facebook: '#',
            twitter: '#',
        },
        {
            name: 'Martina',
            imageUrl: '/profiles/photos/martina.jpg',
            instagram: 'https://www.instagram.com/martinav.art/',
            facebook: '#',
            twitter: '#',
        },
        {
            name: 'Victoria',
            imageUrl: '/profiles/photos/victoria.jpg',
            instagram: 'https://www.instagram.com/victoria.sol_tattoo/',
            facebook: '#',
            twitter: '#',
        },
        {
            name: 'Bill',
            imageUrl: '/profiles/photos/dude1.jpg',
            instagram: 'https://www.instagram.com/ink.billl/',
            facebook: '#',
            twitter: '#',
        },
        {
            name: 'Diego',
            imageUrl: '/profiles/photos/dude2.jpg',
            instagram: 'https://www.instagram.com/dmink.tattoo/',
            facebook: '#',
            twitter: '#',
        },
        {
            name: 'Phil',
            imageUrl: '/profiles/photos/dude3.jpg',
            instagram: 'https://www.instagram.com/dapzink/',
            facebook: '#',
            twitter: '#',
        }

    ];

    return (
        <div className="max-w-full p-8 text-white bg-black">
            <h2 className="text-3xl font-bold text-center mb-8">Our Artists</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {artists.map((artist, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Image src={artist.imageUrl} alt={artist.name} width={200} height={200} className="rounded-full" />
                        <h3 className="text-xl font-semibold mt-2">{artist.name}</h3>
                        <div className="flex space-x-2 mt-2">
                            <a href={artist.instagram}><FaInstagram /></a>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
