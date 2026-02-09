import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageCarousel({ image }: { image: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % image.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [image.length]);

  return (
    <div className="relative mb-4">
      <img
        src={image[index]}
        alt="pool"
        className="w-30 h-30 aspect-square object-cover rounded-lg mx-auto block"
      />

      <button
        onClick={() =>
          setIndex(index === 0 ? image.length - 1 : index - 1)
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full shadow"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={() => setIndex((index + 1) % image.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full shadow"
      >
        <ChevronRight size={18} />
      </button>

      <div className="flex justify-center gap-2 mt-2">
        {image.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              i === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
