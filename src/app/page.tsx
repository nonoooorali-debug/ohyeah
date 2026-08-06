import BrandWordCarousel from "@/components/BrandWordCarousel";
import styles from "@/styles/home.module.css";

const CLIENT_LOGOS = Array.from({ length: 61 }, (_, index) => ({
  id: index + 1,
  src: `/images/clients/brand logo (${index + 1}).png`,
}));

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.headerNav} aria-label="Primary navigation">
          <span>ABOUT</span>
          <span>CONTACT</span>
        </nav>
      </header>

      <section className={styles.hero} aria-label="Studio OhYeah introduction">
        <BrandWordCarousel />
        <div className={styles.heroPhilosophy}>
          <img
            className={styles.heroPhilosophyImage}
            src="/images/brand/text1.png"
            alt="Studio OhYeah service philosophy"
          />
        </div>
      </section>

      <section className={styles.clients} aria-label="Selected client logos">
        <div className={styles.logoSectionDivider}>
          <img
            className={styles.logoSectionDividerImage}
            src="/images/brand/text2.png"
            alt="Client portfolio introduction"
          />
        </div>

        <div className={styles.clientLogoGrid}>
          {CLIENT_LOGOS.map((client) => (
            <div className={styles.clientLogoItem} key={client.id}>
              <img
                className={styles.clientLogoImage}
                src={client.src}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>ALL RIGHTS RESERVED. COPYRIGHT © STUDIO OHYEAH.</p>
      </footer>
    </main>
  );
}
