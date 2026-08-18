import Image from "next/image";
import Link from "next/link";
import styles from "@/components/brand-pages/brand-detail.module.css";

const asset = (name: string) => `/images/brand-pages/3s/${name}`;

export default function ThreeSPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Return to OhYeah homepage">
          <img src="/images/common/ohyeah logo.svg" alt="OhYeah" width={262.96} height={59.43} />
        </Link>
        <Link className={`${styles.contact} nav-link`} href="/about#contact">CONTACT</Link>
      </header>

      <section className={styles.intro} aria-label="3S project overview">
        <img className={styles.brandLogo} src={asset("3s logo.svg")} alt="3S Pharmaceutical Group" width={115.61} height={109.54} />
        <div className={styles.introContent}>
          <img className={styles.introAside} src={asset("3s text-01.svg")} alt="3S industry and services" width={209.93} height={198.12} />
          <img className={styles.introText} src={asset("3s text-02.svg")} alt="3S project introduction" width={1402.98} height={427.04} />
        </div>
      </section>

      <div className={styles.sectionDivider} aria-hidden="true" />
      <section className={styles.insetGallery} aria-label="3S project gallery">
        <Image className={`${styles.galleryImage} ${styles.insetGalleryImage}`} src={asset("3s image-01.png")} alt="3S project visual 1" width={1864} height={1172} sizes="(max-width: 1920px) calc(100vw - 56px), 1864px" loading="lazy" decoding="async" />
      </section>
    </main>
  );
}
