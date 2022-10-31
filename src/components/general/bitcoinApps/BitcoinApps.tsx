import Link from "next/link";
import Image from "next/image";
import { Title, Text, Tooltip } from "@mantine/core";

import styles from "./BitcoinApps.module.css";

import { staticData } from "../../../utils/staticData";
const { bitcoinApps: COMPONENT_DATA } = staticData.components;

const BitcoinApps = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title order={2}>{COMPONENT_DATA.title}</Title>
        <Text size="lg">{COMPONENT_DATA.description}</Text>
      </div>
      <div className={styles.apps}>
        <div className={styles.appListWrapper}>
          {COMPONENT_DATA.apps.map((app, index) => (
            <Tooltip
              key={index}
              label={app.name}
              openDelay={400}
              closeDelay={100}
            >
              <Link href={app.url} className={styles.appImage} target="_blank">
                <Image
                  src={app.image.src}
                  alt={app.image.alt}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Link>
            </Tooltip>
          ))}
        </div>
        <div>
          <Link href={COMPONENT_DATA.moreApps.link}>
            <Text transform="uppercase" weight={600}>
              {COMPONENT_DATA.moreApps.text}
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BitcoinApps;
