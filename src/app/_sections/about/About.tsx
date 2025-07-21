import ContentWrapper from "@/app/_components/ContentWrapper";
import Section from "../components/Section";
import Image from "next/image";
import SectionTitle from "../components/SectionTitle";

import styles from "./About.module.scss";

const About = () => (
  <Section id="about">
    <ContentWrapper className={styles.content}>
      <Image
        width={300}
        height={408}
        src="/images/about-pets.png"
        alt="pets"
      />
      <div className={styles.content__text}>
        <SectionTitle>
          About the shelter
          <br />
          &quot;Cozy House&quot;
        </SectionTitle>
        <p>
          Currently we have 121 dogs and 342 cats on our hands and statistics
          show that only 20% of them will find a family. The others will
          continue to live with us and will be waiting for a lucky chance to
          become dearly loved.
        </p>
        <p>
          We feed our wards with the best food and make sure that they do not
          get sick, feel comfortable (including psychologically) and well. We
          are supported by 87 volunteers and 28 employees of various skill
          levels. About 12% of the animals are taken by the shelter staff.
          Taking care of the animals, they become attached to the pets and would
          hardly ever leave them alone.
        </p>
      </div>
    </ContentWrapper>
  </Section>
);

export default About;
