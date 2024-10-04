import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link href="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link href="/products">Products</Link>
        </li>
        <li className="navbar-item">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
