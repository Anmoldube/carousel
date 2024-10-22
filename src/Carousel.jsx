import React, { useState, useEffect } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      title: ".NET Conf 2024",
      text: ".NET 9 launches at .NET Conf 2024! Tune in from November 12-14 to celebrate .NET 9 at the biggest virtual event.",
      imageUrl:
        "https://dotnet.microsoft.com/blob-assets/images/illustrations/carousel/csharp-dev-kit.png",
    },
    {
      id: 2,
      title: "Free and open source",
      text: ".NET is developed and maintained as a free and open-source project on GitHub.",
      imageUrl:
        "https://media.istockphoto.com/id/1702447111/photo/data-center-manager-codes-on-tablet.webp?a=1&b=1&s=612x612&w=0&k=20&c=jIVm-y5J9nu2_qzx5v4pSk8F1FLEB3AyE8-fFcCXdCI=",
    },
    {
      id: 3,
      title: "Fast and cross-platform",
      text: "You can write, run, and build on multiple platforms, including Windows, Linux, and macOS.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      title: "What's next in .NET 9?",
      text: ".NET 9 elevates cloud-native and intelligent app development, and more. Preview the next major version of .NET today.",
      imageUrl:
        "https://dotnet.microsoft.com/blob-assets/images/illustrations/carousel/csharp-certification.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  let intervalRef = null;

  // Effect to handle auto-slide
  useEffect(() => {
    if (isPlaying) {
      intervalRef = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef); // Clear the interval on cleanup
  }, [isPlaying, currentIndex]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="relative max-w-4xl mx-auto text-center overflow-hidden rounded-lg shadow-lg bg-zinc-400">
        {/* Slide content */}
        <div className="w-[50vw] h-96">
          <img
            src={slides[currentIndex].imageUrl}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="overflow-hidden absolute bottom-[40%] left-12 right-[40%] bg-gray-800 bg-opacity-60 text-white p-4">
            <h2 className="text-2xl font-semibold">
              {slides[currentIndex].title}
            </h2>
            <p>{slides[currentIndex].text}</p>
          </div>
        </div>

        {/* Dots for navigation */}
        <div className="flex justify-center mt-4 bg-white">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 mx-2 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Play/Pause button */}
        <button
          onClick={handlePlayPause}
          className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg focus:outline-none"
        >
          {isPlaying ? (
            <PauseIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <PlayIcon className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>
    </>
  );
};

export default Carousel;

// import React, { useState, useEffect } from "react";
// import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

// const Carousel = () => {
//   const slides = [
//     {
//       id: 1,
//       title: ".NET Conf 2024",
//       text: ".NET 9 launches at .NET Conf 2024! Tune in from November 12-14 to celebrate .NET 9 at the biggest virtual event.",
//       imageUrl: "https://dotnet.microsoft.com/blob-assets/images/illustrations/carousel/csharp-certification.png",
//     },
//     {
//       id: 2,
//       title: "Free and open source",
//       text: ".NET is developed and maintained as a free and open-source project on GitHub.",
//       imageUrl: "https://dotnet.microsoft.com/blob-assets/images/illustrations/carousel/csharp-dev-kit.png",
//     },
//     {
//       id: 3,
//       title: "Fast and cross-platform",
//       text: "You can write, run, and build on multiple platforms, including Windows, Linux, and macOS.",
//       imageUrl: "https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   let intervalRef = null;

//   // Effect to handle auto-slide
//   useEffect(() => {
//     if (isPlaying) {
//       intervalRef = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//       }, 3000);
//     }
//     return () => clearInterval(intervalRef); // Clear the interval on cleanup
//   }, [isPlaying, currentIndex]);

//   const handlePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="">
//       {/* Slide content */}
//       <div className="rounded-full w-96 h-40 bg-black">
//         <img
//           src={slides[currentIndex].imageUrl}
//           alt={slides[currentIndex].title}
//           className="rounded-full w-96 h-40"
//         />
//         <div className="rounded-full w-96 h-40 absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-60 text-white p-4">
//           <h2 className="text-2xl font-semibold">{slides[currentIndex].title}</h2>
//           <p>{slides[currentIndex].text}</p>
//         </div>
//       </div>

//       {/* Dots for navigation */}
//       <div className="rounded-full w-96 h-40 bg-black">
//         {slides.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-3 w-3 mx-2 rounded-full cursor-pointer ${
//               index === currentIndex ? "bg-black" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Play/Pause button */}
//       <button
//         onClick={handlePlayPause}
//         className="absolute bottom-4 right-4  bg-black p-2 rounded-full shadow-lg focus:outline-none"
//       >
//         {isPlaying ? (
//           <PauseIcon className="h-6 w-6 text-gray-700" />
//         ) : (
//           <PlayIcon className="h-6 w-6 text-gray-700" />
//         )}
//       </button>
//     </div>
//   );
// };

// export default Carousel;
