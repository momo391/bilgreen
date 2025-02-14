"use client";

import { Bilgreen } from "@/assets/bilgreen";
import { NavBar, NavLink } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { AlignLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "scrap",
    href: "/scrap",
  },
  {
    title: "blog",
    href: "/blog",
  },
  {
    title: "about us",
    href: "/about",
  },
];

export default function Page() {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="hidden md:flex justify-center items-center bg-[#00796b] p-2 w-screen">
        <div className="flex flex-row justify-between items-center w-full max-w-7xl">
          <span className="flex md:flex-row flex-col justify-center md:justify-start items-start md:items-center md:gap-2 -space-y-0.5 w-full text-primary-foreground text-xs">
            <p>+213 540629662</p>
            <p className="hidden md:block">|</p>
            <p>ia7636hs@gmail.com</p>
          </span>

          <span className="flex md:flex-row flex-col justify-center md:justify-end items-end md:items-center md:gap-2 -space-y-0.5 md:space-y-0 w-full text-primary-foreground text-xs text-center capitalize">
            <Link className="hover:underline" href={"/"}>
              terms and conditions
            </Link>
            <p className="hidden md:block">|</p>
            <Link className="hover:underline" href={"/"}>
              cantact us
            </Link>
          </span>
        </div>
      </div>

      {/*  */}

      {isMobile && <MobileNavigation />}
      {!isMobile && <DesktopNavigation />}
    </>
  );
}

export const MobileNavigation = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4 w-screen">
        <Button size={"icon"}>
          <AlignLeft />
        </Button>
        <Button>Login</Button>
      </div>
    </>
  );
};

export const DesktopNavigation = () => {
  const pathName = usePathname();

  return (
    <>
      <div className="flex justify-center items-center p-4 outline *:outline">
        <div className="flex justify-center items-center gap-4 xl:gap-8 px-2 w-full max-w-7xl">
          <div className="flex flex-grow-0 flex-shrink-0 justify-center items-center gap-1">
            <Bilgreen className="size-8" />
            <p className="text-3xl">Bilgreen</p>
          </div>

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

          <div className="flex flex-grow-0 flex-shrink-0 justify-center items-center gap-2">
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </>
  );
};
