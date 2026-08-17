import Image from "next/image";
import Link from "next/link";
import styles from "@/components/brand-pages/brand-detail.module.css";

const asset = (name: string) => `/images/brand-pages/pfizer/${name}`;

const gallery = [
  { name: "phizer image-01.webp", width: 1921, height: 1019 },
  { name: "phizer image-02.webp", width: 1921, height: 722 },
] as const;

export default function PfizerPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Return to OhYeah homepage">
          <img src="/images/common/ohyeah logo.svg" alt="OhYeah" width={262.96} height={59.43} />
        </Link>
        <Link className={`${styles.contact} nav-link`} href="/about#contact">CONTACT</Link>
      </header>

      <section className={styles.intro} aria-label="Pfizer project overview">
        <img className={styles.brandLogo} src={asset("phizer logo.svg")} alt="Pfizer" width={198.49} height={81.06} />
        <div className={styles.introContent}>
          <img className={styles.introAside} src={asset("phizer text-01.svg")} alt="Pfizer industry and services" width={212.05} height={204.99} />
          <img className={styles.introText} src={asset("phizer text-02.svg")} alt="Pfizer project introduction" width={1402.83} height={425.18} />
        </div>
      </section>

      <div className={styles.sectionDivider} aria-hidden="true" />
      <section className={styles.gallery} aria-label="Pfizer project gallery">
        {gallery.map(({ name, width, height }, index) => (
          <Image className={styles.galleryImage} src={asset(name)} alt={`Pfizer project visual ${index + 1}`} width={width} height={height} sizes="100vw" loading="lazy" decoding="async" key={name} />
        ))}
      </section>
    </main>
  );
}
