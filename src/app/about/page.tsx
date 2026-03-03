import Image from "next/image";
import { FiTarget, FiTruck, FiShield, FiHeart } from "react-icons/fi";

const About = () => {
  return (
    <div className="bg-white py-16 md:py-24 px-5 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">Since 2025</span>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mt-4 tracking-tighter uppercase italic">
          About <span className="text-blue-600">Gadget Galaxy</span>
        </h1>
        <p className="mt-6 text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
          We are more than just a store. Gadget Galaxy is your trusted destination for the next generation of 
          smart devices and premium tech accessories.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-600 rounded-tr-[4rem] rounded-bl-[4rem] opacity-10 group-hover:rotate-3 transition-transform duration-500"></div>
          
          <Image
            width={600}
            height={800}
            src="https://t3.ftcdn.net/jpg/01/70/80/52/360_F_170805293_mP8dwQvg7ip4tFRyXNs7xhIs470dBArn.jpg"
            alt="Gadget Galaxy Office"
            className="relative rounded-tr-[3rem] rounded-bl-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[400px] md:h-[500px]"
          />
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
               <FiTarget className="text-blue-600 text-3xl" />
               <h2 className="text-3xl font-black text-gray-900 uppercase italic tracking-tighter">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              We provide top-quality gadgets at the best prices with fast delivery and exceptional customer support. 
              Our mission is to make your digital lifestyle smarter, easier, and more connected.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Latest Tech Trends",
              "Affordable Pricing",
              "Secure Checkout",
              "24/7 Support"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-tr-xl rounded-bl-xl border-l-4 border-blue-600">
                <span className="text-blue-600 font-bold">✔</span>
                <span className="text-sm font-black text-gray-700 uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-32">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-black text-gray-900 uppercase italic tracking-tighter">
            Why Choose Us?
          </h2>
          <div className="w-24 h-2 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<FiShield size={32} />}
            title="Top Quality" 
            desc="All gadgets are hand-picked & tested for best performance." 
          />
          <FeatureCard 
            icon={<FiTruck size={32} />}
            title="Fast Delivery" 
            desc="Get your favorite gadgets delivered right to your doorstep." 
          />
          <FeatureCard 
            icon={<FiHeart size={32} />}
            title="Customer Love" 
            desc="We are always here to help you with any questions or issues." 
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="group p-10 bg-white border-2 border-gray-100 rounded-tr-[3rem] rounded-bl-[3rem] shadow-xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-2">
    <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-black text-gray-900 uppercase italic tracking-tighter mb-4">{title}</h3>
    <p className="text-gray-500 font-medium leading-relaxed">{desc}</p>
  </div>
);

export default About;