// import ActivitiesAndPools from "../components/swimming/ActivitiesAndPools";
// import AdmissionDocuments from "../components/swimming/AdmissionDocuments";
// import SwimmingHeader from "../components/swimming/SwimmingHeader";
// import TrainingSchedules from "../components/swimming/TrainingSchedules";

// const SwimmingPage = () => {
//   return (
//     <>
//       <SwimmingHeader />
//       <AdmissionDocuments />
//       <ActivitiesAndPools />
//       <TrainingSchedules />
      
//     </>
//   );
// };

// export default SwimmingPage;
import SwimmingHeader from "../components/swimming/SwimmingHeader";
import OurActivities from "../components/swimming/OurActivities";
import AdmissionDocuments from "../components/swimming/AdmissionDocuments";
import SwimmingPoolCategories from "../components/swimming/SwimmingPoolCategories";
import TrainingSchedules from "../components/swimming/TrainingSchedules";

const SwimmingPage = () => {
  return (
    <>
      <SwimmingHeader />
      <OurActivities />
      <AdmissionDocuments />
      <SwimmingPoolCategories />
      <TrainingSchedules />
    </>
  );
};

export default SwimmingPage;

