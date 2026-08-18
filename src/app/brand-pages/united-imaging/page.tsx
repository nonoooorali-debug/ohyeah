import Image from "next/image";
import Link from "next/link";
import styles from "@/components/brand-pages/brand-detail.module.css";

const asset = (name: string) => `/images/brand-pages/united-imaging/${name}`;

export default function UnitedImagingPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Return to OhYeah homepage"><img src="/images/common/ohyeah logo.svg" alt="OhYeah" width={262.96} height={59.43} /></Link>
        <Link className={`${styles.contact} nav-link`} href="/about#contact">CONTACT</Link>
      </header>
      <section className={styles.intro} aria-label="United Imaging project overview">
        <img className={styles.brandLogo} src={asset("united imaging logo.svg")} alt="United Imaging" width={232.55} height={45.12} />
        <div className={styles.introContent}>
          <img className={styles.introAside} src={asset("united imaging text-01.svg")} alt="United Imaging industry and services" width={209.93} height={169.12} />
          <img className={styles.introText} src={asset("united imaging text-02.svg")} alt="United Imaging project introduction" width={1402.82} height={333} />
        </div>
      </section>
      <div className={styles.sectionDivider} aria-hidden="true" />
      <section className={styles.comingSoon} aria-label="United Imaging cases coming soon">
        <Image className={styles.comingSoonImage} src="/images/common/case-coming-soon.png" alt="Cases coming soon" width={1920} height={1329} sizes="100vw" loading="lazy" decoding="async" />
      </section>
    </main>
  );
}
