import StepItems from "../../molecules/Steps-molecule";

function Steps() {
  return (
    <div className="row gap-lg-0 gap-4" data-aos="fade-up">
      <StepItems
        icon="step1"
        title="1. Start"
        desc1="Choose one of the games"
        desc2="you want to top up"
      />
      <StepItems
        icon="step2"
        title="2. Fill Up"
        desc1="Top up according"
        desc2="to the nominal that is already available"
      />
      <StepItems
        icon="step3"
        title="3. Be a Winner"
        desc1="Ready to use to"
        desc2="Improve your game"
      />
    </div>
  );
}

export default Steps;
