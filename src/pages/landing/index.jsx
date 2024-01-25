import {
  Slider,
  Container,
  Section,
  Product,
  BigProduct,
  Certificate,
} from "@components";
import EssentialOil from "@assets/essential-oil.png";
import LeafOil from "@assets/leaf-oil.png";
import Vanilla from "@assets/vanilla.png";
import Rempah from "@assets/rempah.png";
import AboutUsImage from "@assets/about-us.png";
import WhyUsImage from "@assets/why-us-image.png";
import Fssc from "@assets/fssc.png";
import Cosmos from "@assets/cosmos.png";
import Halal from "@assets/halal.png";
import Klbd from "@assets/klbd.png";

const dummyProduct = [
  {
    title: "Essential Oil",
    description: "Provide some details about this category.",
    image: EssentialOil,
  },
  {
    title: "Clove Leaf Oil Derivates",
    description: "Provide some details about this category.",
    image: LeafOil,
  },
  {
    title: "Vanilla",
    description: "Provide some details about this category.",
    image: Vanilla,
  },
];

const dummyCertificate = [Fssc, Cosmos, Halal, Klbd];

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
          <Product className="mt-[100px] md:mt-[150px]" data={dummyProduct} />
          <BigProduct
            className="mt-[100px] md:mt-[150px]"
            title="Rempah Wangi"
            description="Lorem ipsum dolor sit amet consectetur. Blandit velit nulla sed faucibus libero in nam pharetra."
            image={Rempah}
          />
          <Section
            className="mt-[100px] md:mt-[150px]"
            title="About Us ?"
            description="Use this pragraph to explain the purpose of the contest, the impact that the winning entries will have, and the overall benefits for participants, beyond just the prizes. But mention the wonderful prize too!"
            image={AboutUsImage}
            imagePosition="right"
          />
          <Certificate
            className="mt-[100px] md:mt-[150px]"
            data={dummyCertificate}
          />
        </Container>
      </div>
    </div>
  );
}

export default LandingPage;
