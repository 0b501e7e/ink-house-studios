'use client';
import Gallery from "../components/Gallery";

const Portfolio = () => {
    // Array of image URLs for the gallery
    const images = [
        '/tattoos/gallery/one.jpg',
        '/tattoos/gallery/two.jpg',
        '/tattoos/gallery/three.jpg',
        '/tattoos/gallery/four.jpg',
        '/tattoos/gallery/five.jpg',
        '/tattoos/gallery/six.jpg',
    ];
  
    return (
      <div>
        <h2 className="text-4xl font-fancy font-bold text-center my-8">Our Work</h2>
        <Gallery images={images} />
      </div>
    );
  };
  
  export default Portfolio;
  