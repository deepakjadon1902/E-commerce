// import Hero from '../Components/Hero/Hero';
// import Popular from '../Components/Popular/Popular';
// import Offers from '../Components/Offers/Offers';
// import NewCollections from '../Components/NewCollections/NewCollections';
// import NewsLetter from '../Components/NewaLetter/NewsLetter';

// const Shop = () => {
//   return (
//     <>
//       <Hero />
//       <Popular />
//       <Offers />
//       <NewCollections />
//       <NewsLetter />
//     </>
//   );
// };

// export default Shop;
import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewaLetter/NewsLetter';

// You'll want to add these Tailwind CSS classes and potentially modify 
// the internal components to match these styles
const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Wrapper with max-width and centered content */}
      <div className="max-w-screen-xl mx-auto">
        {/* Add subtle transitions and hover effects to each component */}
        <div className="transition-all duration-300 hover:shadow-sm">
          <Hero />
        </div>
        
        <div className="py-8 transition-all duration-300 hover:bg-gray-100">
          <Popular />
        </div>
        
        <div className="transition-all duration-300 hover:shadow-md">
          <Offers />
        </div>
        
        <div className="py-8 transition-all duration-300 hover:bg-gray-100">
          <NewCollections />
        </div>
        
        <div className="transition-all duration-300 hover:shadow-sm">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Shop;

