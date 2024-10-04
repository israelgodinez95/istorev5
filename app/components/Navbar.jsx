import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link href="/">Inicio</Link>
        </li>
        <li className="navbar-item">
          <Link href="/products">Productos</Link>
        </li>
        <li className="navbar-item">
          <Link href="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
