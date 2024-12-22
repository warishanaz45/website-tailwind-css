import React from 'react';

const Watches = () => {
  const watchData = [
    { id: 1, name: 'MAVADO', price: 12000, description: 'Luxury watch', image: '/Mavado.webp' },
    { id: 2, name: 'FOSSIL', price: 7000, description: 'Sporty design', image: '/fossil2.webp' },
    { id: 3, name: 'MICHELE', price: 9000, description: 'Elegant timepiece', image: '/mavoda2.webp' },
    { id: 4, name: 'CITIZEN', price: 25000, description: 'Luxurious Touch', image: 'Citizen.webp' },
    { id: 5, name: 'TED BAKER', price: 7000, description: 'Bold and rugged', image: '/Ted Baker.webp' },
    { id: 6, name: 'NIXON', price: 1000, description: 'Affordable and reliable', image: '/Nixon.webp' },
  ];

  return (
    <div className="watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
      {watchData.map(watch => (
        <div key={watch.id} className="watch-card bg-white p-5 rounded-md shadow-md text-center">
          <img src={watch.image} alt={watch.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" />
          <h3 className="mt-4 text-2xl font-bold">{watch.name}</h3>
          <p className="text-gray-500">{watch.description}</p>
          <div className="price text-blue-500 text-xl font-semibold mt-2">${watch.price}</div>
          <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Watches;