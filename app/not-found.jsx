import Link from "next/link";

export default function NotFoundPage()
{
    return (
        <section>
            <h1>404</h1>
            <p>Página no encontrada</p>
            <Link href="/">Volver al inicio</Link>
        </section>
    );
}