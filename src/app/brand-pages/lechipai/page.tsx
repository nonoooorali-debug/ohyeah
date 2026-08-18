import Image from "next/image";
import Link from "next/link";
import styles from "@/components/brand-pages/brand-detail.module.css";

const asset = (name: string) => `/images/brand-pages/lechipai/${name}`;

const remainingImages = [
  { name: "lechipai image-02.png", width: 1915, height: 1077 },
  { name: "lechipai image-03.png", width: 1915, height: 1078 },
  { name: "lechipai image-04.png", width: 1921, height: 1081 },
  { name: "lechipai image-05.png", width: 1921, height: 1081 },
  { name: "lechipai image-06.png", width: 1921, height: 1081 },
] as const;

export default function LechipaiPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Return to OhYeah homepage"><img src="/images/common/ohyeah logo.svg" alt="OhYeah" width={262.96} height={59.43} /></Link>
        <Link className={`${styles.contact} nav-link`} href="/about#contact">CONTACT</Link>
      </header>
      <section className={styles.intro} aria-label="Lechipai project overview">
        <img className={styles.brandLogo} src={asset("lechipai logo.svg")} alt="Lechipai" width={234.47} height={56.5} />
        <div className={styles.introContent}>
          <img className={styles.introAside} src={asset("lechipai text-01.svg")} alt="Lechipai industry and services" width={209.93} height={228.73} />
          <img className={styles.introText} src={asset("lechipai text-02.svg")} alt="Lechipai project introduction" width={1402.54} height={207.87} />
        </div>
      </section>
      <div className={styles.sectionDivider} aria-hidden="true" />
      <section className={styles.insetGallery} aria-label="Lechipai brand system">
        <Image className={`${styles.galleryImage} ${styles.insetGalleryImage}`} src={asset("lechipai image-01.png")} alt="Lechipai project visual 1" width={1921} height={1081} sizes="(max-width: 1920px) calc(100vw - 56px), 1864px" loading="lazy" decoding="async" />
      </section>
      <div className={`${styles.sectionDivider} ${styles.sequenceDivider}`} aria-hidden="true" />
      <section className={styles.textBlock} aria-label="Lechipai packaging and campaign design">
        <img className={styles.textImage} src={asset("lechipai text-03.svg")} alt="Lechipai packaging and campaign design" width={1802.64} height={210.95} loading="lazy" />
      </section>
      <section className={styles.fullGallery} aria-label="Lechipai project gallery">
        {remainingImages.map(({ name, width, height }, index) => (
          <Image className={styles.fullGalleryImage} src={asset(name)} alt={`Lechipai project visual ${index + 2}`} width={width} height={height} sizes="100vw" loading="lazy" decoding="async" key={name} />
        ))}
      </section>
    </main>
  );
}
