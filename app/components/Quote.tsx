// components/Quote.tsx
import React from 'react';

interface QuoteProps {
  text: string;
}

const Quote: React.FC<QuoteProps> = ({ text }) => {
  // Split the text into words and then into characters to preserve whitespace
  const characters = text.split(/(\s+)/).map((fragment, index) => ({
    char: fragment,
    delay: index // Delay based on the position in the text
  }));

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-center text-4xl font-fancy md:text-6xl lg:text-8xl">
        {characters.map((item, index) => (
          <span 
            key={index} 
            className="inline-block opacity-0 animate-fadeIn" 
            style={{ 
              // Use a non-zero delay for spaces to maintain sequence
              animationDelay: `${item.delay * 0.05}s`,
              // Preserve whitespace for spaces
              whiteSpace: 'pre',
            }}>
            {item.char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Quote;
