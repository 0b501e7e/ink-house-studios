export default function Contact() {
    const studios = [
      {
        name: "Fairview",
        address: "Fairview address here",
        mapEmbedUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Fairview+Address",
      },
      {
        name: "Beaumont",
        address: "Beaumont address here",
        mapEmbedUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Beaumont+Address",
      },
      // ... other studios
    ];
  
    return (
      <div className="max-w-full p-8 text-white bg-black">
        <h2 className="text-3xl font-bold text-center mb-8">Our Studios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {studios.map((studio, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-xl font-semibold">{studio.name}</h3>
              <iframe
                className="w-full h-64"
                src={studio.mapEmbedUrl}
                allowFullScreen
                loading="lazy"
              ></iframe>
              <a href={`https://maps.google.com/?q=${studio.address}`} target="_blank" rel="noopener noreferrer" className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Drive Now
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  