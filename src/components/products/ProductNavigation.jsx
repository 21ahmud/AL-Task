import React from 'react';

const ProductNavigation = ({ products, activeProduct, onNavClick }) => {
  return (
    <section className="sticky top-16 z-40 bg-white shadow-md py-4">
      <div className="container-custom">
        <div className="flex overflow-x-auto hide-scrollbar space-x-6">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => onNavClick(product.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300 ${
                activeProduct === product.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {product.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductNavigation;