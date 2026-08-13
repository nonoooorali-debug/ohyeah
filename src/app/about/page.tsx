import Link from "next/link";
import styles from "./about.module.css";

const asset = (name: string) => `/images/brand-pages/about-page/${name}`;

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Return to OhYeah homepage">
          <img src="/images/common/ohyeah logo.svg" alt="OhYeah" width={262.96} height={59.43} />
        </Link>
        <Link className={`${styles.contactLink} nav-link`} href="#contact">
          CONTACT
        </Link>
      </header>

      <div className={styles.content}>
        <img
          className={styles.fixedLogoText}
          src={asset("about page logo text.svg")}
          alt=""
          aria-hidden="true"
          width={1504.36}
          height={389.9}
        />

        <section className={`${styles.section} ${styles.introduction}`}>
          <div className={styles.introductionSidebar}>
            <div className={styles.introductionActions}>
              <a
                href="https://xhslink.cn/m/98wnZllJilt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open OhYeah on Xiaohongshu"
              >
                <img src={asset("about page element-01.svg")} alt="" width={39} height={39} />
              </a>
              <a
                href="mailto:OhYeah2000@126.com?subject=OhYeah%20Business%20Inquiry"
                aria-label="Email OhYeah"
              >
                <img src={asset("about page element-02.svg")} alt="" width={39} height={39} />
              </a>
            </div>
            <img className={styles.introductionContact} src={asset("about page text-02.svg")} alt="OhYeah contact information" width={233.13} height={43.91} />
            <img className={styles.introductionLocation} src={asset("about page text-03.svg")} alt="Shanghai and Changsha" width={124.28} height={58.95} />
            <img className={styles.peaceMark} src={asset("about page element-03.svg")} alt="" width={83.72} height={100.57} />
          </div>
          <img className={styles.introductionText} src={asset("about page text-04.svg")} alt="About OhYeah" width={1358.45} height={362.81} />
        </section>

        <section className={styles.section} aria-label="Service philosophy">
          <img className={styles.fullText} src={asset("about page text-06.svg")} alt="OhYeah service philosophy" width={1796.06} height={448.33} />
        </section>

        <section className={styles.section} aria-label="Services">
          <img className={styles.fullText} src={asset("about page text-07.svg")} alt="OhYeah services" width={1789.94} height={515.97} loading="lazy" />
        </section>

        <section className={styles.section} aria-label="Team">
          <img className={styles.fullText} src={asset("about page text-08.svg")} alt="OhYeah team" width={1791.71} height={296.3} loading="lazy" />
        </section>

        <section className={styles.section} aria-label="Awards">
          <img className={styles.fullText} src={asset("about page text-09.svg")} alt="OhYeah awards" width={1762.76} height={864.16} loading="lazy" />
        </section>

        <section
          className={`${styles.section} ${styles.contactSection}`}
          id="contact"
          aria-label="Contact details"
        >
          <img className={styles.fullText} src={asset("about page text-01.svg")} alt="OhYeah contact details" width={1695.61} height={282} loading="lazy" />
        </section>

        <footer className={styles.footer}>ALL RIGHTS RESERVED. COPYRIGHT © STUDIO OHYEAH.</footer>
      </div>
    </main>
  );
}
