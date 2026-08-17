import Image from "next/image";
import Link from "next/link";
import styles from "@/components/brand-pages/brand-detail.module.css";

const asset = (name: string) => `/images/brand-pages/hengqingsong/${name}`;

const gallery = [
  { name: "hengqingsong image-01.webp", width: 1921, height: 1111 },
  { name: "hengqingsong image-02.webp", width: 1921, height: 1283 },
  { name: "hengqingsong image-03.webp", width: 1921, height: 1292 },
] as const;

export default function HengqingsongPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Return to OhYeah homepage">
          <img src="/images/common/ohyeah logo.svg" alt="OhYeah" width={262.96} height={59.43} />
        </Link>
        <Link className={`${styles.contact} nav-link`} href="/about#contact">CONTACT</Link>
      </header>

      <section className={styles.intro} aria-label="Hengqingsong project overview">
        <img className={styles.brandLogo} src={asset("hengqingdong logo.svg")} alt="Hengqingsong" width={186.97} height={66.03} />
        <div className={styles.introContent}>
          <img className={styles.introAside} src={asset("hengqingsong text-01.svg")} alt="Hengqingsong industry and services" width={211.84} height={149.59} />
          <img className={styles.introText} src={asset("hengqingsong text-02.svg")} alt="Hengqingsong project introduction" width={1395.25} height={181.4} />
        </div>
      </section>

      <div className={styles.sectionDivider} aria-hidden="true" />
      <section className={styles.gallery} aria-label="Hengqingsong project gallery">
        {gallery.map(({ name, width, height }, index) => (
          <Image className={styles.galleryImage} src={asset(name)} alt={`Hengqingsong project visual ${index + 1}`} width={width} height={height} sizes="100vw" loading="lazy" decoding="async" key={name} />
        ))}
      </section>
    </main>
  );
}
