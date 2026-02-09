import { Waves, WavesArrowUpIcon, WavesLadder } from "lucide-react";

function OurActivities() {
  return (
    <>
      <h2 className="text-center text-6xl font-bold text-slate-900 tracking-wide mb-10">
        OUR ACTIVITIES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="bg-[#4f7fc3] rounded-xl p-10 text-center text-white">
          <div className="flex justify-center mb-4 text-orange-400">
            <WavesLadder size={44} />
          </div>
          <h3 className="text-3xl font-bold text-black mb-4">
            WATER POLO
          </h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="bg-[#4f7fc3] rounded-xl p-10 text-center text-white">
          <div className="flex justify-center text-orange-400">
            <WavesArrowUpIcon size={44} />
          </div>
          <h3 className="text-3xl font-bold text-black mb-4">
            COMPETETIVE <br /> TRAINING
          </h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="bg-[#4f7fc3] rounded-xl p-10 text-center text-white">
          <div className="flex justify-center text-orange-400">
            <Waves size={44} />
          </div>
          <h3 className="text-3xl font-bold text-black mb-4">
            SWIMMING <br /> TRAINING
          </h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </>
  );
}

export default OurActivities;
