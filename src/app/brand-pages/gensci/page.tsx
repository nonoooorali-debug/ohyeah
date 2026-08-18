import Image from "next/image";
import Link from "next/link";
import styles from "@/components/brand-pages/brand-detail.module.css";

const asset = (name: string) => `/images/brand-pages/gensci/${name}`;

export default function GensciPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Return to OhYeah homepage"><img src="/images/common/ohyeah logo.svg" alt="OhYeah" width={262.96} height={59.43} /></Link>
        <Link className={`${styles.contact} nav-link`} href="/about#contact">CONTACT</Link>
      </header>
      <section className={styles.intro} aria-label="Gensci project overview">
        <img className={styles.brandLogo} src={asset("gensci logo.svg")} alt="Gensci" width={154.82} height={72.78} />
        <div className={styles.introContent}>
          <img className={styles.introAside} src={asset("gensci text-01.svg")} alt="Gensci industry and services" width={209.93} height={195.45} />
          <img className={styles.introText} src={asset("gensci text-02.svg")} alt="Gensci project introduction" width={1402.96} height={304.3} />
        </div>
      </section>
      <div className={styles.sectionDivider} aria-hidden="true" />
      <section className={styles.comingSoon} aria-label="Gensci cases coming soon">
        <Image className={styles.comingSoonImage} src="/images/common/case-coming-soon.png" alt="Cases coming soon" width={1920} height={1329} sizes="100vw" loading="lazy" decoding="async" />
      </section>
    </main>
  );
}
