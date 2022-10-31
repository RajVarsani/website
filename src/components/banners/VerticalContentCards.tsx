import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Title, Text } from "@mantine/core";

import styles from "./VerticalContentCards.module.css";

import { staticData } from "../../utils/staticData";
const { general: GENERAL_DATA } = staticData;

interface VerticalContentCardData {
  data: {
    image: {
      src: string | StaticImageData;
      alt: string;
    };
    title: string;
    description: string;
    url: string;
  }[];
  containerStyles?: {};
}

const VerticalContentCards = ({
  data,
  containerStyles,
}: VerticalContentCardData) => {
  return (
    <div className={styles.container} style={containerStyles}>
      {data.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.image}>
            <Image
              src={card.image.src}
              alt={card.image.alt}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <div className={styles.content}>
            <Title order={5} weight={600}>
              {card.title}
            </Title>
            <Text size="md">{card.description}</Text>
            <Link href={card.url} className={styles.link}>
              {GENERAL_DATA.content.learnMore}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalContentCards;
