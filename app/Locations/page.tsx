
export default function Contact() {
  const GOOGLE_MAPS = process.env.GOOGLE_MAPS_API_KEY;


  const studios = [
    {
      name: "Fairview",
      address: "2 St Aidan's Park Rd, Marino, Dublin 3, D03 F5F2",
      mapEmbedUrl: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ389zj2QPZ0gR879dtURDhR8&key=${GOOGLE_MAPS}`,
      mapLinkUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJ389zj2QPZ0gR879dtURDhR8',

    },
    {
      name: "Beaumont",
      address: "72D Shantalla Rd, Beaumont, Dublin 9, D09 N1F8",
      mapEmbedUrl: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJF09s_dgPZ0gRkQOiFUEaX8w&key=${GOOGLE_MAPS}`,
      mapLinkUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJF09s_dgPZ0gRkQOiFUEaX8w',

    },
    // ... other studios
  ];
  console.log(studios.forEach((studio) => console.log(studio.mapEmbedUrl)));

  return (
    <div className="max-w-full min-h-screen p-8 text-white bg-black">
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
            <a href={studio.mapLinkUrl} target="_blank" className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Drive Now
            </a>
          </div>
        ))}
      </div>
    </div>
    
  );
}
