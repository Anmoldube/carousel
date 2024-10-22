import React from "react";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Free and open source",
      description:
        ".NET is developed and maintained as a free and open-source project on GitHub, the home for millions of developers who want to build great things together.",
      imageUrl:
        "https://dotnet.microsoft.com/blob-assets/images/illustrations/globe.png", // Replace with your image URL
    },
    {
      id: 2,
      title: "Fast and cross-platform",
      description:
        "You can write, run, and build on multiple platforms, including Windows, Linux, and macOS.",
      imageUrl:
        "https://dotnet.microsoft.com/blob-assets/images/illustrations/cross-platform.svg", // Replace with your image URL
    },
  ];

  return (
    <div className="py-16 flex justify-between rounded-2xl bg-yellow-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center md:w-1/2 px-4 mb-8 md:mb-0"
            >
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
