// import { Dumbbell } from "lucide-react";

// const GymHeader = () => {
//   return (
//    <section className="relative h-130 mt-20 flex items-center overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center z-0"
//           style={{
//             backgroundImage: `linear-gradient(rgba(38, 63, 127, 0.65), rgba(38, 63, 127, 0.65)), url('/bg1.webp')`,
//           }}
//         ></div>
//         <div className="container max-w-8xl lg:max-w-8xl mx-auto relative z-10 py-20">
//           {/* Background */}
//           {/* <div className="absolute inset-0 bg-linear-to-l from-blue-900/80 to-transparent z-10" /> */}

//           {/* Main Content */}
//           <div className="relative z-20 w-full grid grid-cols-12 gap-20 ">
//             {/* LEFT SECTION — pulled toward center */}
//             <div className="col-span-7 flex flex-col justify-center space-y-12 translate-x-12 relative z-30">
//               {/* Swimming Pool */}
              

//               {/* Gym */}
//               <div className="flex items-start space-x-8">
//                 <div className="flex flex-col items-center w-32 text-center">
//                   <Dumbbell className="w-12 h-12 text-orange-500 -ml-36" />
//                   <h3 className="text-yellow-400 font-bold tracking-widest text-md -ml-37">
//                     GYM
//                   </h3>
//                 </div>
//                 <div className="flex-1 pt-2 border-t border-gray-500/50">
//                   <p className="text-white text-2xl leading-relaxed ml-15">
//                     A state of the art facility where people can train, do
//                     weight management and work on their physique.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT SECTION — pulled left + overlapping */}
//             <div className="col-span-5 relative flex items-center justify-center -translate-x-20 z-20">
//               {/* Orange Ring */}
//               <div className="absolute w-130 h-130 border-100 border-orange-600 rounded-full opacity-90 z-10 ml-25" />

//               {/* Swimmer */}
//               <img
//                 src="gymer.webp"
//                 alt="Swimmer"
//                 className="relative z-30 h-120 object-contain translate-y-10 ml-20"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//   );
// };

// export default GymHeader;
 
import { Dumbbell } from "lucide-react";

const GymHeader = () => {
  return (
    <section className="relative h-130 mt-20 flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(38, 63, 127, 0.65), rgba(38, 63, 127, 0.65)), url('/bg1.webp')`,
        }}
      ></div>

      <div className="container max-w-8xl mx-auto relative z-10 py-20 px-4 md:px-0">
        {/* Main Content */}
        <div className="relative z-20 w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          
          {/* LEFT SECTION */}
          <div className="col-span-1 md:col-span-7 flex flex-col justify-center space-y-8 md:space-y-12 md:translate-x-12 relative z-30">
            <div className="flex items-start space-x-6 md:space-x-8 flex-col md:flex-row">
              
              {/* Icon + Title */}
              <div className="flex flex-col items-center md:items-center w-full md:w-32 text-center md:text-center">
                <Dumbbell className="w-12 h-12 text-orange-500 md:-ml-36" />
                <h3 className="text-yellow-400 font-bold tracking-widest text-md md:-ml-37">
                  GYM
                </h3>
              </div>

              {/* Text */}
              <div className="flex-1 pt-4 md:pt-2 border-t border-gray-500/50">
                <p className="text-white text-lg md:text-2xl leading-relaxed md:ml-15 text-center md:text-left">
                  A state of the art facility where people can train, do
                  weight management and work on their physique.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="col-span-1 md:col-span-5 relative flex items-center justify-center md:-translate-x-20 z-20">
            
            {/* Orange Ring */}
            <div className="absolute w-72 h-72 md:w-130 md:h-130 border-[20px] md:border-100 border-orange-600 rounded-full opacity-90 z-10 md:ml-25" />

            {/* Image */}
            <img
              src="gymer.webp"
              alt="Gym"
              className="relative z-30 h-64 md:h-120 object-contain md:translate-y-10 md:ml-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymHeader;
