"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { menuItems } from "../menuData";
import styles from "../../page.module.css";

export default function MenuDetail() {
  const { id } = useParams();
  const menuItem = menuItems.find(item => item.id === parseInt(id));

  if (!menuItem) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Menu Tidak Ditemukan</h1>
          <Link href="/menu">Kembali ke Daftar Menu</Link>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Detail Menu</h1>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}>
          <h2>{menuItem.name}</h2>
          <p>Harga: Rp. {menuItem.price.toLocaleString()}</p>
          <p>{menuItem.description}</p>
          <Link href="/menu">Kembali ke Daftar Menu</Link>
        </div>
      </main>
    </div>
  );
}