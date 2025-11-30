import Navbar from "../components/Navbar";  
import { Roboto } from 'next/font/google' ;

export const metadata =
{
  title: "Mi tienda con NEXT.JS",
  description: "Esta es la página principal",
  keywords: "Tienda, Online, Ecommerce"
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>        
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}