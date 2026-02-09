import ImageCarousel from "./ImageCarousel";

function SwimmingPoolCategories() {
  return (
    <>
      <h2 className="text-center text-5xl font-bold text-slate-900 tracking-wide mb-10">
        OUR SWIMMING POOL CATEGORIES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#4f7fc3] rounded-xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold text-black mb-4">
            KID'S SWIMMING POOL
          </h3>
          <p className="text-md font-semibold mb-4">
            ✔ Filtration System
          </p>
          <ImageCarousel image={["/swim2.jpg", "/swim3.avif"]} />
        </div>

        <div className="bg-[#4f7fc3] rounded-xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold text-black mb-4">
            10 METER SWIMMING POOL
          </h3>
          <p className="text-md font-semibold mb-4">
            ✔ Filtration System
          </p>
          <ImageCarousel image={["/swim4.avif", "/swim5.jpg"]} />
        </div>

        <div className="bg-[#4f7fc3] rounded-xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold text-black mb-4">
            25 METER SWIMMING POOL
          </h3>
          <p className="text-md font-semibold mb-4">
            ✔ Filtration System
          </p>
          <ImageCarousel image={["/swim6.avif", "/swim7.jpg"]} />
        </div>

        <div className="bg-[#4f7fc3] rounded-xl p-8 text-center text-white">
          <h3 className="text-3xl font-extrabold text-black mb-4">
            50 METER SWIMMING POOL
          </h3>

          <ul className="text-md font-semibold space-y-2 mb-4">
            <li>✔ Natural Water Without Filter</li>
            <li>✔ Diving</li>
            <li>✔ Water Polo</li>
          </ul>

          <ImageCarousel image={["/swim8.avif", "/swim4.avif"]} />
        </div>
      </div>
    </>
  );
}

export default SwimmingPoolCategories;
