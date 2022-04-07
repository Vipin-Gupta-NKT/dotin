import React from "react";
import Link from "next/link";
import Image from "next/image";
const AppLogo = () => {
  return (
    <div>
      <Link href="/">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image src="/logo.jpeg" alt="logo" height={60} width={150} />
        </a>
      </Link>
    </div>
  );
};

export default AppLogo;
