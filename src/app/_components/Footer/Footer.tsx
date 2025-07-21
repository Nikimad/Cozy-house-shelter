import Image from "next/image";
import ContentWrapper from "../ContentWrapper";
import FooterColumn from "./components/FooterColumn";
import FooterLink from "./components/FooterLink";

import styles from "./Footer.module.scss";

const Footer = () => (
  <footer id="contacts" className={styles.root} data-observe="true">
    <ContentWrapper className={styles.content}>
      <FooterColumn title="For questions and suggestions">
        <FooterLink href="mailto:email@shelter.com">
          <div className="icon email"></div>
          email@shelter.com
        </FooterLink>
        <FooterLink href="tel:+136745677554">
          <div className="icon phone"></div>
          +13 674 567 75 54
        </FooterLink>
      </FooterColumn>
      <FooterColumn title="We are waiting for your visit">
        <FooterLink href="https://goo.gl/maps/i5rjcFPwNtvnwdC27">
          <div className="icon pin"></div>
            1 Central Street, Boston
            <br />
            (entrance from the store)
        </FooterLink>
        <FooterLink href="https://goo.gl/maps/v55fA4VeShZnaniv7">
          <div className="icon pin"></div>
          18 South Park, London
        </FooterLink>
      </FooterColumn>
      <Image
        height={300}
        width={310}
        alt="puppy"
        src="/images/footer-puppy.png"
      />
    </ContentWrapper>
  </footer>
);

export default Footer;
