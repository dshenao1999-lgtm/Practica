import Navbar from "./component/Navbar";  

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