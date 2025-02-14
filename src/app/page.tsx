"use client";

import { Bilgreen } from "@/assets/bilgreen";
import { NavBar, NavLink } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { AlignLeft, Earth, ShoppingCart, Square } from "lucide-react";
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
      <div className="justify-center items-center bg-[#00796b] p-2 w-screen">
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
        <MobileSheet />
        <Button className="bg-[#4caf50] hover:bg-[#4caf50]/90 rounded-full w-32">
          Login
        </Button>
      </div>
    </>
  );
};

export const DesktopNavigation = () => {
  const pathName = usePathname();

  return (
    <>
      <div className="flex justify-center items-center p-4">
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
            <Button className="bg-[#4caf50] hover:bg-[#4caf50]/90 rounded-full w-32">
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const MobileSheet = () => {
  const pathName = usePathname();

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"ghost"}>
            <AlignLeft />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col *:p-2 outline w-screen h-svh">
          <SheetHeader className="flex-0">
            <SheetTitle className="flex justify-start items-center gap-2 [&_svg]:size-8 font-display font-normal text-primary text-2xl text-left uppercase">
              <Bilgreen />
              Bilgreen
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col flex-1 justify-center items-center gap-12">
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
          <SheetFooter className="flex-row flex-grow-0 flex-shrink-0 justify-stretch items-center gap-4 w-full">
            <Button variant={"outline"} size={"default"} className="w-full">
              <ShoppingCart />
              Basket
            </Button>
            <Button variant={"outline"} size={"default"} className="w-full">
              <Earth />
              English
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};
