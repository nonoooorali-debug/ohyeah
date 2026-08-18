import Image from "next/image";
import Link from "next/link";
import styles from "@/components/brand-pages/brand-detail.module.css";

const asset = (name: string) => `/images/brand-pages/maishichun/${name}`;

const galleryImages = [
  { name: "maishichun image-01.png", width: 1921, height: 1074 },
  { name: "maishichun image-02.png", width: 1921, height: 1081 },
  { name: "maishichun image-03.png", width: 1921, height: 1081 },
  { name: "maishichun image-04.png", width: 1921, height: 1081 },
  { name: "maishichun image-05.png", width: 1921, height: 1081 },
] as const;

export default function MaishichunPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Return to OhYeah homepage">
          <img src="/images/common/ohyeah logo.svg" alt="OhYeah" width={262.96} height={59.43} />
        </Link>
        <Link className={`${styles.contact} nav-link`} href="/about#contact">CONTACT</Link>
      </header>

      <section className={styles.intro} aria-label="Maishichun project overview">
        <img className={styles.brandLogo} src={asset("maishichun logo.svg")} alt="Maishichun" width={99.28} height={133.81} />
        <div className={styles.introContent}>
          <img className={styles.introAside} src={asset("maishichun text-01.svg")} alt="Maishichun industry and services" width={212.06} height={202.39} />
          <img className={styles.introText} src={asset("maishichun text-02.svg")} alt="Maishichun project introduction" width={1403.06} height={369.84} />
        </div>
      </section>

      <div className={styles.sectionDivider} aria-hidden="true" />
      <section className={`${styles.gallery} ${styles.fullGallery}`} aria-label="Maishichun project gallery">
        {galleryImages.map(({ name, width, height }, index) => (
          <Image className={styles.fullGalleryImage} src={asset(name)} alt={`Maishichun project visual ${index + 1}`} width={width} height={height} sizes="100vw" loading="lazy" decoding="async" key={name} />
        ))}
      </section>
    </main>
  );
}
