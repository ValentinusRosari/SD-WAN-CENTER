"use client";

import { useTheme } from 'next-themes';
import Link from "next/link";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { Title, Collapse } from "rizzui";
import { cn } from "@/utils/class-names";
import { PiCaretDownBold } from "react-icons/pi";
import SimpleBar from "@/components/ui/simplebar";
import { menuItems } from "@/layouts/hydrogen/menu-items";

export default function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  const { theme } = useTheme();
  // Define a function to get the background color based on the theme
  const getBackgroundColor = () => {
    // Use the theme value to conditionally set the background color
    return theme === 'dark' ? 'bg-gray-100/50' : 'bg-primary';
  };

  return (
    <aside
      className={cn(
        "fixed bottom-0 start-0 z-50 h-full w-[270px] border-gray-100 bg-white 2xl:w-72 dark:bg-gray-100/50",
        className
      )}
    >
      <div className={cn("sticky top-0 z-40 px-6 pb-5 pt-5 2xl:px-8 2xl:pt-6", getBackgroundColor())}>
        <Link
          href={"/"}
          aria-label="Site Logo"
          className="text-gray-800 hover:text-gray-900"
        >
          <Title className="text-white hover:text-opacity-80">SD-WAN CENTER</Title>
        </Link>
      </div>

      <SimpleBar className={cn("h-[calc(100%)]", getBackgroundColor())}>
        <div className="mt-4 pb-3 3xl:mt-6">
          {menuItems.map((item, index) => (
            <Fragment key={item.name + "-" + index}>
              {item?.href ? (
                <Link
                  href={item?.href}
                  className={cn(
                    "group relative mx-3 my-0.5 flex items-center justify-between rounded-md px-3 py-2 font-medium capitalize lg:my-1 2xl:mx-5 2xl:my-2",
                    pathname === item?.href
                      ? "before:top-2/5 text-primary before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-white 2xl:before:-start-5"
                      : "text-white transition-colors duration-200 hover:bg-white hover:bg-opacity-40 hover:text-white dark:text-white"
                  )}
                >
                  <div className="flex items-center truncate">
                    {item?.icon && (
                      <span
                        className={cn(
                          "me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]",
                          pathname === item?.href
                            ? "text-white"
                            : "text-white dark:text-white dark:group-hover:text-white"
                        )}
                      >
                        {item?.icon}
                      </span>
                    )}
                    <span className="truncate text-white">{item.name}</span>
                  </div>
                </Link>
              ) : (
                <Title
                  as="h6"
                  className={cn(
                    "mb-2 truncate px-6 text-xs font-normal uppercase tracking-widest text-gray-500 2xl:px-8",
                    index !== 0 && "mt-6 3xl:mt-7"
                  )}
                >
                  {item.name}
                </Title>
              )}
            </Fragment>
          ))}
        </div>
      </SimpleBar>
    </aside>
  );
}