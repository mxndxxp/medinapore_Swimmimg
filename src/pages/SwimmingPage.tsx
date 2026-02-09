import ActivitiesAndPools from "../components/swimming/ActivitiesAndPools";
import AdmissionDocuments from "../components/swimming/AdmissionDocuments";
import SwimmingHeader from "../components/swimming/SwimmingHeader";
import TrainingSchedules from "../components/swimming/TrainingSchedules";

const SwimmingPage = () => {
  return (
    <>
      <SwimmingHeader />
      <AdmissionDocuments />
      <ActivitiesAndPools />
      <TrainingSchedules />
      
    </>
  );
};

export default SwimmingPage;
