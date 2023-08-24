import Link from "next/link";

export const layout = ({ children }) => {
    return <>
        <nav>
            <h3>Sección Tienda</h3>

            <ul>
                <li>
                    <Link href="/tienda/categorias">Categorias</Link>
                </li>
                <li>
                    <Link href="/tienda/categorias/computador">Computador</Link>
                </li>
            </ul>
        </nav>
        {children}
    </>;
};

export default layout;
