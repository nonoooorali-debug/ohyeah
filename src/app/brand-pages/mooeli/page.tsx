import Image from "next/image";
import Link from "next/link";
import styles from "@/components/brand-pages/brand-detail.module.css";

const asset = (name: string) => `/images/brand-pages/mooeli/${name}`;
const videoUrl = "https://778lu78ibfkwiezh.public.blob.vercel-storage.com/mooeli%20video.mp4";

const remainingImages = [
  { name: "mooeli image-02.png", width: 1921, height: 1081 },
  { name: "mooeli image-03.png", width: 1921, height: 1081 },
  { name: "mooeli image-04.png", width: 1920, height: 1080 },
  { name: "mooeli image-05.png", width: 1921, height: 1081 },
] as const;

export default function MooeliPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Return to OhYeah homepage"><img src="/images/common/ohyeah logo.svg" alt="OhYeah" width={262.96} height={59.43} /></Link>
        <Link className={`${styles.contact} nav-link`} href="/about#contact">CONTACT</Link>
      </header>
      <section className={styles.intro} aria-label="Mooeli project overview">
        <img className={styles.brandLogo} src={asset("mooeli logo.svg")} alt="Mooeli" width={226.85} height={43.17} />
        <div className={styles.introContent}>
          <img className={styles.introAside} src={asset("mooeli text-01.svg")} alt="Mooeli industry and services" width={209.93} height={228.73} />
          <img className={styles.introText} src={asset("mooeli text-02.svg")} alt="Mooeli project introduction" width={1402.57} height={208.26} />
        </div>
      </section>
      <div className={styles.sectionDivider} aria-hidden="true" />
      <section className={styles.videoBlock} aria-label="Mooeli project video">
        <video className={styles.video} src={videoUrl} controls preload="metadata" playsInline />
      </section>
      <div className={styles.sectionDivider} aria-hidden="true" />
      <section className={styles.textBlock} aria-label="Mooeli visual identity system">
        <img className={styles.textImage} src={asset("mooeli text-03.svg")} alt="Mooeli visual identity system" width={1800.39} height={173.09} loading="lazy" />
      </section>
      <section className={styles.insetGallery} aria-label="Mooeli packaging design">
        <Image className={`${styles.galleryImage} ${styles.insetGalleryImage}`} src={asset("mooeli image-01.png")} alt="Mooeli project visual 1" width={1920} height={1080} sizes="(max-width: 1920px) calc(100vw - 56px), 1864px" loading="lazy" decoding="async" />
      </section>
      <div className={`${styles.sectionDivider} ${styles.sequenceDivider}`} aria-hidden="true" />
      <section className={styles.textBlock} aria-label="Mooeli packaging and campaign design">
        <img className={styles.textImage} src={asset("mooeli text-04.svg")} alt="Mooeli packaging and campaign design" width={1802.64} height={210.95} loading="lazy" />
      </section>
      <section className={styles.fullGallery} aria-label="Mooeli project gallery">
        {remainingImages.map(({ name, width, height }, index) => (
          <Image className={styles.fullGalleryImage} src={asset(name)} alt={`Mooeli project visual ${index + 2}`} width={width} height={height} sizes="100vw" loading="lazy" decoding="async" key={name} />
        ))}
      </section>
    </main>
  );
}
