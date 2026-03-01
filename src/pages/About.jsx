import React from "react";

const aboutData = [
  {
    title: "Simple & Clean",
    desc: "We are committed to providing a smooth and user-friendly mobile experience. Our app is designed to make your daily tasks easier, faster, and more efficient.",
  },
  {
    title: "Modern & Professional",
    desc: "Our mobile platform is built with modern technology to ensure reliability and speed. We continuously improve our features to deliver the best digital experience.",
  },
  {
    title: "User-Centered",
    desc: "Our goal is to create a mobile experience that truly understands user needs. With an intuitive interface and smart features, we help users stay productive and connected.",
  },
  {
    title: "Community-Focused",
    desc: "This application is built to connect people and create a helpful community. We believe in accessibility and trust.",
  },
  {
    title: "Innovative & Future-Oriented",
    desc: "We aim to bring innovation to your fingertips. Our solution combines creativity and technology to deliver a seamless experience.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-600 mb-12">
          About Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;