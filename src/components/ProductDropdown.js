// components/ProductDropdown.js
import React from 'react';
import Link from 'next/link';

// Dummy data for products - update this with your actual products
const products = [
 
  { id: 1, title: 'Smart Attendance System', description: 'Intuitive, secure, and efficient attendance management.', href: '/smart-attendance-system' },
   { id: 2, title: 'Line Follower Robot', description: 'An autonomous robotic vehicle designed to detect and follow line marked on floor.', href: '/Line-follower-robot' },
   { id: 3, title: 'Multipurpose PCB', description: 'Designed to enhance the functionality of Arduino-based electronics projects.', href: '/PCB' }, 
];

const ProductDropdown = ({ isOpen, closeMenu }) => {
  if (!isOpen) return null;

  return (
    // Positioning the dropdown relative to the container in the navbar
   <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] origin-top rounded-xl bg-[rgb(43,127,255)] p-6 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-300 ease-out z-50">

      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {products.map((product) => (
          <Link 
            key={product.id} 
            href={product.href} 
            onClick={closeMenu} // Close the dropdown/menu on click
            className="group p-2 hover:bg-blue-900 rounded-lg transition-colors duration-200 block"
          >
            <h3 className="text-lg font-semibold text-white mb-1">
              {product.title}
            </h3>
            <p className="text-white text-sm">
              {product.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDropdown;