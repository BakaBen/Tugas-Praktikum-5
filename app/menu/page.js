import Link from "next/link";
import { menuItems } from "./menuData";
import styles from "../page.module.css";


export default function MenuList() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Daftar Menu</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {menuItems.map((item) => (
            <div key={item.id} style={{ 
              border: '1px solid #ddd', 
              padding: '15px', 
              width: '200px',
              textAlign: 'center'
            }}>
              <h3>{item.name}</h3>
              <p>Rp. {item.price.toLocaleString()}</p>
              <Link href={`/menu/${item.id}`}>
                <button style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '10px',
                  borderRadius: '5px'
                }}>
                  Detail
                </button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}