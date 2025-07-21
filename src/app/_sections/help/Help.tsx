import ContentWrapper from "@/app/_components/ContentWrapper";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import HelpItem from "./components/HelpItem";

import styles from "./Help.module.scss";

const helpItems = [
  { title: "Pet food", src: "/svg/pet-food.svg", alt: "pet food" },
  {
    title: "Transportation",
    src: "/svg/transportation.svg",
    alt: "transportation",
  },
  { title: "Toys", src: "/svg/toys.svg", alt: "toy" },
  {
    title: "Bowls and cups",
    src: "/svg/bowls-and-cups.svg",
    alt: "bowl and cup",
  },
  { title: "Shampoos", src: "/svg/shampoos.svg", alt: "shampoo" },
  { title: "Vitamins", src: "/svg/vitamins.svg", alt: "vitamin" },
  { title: "Medicines", src: "/svg/medicines.svg", alt: "medicine" },
  {
    title: "Collars and leashes",
    src: "/svg/collars-leashes.svg",
    alt: "collar and leash",
  },
  {
    title: "Sleeping areas",
    src: "/svg/sleeping-areas.svg",
    alt: "sleeping area",
  },
];

const Help = () => (
  <Section id="help">
    <ContentWrapper className={styles.content}>
      <SectionTitle>How you can help our shelter</SectionTitle>
      <ul className={styles.__list}>
        {helpItems.map(({ title, src, alt }) => (
          <HelpItem key={title} title={title} src={src} alt={alt} />
        ))}
      </ul>
    </ContentWrapper>
  </Section>
);

export default Help;
