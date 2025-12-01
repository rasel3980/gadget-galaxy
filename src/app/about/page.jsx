import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gray-200 py-16 px-5 rounded-lg">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          About Gadget Galaxy
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Gadget Galaxy is your trusted online destination for the latest gadgets,
          smart devices, and premium tech accessories. We believe technology
          should be simple, affordable, and accessible to everyone.
        </p>
      </div>
      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-10 items-center">
        
        <Image
        width={400}
        height={600}
          src="https://t3.ftcdn.net/jpg/01/70/80/52/360_F_170805293_mP8dwQvg7ip4tFRyXNs7xhIs470dBArn.jpg"
          alt=""
          className="rounded-xl shadow-md"
        />

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We provide top-quality gadgets at the best prices with fast delivery,
            secure payment, and exceptional customer support.  
            Our mission is to make your digital lifestyle smarter, easier, and more connected.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ Latest & trendy tech products</li>
            <li>✔ Affordable price & reliable quality</li>
            <li>✔ Secure checkout & fast delivery</li>
            <li>✔ Friendly customer support</li>
          </ul>
        </div>

      </div>
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Why Choose Gadget Galaxy?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white shadow-lg hover:shadow-red-600 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-600">Top Quality</h3>
            <p className="text-gray-600 mt-2">
              All gadgets are hand-picked & tested for best performance.
            </p>
          </div>

          <div className="bg-white shadow-lg hover:shadow-red-600 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-600">Fast Delivery</h3>
            <p className="text-gray-600 mt-2">
              Get your favorite gadgets delivered right to your doorstep.
            </p>
          </div>

          <div className="bg-white shadow-lg hover:shadow-red-600 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-600">Customer Support</h3>
            <p className="text-gray-600 mt-2">
              We are always here to help you with any questions or issues.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
