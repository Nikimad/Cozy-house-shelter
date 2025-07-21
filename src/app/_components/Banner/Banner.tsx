import cn from "classnames";

import Link from "next/link";
import Image from "next/image";
import ContentWrapper from "../ContentWrapper";

import styles from "./Banner.module.scss";

const Banner = () => (
  <section className={styles.root}>
    <ContentWrapper className={styles.content}>
      <div className={styles.content__info}>
        <h2 className={styles.content__info__title}>
          Not only people need a house
        </h2>
        <p className={styles.content__info__text}>
          We offer to give a chance to a little and nice puppy with an extremely
          wide and open heart. He or she will love you more than anybody else in
          the world, you will see!
        </p>
        <Link href="#about" className={cn("pill", styles.content__info__link)}>
          Make a friend
        </Link>
      </div>
      <Image
        src="/images/start-screen-puppy.png"
        alt="puppy"
        width={678}
        height={728}
      />
    </ContentWrapper>
  </section>
);

export default Banner;
