import Image from "next/image";
import Link from "next/link";
import styles from "@/components/brand-pages/brand-detail.module.css";

const asset = (name: string) => `/images/brand-pages/linkedcare/${name}`;

const primaryGallery = [
  { name: "linkedcare image-01.webp", width: 1859, height: 1047 },
  { name: "linkedcare image-02.webp", width: 1861, height: 1052 },
  { name: "linkedcare image-03.webp", width: 1864, height: 1059 },
  { name: "linkedcare image-04.webp", width: 1677, height: 831, narrow: true },
  { name: "linkedcare image-05.webp", width: 1864, height: 839 },
] as const;

export default function LinkedcarePage() {
  return (
    <main className={`${styles.page} ${styles.linkedPage}`}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Return to OhYeah homepage">
          <img src="/images/common/ohyeah logo.svg" alt="OhYeah" width={262.96} height={59.43} />
        </Link>
        <Link className={`${styles.contact} nav-link`} href="/about#contact">CONTACT</Link>
      </header>

      <section className={styles.intro} aria-label="Linkedcare project overview">
        <img className={styles.brandLogo} src={asset("linkedcare logo.svg")} alt="Linkedcare" width={260.47} height={29.05} />
        <div className={styles.introContent}>
          <img className={styles.introAside} src={asset("linkedcare text-01.svg")} alt="Linkedcare industry and services" width={211.84} height={228.79} />
          <img className={styles.introText} src={asset("linkedcare text-02.svg")} alt="Linkedcare project introduction" width={1402.51} height={283.43} />
        </div>
      </section>

      <div className={styles.sectionDivider} aria-hidden="true" />
      <section className={`${styles.gallery} ${styles.linkedGallery}`} aria-label="Linkedcare brand project gallery">
        {primaryGallery.map(({ name, width, height, ...image }) => (
          <Image className={`${styles.galleryImage} ${styles.linkedGalleryImage} ${"narrow" in image ? styles.linkedGalleryImageNarrow : ""}`} src={asset(name)} alt={`Linkedcare project visual ${name.match(/\d+/)?.[0]}`} width={width} height={height} sizes="(max-width: 1920px) calc(100vw - 56px), 1864px" loading="lazy" decoding="async" key={name} />
        ))}
      </section>

      <div className={`${styles.sectionDivider} ${styles.linkedSecondDivider}`} aria-hidden="true" />
      <section className={styles.linkedTextBlock} aria-label="Linkedcare graphic design services">
        <img className={styles.linkedTextImage} src={asset("linkedcare text-03.svg")} alt="Linkedcare graphic design services" width={1801.46} height={183.42} loading="lazy" />
      </section>
      <Image className={`${styles.galleryImage} ${styles.linkedFinalImage}`} src={asset("linkedcare image-06.webp")} alt="Linkedcare project visual 6" width={1923} height={1282} sizes="100vw" loading="lazy" decoding="async" />
    </main>
  );
}
