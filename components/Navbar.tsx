"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="max-container padding-container relative z-30 py-5">
      <div className="flexBetween">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_pink"
          />
        </div>

        <div className="block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)}>
              <Image
                src="/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
              />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)}>
              <Image
                src="/close.svg"
                alt="close"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
              />
            </button>
          )}
        </div>
      </div>

      {navbarOpen ? <MenuOverlay links={NAV_LINKS} /> : null}
    </nav>
  );
};

export default Navbar;
