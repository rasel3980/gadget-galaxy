
import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-blue-600 p-8 md:p-12 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col lg:flex-row items-center justify-between gap-8 mb-20 shadow-[15px_15px_0px_0px_rgba(255,255,255,0.1)]">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">
              Join the <span className="text-black">Galaxy Squad</span>
            </h2>
            <p className="text-blue-100 font-bold text-xs uppercase tracking-widest mt-2">
              Subscribe for exclusive tech drops and secret deals.
            </p>
          </div>
          <form className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="YOUR.EMAIL@GALAXY.COM"
              className="bg-white/10 border-2 border-white/20 text-white placeholder:text-white/50 px-6 py-4 rounded-tr-2xl rounded-bl-2xl outline-none focus:bg-white focus:text-black transition-all font-bold min-w-[300px]"
            />
            <button className="bg-black hover:bg-white hover:text-black text-white px-8 py-4 rounded-tr-2xl rounded-bl-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2">
              Join <FiSend />
            </button>
          </form>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 px-4">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">
              Gadget <span className="text-blue-600">Galaxy.</span>
            </h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6">
              The ultimate terminal for next-gen smart devices and premium gear. 
              Evolutionizing your digital lifestyle since 2024.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<FiFacebook />} />
              <SocialIcon icon={<FiInstagram />} />
              <SocialIcon icon={<FiTwitter />} />
              <SocialIcon icon={<FiLinkedin />} />
            </div>
          </div>

          <FooterNav 
            title="Sectors" 
            links={["Smartphones", "Wearables", "Audio Gear", "Accessories"]} 
          />
          <FooterNav 
            title="Command" 
            links={["About Us", "Contact", "Store Locator", "Careers"]} 
          />
          <FooterNav 
            title="Support" 
            links={["Privacy Policy", "Terms of Use", "Warranty", "Returns"]} 
          />
        </div>
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
          <p>© 2026 GALAXY TERMINAL. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-4">
            <span className="hover:text-blue-600 cursor-pointer">Security Protocol</span>
            <span className="hover:text-blue-600 cursor-pointer">System Status</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
const FooterNav = ({ title, links }: { title: string, links: string[] }) => (
  <nav className="flex flex-col gap-4">
    <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-2">{title}</h6>
    {links.map((link) => (
      <Link key={link} href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-tight">
        {link}
      </Link>
    ))}
  </nav>
);

const SocialIcon = ({ icon }: { icon: any }) => (
  <div className="w-10 h-10 bg-white/5 hover:bg-blue-600 text-white rounded-tr-xl rounded-bl-xl flex items-center justify-center transition-all cursor-pointer border border-white/10">
    {icon}
  </div>
);

export default Footer;