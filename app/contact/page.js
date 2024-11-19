import Link from "next/link";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Contact</h1>
        <p>Email: kangsamli14@gmail.com</p>
        <p>WhatsApp: +62 821-1234-5678</p>
        <Link href="/">Kembali ke Beranda</Link>
      </main>
    </div>
  );
}