'use client'
import { 
  FaLaptop, 
  FaMobileAlt, 
  FaCamera, 
  FaHeadphones, 
  FaGamepad, 
  FaTv, 
} from "react-icons/fa";
import Link from 'next/link';
import { BiSolidSpeaker } from "react-icons/bi";

const CategorySlider = () => {
    const categories = [
    { id: 1, name: "Laptops", icon: <FaLaptop />, color: "bg-blue-50 text-blue-600" },
    { id: 2, name: "Phones", icon: <FaMobileAlt />, color: "bg-green-50 text-green-600" },
    { id: 3, name: "Cameras", icon: <FaCamera />, color: "bg-red-50 text-red-600" },
    { id: 4, name: "Audio", icon: <FaHeadphones />, color: "bg-purple-50 text-purple-600" },
    { id: 5, name: "Gaming", icon: <FaGamepad />, color: "bg-orange-50 text-orange-600" },
    { id: 6, name: "TV & Video", icon: <FaTv />, color: "bg-cyan-50 text-cyan-600" },
    { id: 8, name: "Speakers", icon: <BiSolidSpeaker />, color: "bg-indigo-50 text-indigo-600" },
  ];
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-black text-gray-800 tracking-tighter uppercase">
            Browse by <span className="text-blue-600">Category</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">Find the best tech gadgets in every category</p>
        </div>
      </div>
      <div className="flex justify-center gap-6 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
        {categories.map((cat) => (
          <Link 
            key={cat.id} 
            href={`/products?category=${cat.name}`}
            className="flex flex-col items-center group shrink-0"
          >
            <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl transition-all duration-300 border-2 border-transparent group-hover:border-blue-600 group-hover:shadow-xl group-hover:shadow-blue-100 ${cat.color}`}>
              <div className="group-hover:scale-125 transition-transform duration-300">
                {cat.icon}
              </div>
            </div>
            <span className="mt-4 font-bold text-gray-700 text-sm group-hover:text-blue-600 transition-colors">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
    );
};

export default CategorySlider;