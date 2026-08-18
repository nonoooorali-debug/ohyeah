import Image from "next/image";
import Link from "next/link";
import styles from "@/components/brand-pages/brand-detail.module.css";

const asset = (name: string) => `/images/brand-pages/rio/${name}`;

const galleryImages = [
  { name: "rio image-01.png", width: 1921, height: 1313 },
  { name: "rio image-02.png", width: 1924, height: 1268 },
  { name: "rio image-03.png", width: 1922, height: 1082 },
  { name: "rio image-04.png", width: 1922, height: 1082 },
] as const;

export default function RioPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Return to OhYeah homepage">
          <img src="/images/common/ohyeah logo.svg" alt="OhYeah" width={262.96} height={59.43} />
        </Link>
        <Link className={`${styles.contact} nav-link`} href="/about#contact">CONTACT</Link>
      </header>

      <section className={styles.intro} aria-label="Rio project overview">
        <img className={styles.brandLogo} src={asset("rio logo.svg")} alt="Rio" width={193.89} height={68.71} />
        <div className={styles.introContent}>
          <img className={styles.introAside} src={asset("rio text-01.svg")} alt="Rio industry and services" width={211.58} height={177.32} />
          <img className={styles.introText} src={asset("rio text-02.svg")} alt="Rio project introduction" width={1402.88} height={368.48} />
        </div>
      </section>

      <div className={styles.sectionDivider} aria-hidden="true" />
      <section className={`${styles.gallery} ${styles.fullGallery}`} aria-label="Rio project gallery">
        {galleryImages.map(({ name, width, height }, index) => (
          <Image className={styles.fullGalleryImage} src={asset(name)} alt={`Rio project visual ${index + 1}`} width={width} height={height} sizes="100vw" loading="lazy" decoding="async" key={name} />
        ))}
      </section>
    </main>
  );
}
