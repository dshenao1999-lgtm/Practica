import Navbar from "../components/Navbar";  

export const metadata =
{
  title: "Mi tienda con NEXT.JS",
  description: "Esta es la página principal",
  keywords: "Tienda, Online, Ecommerce"
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>        
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}