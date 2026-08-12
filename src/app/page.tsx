import BrandWordCarousel from "@/components/BrandWordCarousel";
import ClientLogoFilter from "@/components/ClientLogoFilter";
import styles from "@/styles/home.module.css";

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
            src="/brand/text1.png"
            alt="Studio OhYeah service philosophy"
          />
        </div>
      </section>

      <section className={styles.clients} aria-label="Selected client logos">
        <ClientLogoFilter />
      </section>

      <footer className={styles.footer}>
        <p>ALL RIGHTS RESERVED. COPYRIGHT © STUDIO OHYEAH.</p>
      </footer>
    </main>
  );
}
