import Link from "next/link";
import styles from "./angelalign.module.css";

const asset = (name: string) => `/images/brand-pages/angelalign/${name}`;

const gallery = [
  "angelalign image  (9).png",
  "angelalign image  (10).png",
  "angelalign image  (11).png",
  "angelalign image  (12).png",
  "angelalign image  (13).png",
  "angelalign image  (1).png",
  "angelalign image  (2).png",
  "angelalign image  (3).png",
  "angelalign image  (4).png",
  "angelalign image  (5).png",
  "angelalign image  (6).png",
  "angelalign image  (7).png",
  "angelalign image  (8).png",
];

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
        {gallery.map((name, index) => (
          <img
            className={styles.galleryImage}
            src={asset(name)}
            alt={`Angelalign project visual ${index + 1}`}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            key={name}
          />
        ))}
      </section>
    </main>
  );
}
