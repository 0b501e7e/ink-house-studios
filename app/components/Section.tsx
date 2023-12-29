import Image from 'next/image';

// Define a type for the props that the Section component will accept
type SectionProps = {
    type: 'imageBackground' | 'imageWithText' | 'textOverlay';
    imageUrl: string;
    heading?: string;
    text?: string;
    overlayText?: string;
    alignment?: 'left' | 'right' | 'center';
};

const Section: React.FC<SectionProps> = ({
    type,
    imageUrl,
    heading,
    text,
    overlayText,
    alignment = 'left',
}) => {
    const backgroundStyle: React.CSSProperties = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const renderContent = () => {
        switch (type) {
            case 'imageBackground':
                return (
                    <div className="relative h-screen w-full text-white">
                        <div className="absolute inset-0 z-0" style={{ ...backgroundStyle, backgroundAttachment: 'fixed' }}></div>
                        <div className="absolute inset-0 z-10 flex items-center justify-center">
                            <div className="p-4 text-center">
                                {heading && <h2 className="text-4xl font-bold">{heading}</h2>}
                                {text && <p className="text-xl">{text}</p>}
                            </div>
                        </div>
                    </div>
                );


            // Inside your Section component
            case 'imageWithText':
                return (
                    <div className="section-image-with-text flex flex-row items-center justify-center space-x-6">
                        <div className="flex-1 w-full h-96 relative">
                            <Image
                                src={imageUrl}
                                alt={heading || 'Image'}
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-2xl font-bold" style={{ maxWidth: '50ch' }}>
                                {text}
                            </p>
                        </div>
                    </div>
                );

            case 'textOverlay':
                return (
                    <div style={backgroundStyle} className="section-text-overlay">
                        <div className="overlay-text">
                            <p>{overlayText}</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return <section className="custom-section w-full">{renderContent()}</section>;
};

export default Section;
