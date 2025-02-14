"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  title: string;
  active?: boolean;
};
type NavBarProps = {
  items: NavLinkProps[];
};

export const NavLink = ({ title, href, active = false }: NavLinkProps) => {
  return (
    <Link
      className={cn(
        "group relative md:font-medium font-semibold md:text-base text-2xl text-left capitalize",
        {
          "text-primary": active,
          "text-muted-foreground hover:text-primary": !active,
        }
      )}
      href={href ?? "/"}
    >
      {title}
      <div
        className={cn("absolute bg-primary w-0 h-[3px] md:h-0.5 duration-300", {
          "w-full": active,
          "group-hover:w-full": !active,
        })}
      />
    </Link>
  );
};

export const NavBar = ({ items }: NavBarProps) => {
  const pathName = usePathname();

  return (
    <div className="hidden relative md:flex flex-grow justify-start items-center gap-2 lg:gap-4 xl:gap-5">
      {items.map((item, index) => {
        const isActive =
          pathName === item.href ||
          (pathName.startsWith(item.href) && item.href !== "/");
        return (
          <NavLink
            href={item.href}
            title={item.title}
            active={isActive}
            key={index}
          />
        );
      })}
    </div>
  );
};
