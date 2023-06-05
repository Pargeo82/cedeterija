import styles from "./footer.module.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className={styles.foot}>
      <p>
        &copy; {currentYear} <a href="https://www.pargeo.com.hr/">Pargeo.com.hr</a>
      </p>
    </div>
  );
}
