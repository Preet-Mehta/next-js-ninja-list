import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <div>
            <Image
              className="logo-img"
              src="/logo.png"
              width={100}
              height={60}
            />
          </div>
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default NavBar;
