import Link from "next/link";
import styles from "../page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Tentang Kami</h1>
        <p>Nama Mahasiswa: Rubben Christiano</p>
        <p>NRP: 231131005</p>
        <p>Program Studi: Sistem Informasi</p>
        <Link href="/">Kembali ke Beranda</Link>
      </main>
    </div>
  );
}