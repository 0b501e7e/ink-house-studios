import Image from 'next/image';
import { FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa';

export default function Artists() {
    const artists = [
        {
            name: 'Artist Name',
            imageUrl: '/profile.webp',
            instagram: '#',
            facebook: '#',
            twitter: '#',
        },
        {
            name: 'Artist Name',
            imageUrl: '/profile.webp',
            instagram: '#',
            facebook: '#',
            twitter: '#',
        },
        {
            name: 'Artist Name',
            imageUrl: '/profile.webp',
            instagram: '#',
            facebook: '#',
            twitter: '#',
        },
        {
            name: 'Artist Name',
            imageUrl: '/profile.webp',
            instagram: '#',
            facebook: '#',
            twitter: '#',
        },
        {
            name: 'Artist Name',
            imageUrl: '/profile.webp',
            instagram: '#',
            facebook: '#',
            twitter: '#',
        },
        {
            name: 'Artist Name',
            imageUrl: '/profile.webp',
            instagram: '#',
            facebook: '#',
            twitter: '#',
        },


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
                            <a href={artist.facebook}><FaFacebookSquare /></a>
                            <a href={artist.twitter}><FaTwitter /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
