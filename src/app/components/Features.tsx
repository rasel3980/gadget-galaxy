import { FaShippingFast, FaShieldAlt, FaUndo, FaHeadset } from "react-icons/fa";
const Features = () => {
    const data = [
    {
      id: 1,
      icon: <FaShippingFast className="text-3xl text-blue-600" />,
      title: "Free Shipping",
      desc: "On all orders over $100",
    },
    {
      id: 2,
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "Secure Payment",
      desc: "100% secure payment processing",
    },
    {
      id: 3,
      icon: <FaUndo className="text-3xl text-blue-600" />,
      title: "Easy Return",
      desc: "30-day money back guarantee",
    },
    {
      id: 4,
      icon: <FaHeadset className="text-3xl text-blue-600" />,
      title: "24/7 Support",
      desc: "Instant support for any query",
    },
  ];
    return (
        <div className="bg-white rounded py-12 mt-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div 
            key={item.id} 
            className="flex items-center gap-5 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="p-4 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div>
              <h3 className="font-black text-gray-800 uppercase tracking-tighter text-sm">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Features;