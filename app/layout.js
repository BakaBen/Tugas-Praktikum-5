import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Restaurant App",
  description: "Simple Restaurant Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex" }}>
          <nav
            style={{
              width: "250px",
              padding: "20px",
              borderRight: "2px solid #ddd",
            }}
          >
            <h2>Restaurant Menu</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/menu">Daftar Menu</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
          <main style={{ flex: 1, padding: "20px" }}>{children}</main>
        </div>
      </body>
    </html>
  );
}