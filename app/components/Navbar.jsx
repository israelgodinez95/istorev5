import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </nav>
    );
};

export default Navbar;