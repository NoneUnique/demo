"use client";
import { useState } from 'react';

const cards = [
  { 
    id: '1517021897933-0e0319cfbc28',
    title: 'Mountain View', 
    copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', 
    button: 'View Trips' 
  },
  { 
    id: '1533903345306-15d1c30952de',
    title: 'To The Beach', 
    copy: 'Plan your next beach trip with these fabulous destinations', 
    button: 'View Trips' 
  },
];

export default function Card1() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen grid place-items-center p-4 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div 
            key={card.id}
            className="relative flex items-end overflow-hidden rounded-lg shadow-xl group"
            style={{ 
              height: '350px',
              backgroundImage: `url(https://images.unsplash.com/photo-${card.id}?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 
              transition-transform duration-700 ease-power4 ${
                hoveredCard === card.id ? 'translate-y-[-50%]' : 'translate-y-[150%]'
              }`}
            />
            
            {/* Content */}
            <div className={`relative z-10 p-6 text-center text-white transition-all duration-700 ease-power4 ${
              hoveredCard === card.id ? 'translate-y-0' : 'translate-y-[calc(100%-5.5rem)]'
            }`}>
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="font-cardo italic opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {card.copy}
              </p>
              <button className="mt-4 px-6 py-2 text-xs font-bold tracking-wide uppercase bg-black hover:bg-gray-800 rounded-full transition-colors duration-300">
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}