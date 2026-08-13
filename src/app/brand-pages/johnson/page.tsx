import Link from "next/link";
import styles from "./johnson.module.css";

const asset = (name: string) => `/images/brand-pages/johnson/${name}`;

const gallery = [
  "Johnson image-01.png",
  "Johnson image-02.png",
  "Johnson image-03.png",
] as const;

export default function JohnsonPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Return to OhYeah homepage">
          <img src="/images/common/ohyeah logo.svg" alt="OhYeah" />
        </Link>
        <Link className={`${styles.contact} nav-link`} href="/about#contact">
          CONTACT
        </Link>
      </header>

      <section className={styles.intro} aria-label="Johnson and Johnson project overview">
        <img
          className={styles.brandLogo}
          src="/images/clients/brand logo (1).svg"
          alt="Johnson & Johnson"
        />

        <div className={styles.introContent}>
          <div className={styles.introAside}>
            <img src={asset("Johnson text01.svg")} alt="Johnson industry" />
            <img className={styles.serviceText} src={asset("Johnson text02.svg")} alt="Johnson services" />
          </div>
          <img className={styles.projectText} src={asset("Johnson text03.svg")} alt="Johnson project introduction" />
        </div>
      </section>

      <div className={styles.sectionDivider} aria-hidden="true" />

      <section className={styles.gallery} aria-label="Johnson project gallery">
        {gallery.map((name, index) => (
          <img
            className={styles.galleryImage}
            src={asset(name)}
            alt={`Johnson project visual ${index + 1}`}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            key={name}
          />
        ))}
      </section>
    </main>
  );
}
