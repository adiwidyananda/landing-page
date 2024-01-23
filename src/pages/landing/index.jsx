import { Slider, Container, Section } from "@components";
import WhyUsImage from "@assets/why-us-image.png";

function LandingPage() {
  return (
    <div className="landing-page">
      <Slider />
      <div className="landing-page-content">
        <Container>
          <Section
            linkText="our value"
            title="Why Us ?"
            description="Use this pragraph to explain the purpose of the contest, the
              impact that the winning entries will have, and the overall
              benefits for participants, beyond just the prizes. But mention the
              wonderful prize too!"
            image={WhyUsImage}
          />
          <Section
            linkText="our value"
            title="Why Us ?"
            description="Use this pragraph to explain the purpose of the contest, the
              impact that the winning entries will have, and the overall
              benefits for participants, beyond just the prizes. But mention the
              wonderful prize too!"
            image={WhyUsImage}
            imagePosition="right"
          />
        </Container>
      </div>
    </div>
  );
}

export default LandingPage;
