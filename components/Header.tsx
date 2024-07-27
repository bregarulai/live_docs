import Image from "next/image";
import Link from "next/link";

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="header">
      <Link href="/" className="md:flex-1">
        <Image
          className="hidden md:block"
          src="/assets/icons/logo.svg"
          height={32}
          width={120}
          alt="logo with name"
        />
        <Image
          className="mr-2 md:hidden"
          src="/assets/icons/logo-icon.svg"
          height={32}
          width={32}
          alt="logo "
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
