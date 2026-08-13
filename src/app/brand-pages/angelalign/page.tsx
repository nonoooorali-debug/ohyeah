import Image from "next/image";
import Link from "next/link";
import styles from "./angelalign.module.css";

const asset = (name: string) => `/images/brand-pages/angelalign/${name}`;

const gallery = [
  { name: "angelalign image  (9).png", width: 1921, height: 912 },
  { name: "angelalign image  (10).png", width: 1925, height: 1085 },
  { name: "angelalign image  (11).png", width: 1923, height: 1083 },
  { name: "angelalign image  (12).png", width: 1921, height: 1081 },
  { name: "angelalign image  (13).png", width: 1930, height: 1086 },
  { name: "angelalign image  (1).png", width: 1930, height: 747 },
  { name: "angelalign image  (2).png", width: 1927, height: 712 },
  { name: "angelalign image  (3).png", width: 1930, height: 1086 },
  { name: "angelalign image  (4).png", width: 1923, height: 893 },
  { name: "angelalign image  (5).png", width: 1923, height: 894 },
  { name: "angelalign image  (6).png", width: 1923, height: 894 },
  { name: "angelalign image  (7).png", width: 1916, height: 1078 },
  { name: "angelalign image  (8).png", width: 1921, height: 1081 },
] as const;

export default function AngelalignPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Return to OhYeah homepage">
          <img src="/images/common/ohyeah logo.svg" alt="OhYeah" />
        </Link>
        <Link className={`${styles.contact} nav-link`} href="/about#contact">CONTACT</Link>
      </header>

      <section className={styles.intro} aria-label="Angelalign project overview">
        <div className={styles.introBrand}>
          <img src={asset("angelalign logo.svg")} alt="Angelalign" />
        </div>
        <div className={styles.introContent}>
          <div className={styles.introAside}>
            <img
              className={styles.introServices}
              src={asset("angelalign text-01.svg")}
              alt="Angelalign services"
            />
            <img
              className={styles.introIndustry}
              src={asset("angelalign text-02.svg")}
              alt="Angelalign industry"
            />
          </div>
          <div className={styles.introCopy}>
            <img
              className={styles.introText}
              src={asset("angelalign text-03.svg")}
              alt="Angelalign project introduction"
            />
          </div>
        </div>
      </section>

      <div className={styles.sectionDivider} aria-hidden="true" />

      <section className={styles.gallery} aria-label="Angelalign project gallery">
        {gallery.map(({ name, width, height }, index) => (
          <Image
            className={styles.galleryImage}
            src={asset(name)}
            alt={`Angelalign project visual ${index + 1}`}
            width={width}
            height={height}
            sizes="100vw"
            {...(index === 0 ? { preload: true } : { loading: "lazy" as const })}
            decoding="async"
            key={name}
          />
        ))}
      </section>
    </main>
  );
}
