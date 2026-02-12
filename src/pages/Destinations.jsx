// // import PageWrapper from '../components/layout/PageWrapper';
// // import { motion } from 'framer-motion';

// // const Destinations = () => {
// //   const regions = [
// //     {
// //       id: 'north-india',
// //       name: 'North India',
// //       image: '/images/regions/north-india.jpeg',
// //       states: [
// //         'Jammu And Kashmir',
// //         'Himachal Pradesh',
// //         'Punjab',
// //         'Uttarakhand',
// //         'Haryana',
// //         'Uttar Pradesh',
// //         'Rajasthan'
// //       ]
// //     },
// //     {
// //       id: 'northeast-india',
// //       name: 'North East India',
// //       image: '/images/regions/northeast-india.jpeg',
// //       states: [
// //         'Sikkim',
// //         'Assam',
// //         'Meghalaya',
// //         'Arunachal Pradesh',
// //         'Nagaland',
// //         'Manipur',
// //         'Mizoram',
// //         'Tripura'
// //       ]
// //     },
// //     {
// //       id: 'east-india',
// //       name: 'East India',
// //       image: '/images/regions/east-india.jpeg',
// //       states: [
// //         'Jharkhand',
// //         'West Bengal',
// //         'Odisha',
// //         'Bihar',
// //         'Andaman And Nicobar Islands'
// //       ]
// //     },
// //     {
// //       id: 'central-india',
// //       name: 'Central India',
// //       image: '/images/regions/central-india.jpeg',
// //       states: [
// //         'Madhya Pradesh',
// //         'Chhattisgarh'
// //       ]
// //     },
// //     {
// //       id: 'west-india',
// //       name: 'West India',
// //       image: '/images/regions/west-india.jpeg',
// //       states: [
// //         'Gujrat',
// //         'Maharashtra',
// //         'Goa',
// //         'Lakshadweep'
// //       ]
// //     },
// //     {
// //       id: 'south-india',
// //       name: 'South India',
// //       image: '/images/regions/south-india.jpeg',
// //       states: [
// //         'Telengana',
// //         'Karnataka',
// //         'Andhra Pradesh',
// //         'Kerela',
// //         'Tamil Nadu',
// //         'Puducherry'
// //       ]
// //     }
// //   ];

// //   return (
// //     <PageWrapper>
// //       {/* Main Content */}
// //       <section className="min-h-screen bg-cream pt-32 pb-20">
// //         <div className="max-w-7xl mx-auto px-6 lg:px-12">
// //           {/* Destinations Heading */}
// //           <motion.h1
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-charcoal mb-20 tracking-tight"
// //           >
// //             Destinations
// //           </motion.h1>

// //           {/* Regions Grid - 3 columns on large screens, 2 on medium */}
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
// //             {regions.map((region, index) => (
// //               <motion.div
// //                 key={region.id}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: index * 0.1 }}
// //                 className="space-y-6"
// //               >
// //                 {/* Region Map Image - with black background */}
// //                 <div className="relative aspect-square bg-black rounded-sm overflow-hidden">
// //                   <img
// //                     src={region.image}
// //                     alt={region.name}
// //                     className="w-full h-full object-contain"
// //                   />
// //                 </div>

// //                 {/* Region Name - Blue color */}
// //                 <h2 className="font-display text-3xl md:text-3xl font-normal text-blue-700 tracking-tight">
// //                   {region.name}
// //                 </h2>

// //                 {/* States List */}
// //                 <ul className="space-y-1">
// //                   {region.states.map((state, idx) => (
// //                     <li
// //                       key={idx}
// //                       className="font-body text-base text-charcoal/80 leading-relaxed"
// //                     >
// //                       {state}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </PageWrapper>
// //   );
// // };

// // export default Destinations;

// import PageWrapper from "../components/layout/PageWrapper";
// import { motion } from "framer-motion";

// const Destinations = () => {
//   const regions = [
//     {
//       id: "north-india",
//       name: "North India",
//       image: "/images/regions/north-india.jpeg",
//       states: [
//         "Jammu And Kashmir",
//         "Himachal Pradesh",
//         "Punjab",
//         "Uttarakhand",
//         "Haryana",
//         "Uttar Pradesh",
//         "Rajasthan",
//       ],
//     },
//     {
//       id: "northeast-india",
//       name: "North East India",
//       image: "/images/regions/northeast-india.jpeg",
//       states: [
//         "Sikkim",
//         "Assam",
//         "Meghalaya",
//         "Arunachal Pradesh",
//         "Nagaland",
//         "Manipur",
//         "Mizoram",
//         "Tripura",
//       ],
//     },
//     {
//       id: "east-india",
//       name: "East India",
//       image: "/images/regions/east-india.jpeg",
//       states: [
//         "Jharkhand",
//         "West Bengal",
//         "Odisha",
//         "Bihar",
//         "Andaman And Nicobar Islands",
//       ],
//     },
//     {
//       id: "central-india",
//       name: "Central India",
//       image: "/images/regions/central-india.jpeg",
//       states: ["Madhya Pradesh", "Chhattisgarh"],
//     },
//     {
//       id: "west-india",
//       name: "West India",
//       image: "/images/regions/west-india.jpeg",
//       states: ["Gujarat", "Maharashtra", "Goa", "Lakshadweep"],
//     },
//     {
//       id: "south-india",
//       name: "South India",
//       image: "/images/regions/south-india.jpeg",
//       states: [
//         "Telangana",
//         "Karnataka",
//         "Andhra Pradesh",
//         "Kerala",
//         "Tamil Nadu",
//         "Puducherry",
//       ],
//     },
//   ];

//   return (
//     <PageWrapper>
//       <section className="min-h-screen bg-cream pt-32 pb-24">
//         <div className="max-w-[1600px] mx-auto px-10">

//           {/* Page Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-charcoal mb-24 tracking-tight"
//           >
//             Destinations
//           </motion.h1>

//           {/* Regions – ONE ROW */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-20">

//             {regions.map((region, index) => (
//               <motion.div
//                 key={region.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.08 }}
//                 className="flex flex-col items-start space-y-6"
//               >
//                 {/* Map */}
//                 <img
//                   src={region.image}
//                   alt={region.name}
//                   className="w-36 h-auto object-contain"
//                 />

//                 {/* Region Name */}
//                 <h2 className="font-display text-2xl font-normal text-blue-700">
//                   {region.name}
//                 </h2>

//                 {/* States */}
//                 <ul className="space-y-1">
//                   {region.states.map((state, idx) => (
//                     <li
//                       key={idx}
//                       className="font-body text-sm text-charcoal/80 leading-relaxed"
//                     >
//                       {state}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}

//           </div>
//         </div>
//       </section>
//     </PageWrapper>
//   );
// };

// export default Destinations;

import PageWrapper from "../components/layout/PageWrapper";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Destinations = () => {
  const regions = [
    {
      id: "north-india",
      name: "North India",
      image: "/images/regions/north-india.jpeg",
      states: [
        { name: "Jammu And Kashmir", slug: "jammu-kashmir" },
        { name: "Himachal Pradesh", slug: "himachal-pradesh" },
        { name: "Punjab", slug: "punjab" },
        { name: "Uttarakhand", slug: "uttarakhand" },
        { name: "Haryana", slug: "haryana" },
        { name: "Uttar Pradesh", slug: "uttar-pradesh" },
        { name: "Rajasthan", slug: "rajasthan" },
      ],
    },
    {
      id: "northeast-india",
      name: "North East India",
      image: "/images/regions/northeast-india.jpeg",
      states: [
        { name: "Sikkim", slug: "sikkim" },
        { name: "Assam", slug: "assam" },
        { name: "Meghalaya", slug: "meghalaya" },
        { name: "Arunachal Pradesh", slug: "arunachal-pradesh" },
        { name: "Nagaland", slug: "nagaland" },
        { name: "Manipur", slug: "manipur" },
        { name: "Mizoram", slug: "mizoram" },
        { name: "Tripura", slug: "tripura" },
      ],
    },
    {
      id: "east-india",
      name: "East India",
      image: "/images/regions/east-india.jpeg",
      states: [
        { name: "Jharkhand", slug: "jharkhand" },
        { name: "West Bengal", slug: "west-bengal" },
        { name: "Odisha", slug: "odisha" },
        { name: "Bihar", slug: "bihar" },
        { name: "Andaman And Nicobar Islands", slug: "andaman-nicobar" },
      ],
    },
    {
      id: "central-india",
      name: "Central India",
      image: "/images/regions/central-india.jpeg",
      states: [
        { name: "Madhya Pradesh", slug: "madhya-pradesh" },
        { name: "Chhattisgarh", slug: "chhattisgarh" },
      ],
    },
    {
      id: "west-india",
      name: "West India",
      image: "/images/regions/west-india.jpeg",
      states: [
        { name: "Gujarat", slug: "gujarat" },
        { name: "Maharashtra", slug: "maharashtra" },
        { name: "Goa", slug: "goa" },
        { name: "Lakshadweep", slug: "lakshadweep" },
      ],
    },
    {
      id: "south-india",
      name: "South India",
      image: "/images/regions/south-india.jpeg",
      states: [
        { name: "Telangana", slug: "telangana" },
        { name: "Karnataka", slug: "karnataka" },
        { name: "Andhra Pradesh", slug: "andhra-pradesh" },
        { name: "Kerala", slug: "kerala" },
        { name: "Tamil Nadu", slug: "tamil-nadu" },
        { name: "Puducherry", slug: "puducherry" },
      ],
    },
  ];

  return (
    <PageWrapper>
      <section className="min-h-screen bg-cream pt-32 pb-24">
        <div className="max-w-[1600px] mx-auto px-10">

          {/* Page Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-charcoal mb-24 tracking-tight"
          >
            Destinations
          </motion.h1>

          {/* Regions – ONE ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-20">

            {regions.map((region, index) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="flex flex-col items-start space-y-6"
              >
                {/* Map */}
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-36 h-auto object-contain"
                />

                {/* Region Name */}
                <h2 className="font-display text-2xl font-normal text-blue-700">
                  {region.name}
                </h2>

                {/* States - Now Clickable */}
                <ul className="space-y-1">
                  {region.states.map((state, idx) => (
                    <li key={idx}>
                      <Link
                        to={`/state/${state.slug}`}
                        className="font-body text-sm text-charcoal/80 leading-relaxed hover:text-blue-700 hover:underline transition-colors duration-200"
                      >
                        {state.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Destinations;