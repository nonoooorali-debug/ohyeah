import Image from "next/image";
import Link from "next/link";
import styles from "@/components/brand-pages/brand-detail.module.css";

const asset = (name: string) => `/images/brand-pages/dolu-shine/${name}`;

const galleryImages = [
  { name: "dolu shine image-01.png", width: 1921, height: 1074 },
  { name: "dolu shine image-02.png", width: 1921, height: 1165 },
  { name: "dolu shine image-03.png", width: 1921, height: 2250 },
  { name: "dolu shine image-04.png", width: 1921, height: 1281 },
  { name: "dolu shine image-05.png", width: 1921, height: 1284 },
  { name: "dolu shine image-06.png", width: 1921, height: 1080 },
] as const;

export default function DoluShinePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Return to OhYeah homepage">
          <img src="/images/common/ohyeah logo.svg" alt="OhYeah" width={262.96} height={59.43} />
        </Link>
        <Link className={`${styles.contact} nav-link`} href="/about#contact">CONTACT</Link>
      </header>

      <section className={styles.intro} aria-label="Dolu Shine project overview">
        <img className={styles.brandLogo} src={asset("dolu shine logo.svg")} alt="Dolu Shine" width={175.02} height={100.7} />
        <div className={styles.introContent}>
          <img className={styles.introAside} src={asset("dolu shine text-01.svg")} alt="Dolu Shine industry and services" width={211.82} height={177.32} />
          <img className={styles.introText} src={asset("dolu shine text-02.svg")} alt="Dolu Shine project introduction" width={1402.98} height={472.96} />
        </div>
      </section>

      <div className={styles.sectionDivider} aria-hidden="true" />
      <section className={`${styles.gallery} ${styles.fullGallery}`} aria-label="Dolu Shine project gallery">
        {galleryImages.map(({ name, width, height }, index) => (
          <Image className={styles.fullGalleryImage} src={asset(name)} alt={`Dolu Shine project visual ${index + 1}`} width={width} height={height} sizes="100vw" loading="lazy" decoding="async" key={name} />
        ))}
      </section>
    </main>
  );
}
