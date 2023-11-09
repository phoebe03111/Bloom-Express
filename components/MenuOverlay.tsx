import Link from "next/link";
import Button from "./Button";

interface MenuOverlayProps {
  links: { key: string; href: string; label: string }[];
}

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col items-center py-4 bg-gray-20 gap-4 absolute top-20 left-0 right-0 w-full">
      {links.map((link) => (
        <li key={link.key}>
          <Link
            href={link.href}
            className="regular-18 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        </li>
      ))}

      <Button
        type="button"
        title="Login"
        icon="/user.svg"
        variant="btn_dark_pink"
      />
    </ul>
  );
};

export default MenuOverlay;
