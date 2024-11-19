"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Selamat Datang di Restoran Kami</h1>
        <p>Nikmati hidangan special kami dengan cita rasa yang istimewa!</p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px', 
          marginTop: '20px' 
        }}>
          <Link href="/menu">
            <button>Lihat Menu</button>
          </Link>
          <Link href="/contact">
            <button>Hubungi Kami</button>
          </Link>
        </div>
      </main>
    </div>
  );
}