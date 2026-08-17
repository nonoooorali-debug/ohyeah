import Image from "next/image";
import Link from "next/link";
import styles from "@/components/brand-pages/brand-detail.module.css";

const asset = (name: string) => `/images/brand-pages/abbott/${name}`;

const gallery = [
  { name: "abbott image-01.webp", width: 1921, height: 1281 },
  { name: "abbott image-02.webp", width: 1921, height: 752 },
] as const;

export default function AbbottPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Return to OhYeah homepage">
          <img src="/images/common/ohyeah logo.svg" alt="OhYeah" width={262.96} height={59.43} />
        </Link>
        <Link className={`${styles.contact} nav-link`} href="/about#contact">CONTACT</Link>
      </header>

      <section className={styles.intro} aria-label="Abbott project overview">
        <img className={styles.brandLogo} src={asset("abbott logo.svg")} alt="Abbott" width={96.07} height={109.51} />
        <div className={styles.introContent}>
          <img className={styles.introAside} src={asset("abbott text-01.svg")} alt="Abbott industry and services" width={211.69} height={149.59} />
          <img className={styles.introText} src={asset("abbott text-02.svg")} alt="Abbott project introduction" width={1402.98} height={147.95} />
        </div>
      </section>

      <div className={styles.sectionDivider} aria-hidden="true" />
      <section className={styles.gallery} aria-label="Abbott project gallery">
        {gallery.map(({ name, width, height }, index) => (
          <Image className={styles.galleryImage} src={asset(name)} alt={`Abbott project visual ${index + 1}`} width={width} height={height} sizes="100vw" loading="lazy" decoding="async" key={name} />
        ))}
      </section>
    </main>
  );
}
