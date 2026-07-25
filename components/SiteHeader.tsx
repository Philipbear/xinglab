"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/lib/content";
import type { NavigationItem } from "@/lib/content/navigation";
import { withBasePath, withoutBasePath } from "@/lib/site-paths";

function isActivePath(pathname: string, href?: string) {
  if (!href) {
    return false;
  }

  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function isActiveNavigationItem(pathname: string, item: NavigationItem): boolean {
  return isActivePath(pathname, item.href) || Boolean(item.children?.some((child) => isActiveNavigationItem(pathname, child)));
}

export function SiteHeader() {
  const pathname = withoutBasePath(usePathname());
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const desktopMenuCloseTimer = useRef<number | null>(null);
  const isDesktopMenuPointerDown = useRef(false);

  function closeMobileMenuAfterClick() {
    window.setTimeout(() => setIsOpen(false), 0);
  }

  function clearDesktopMenuCloseTimer() {
    if (desktopMenuCloseTimer.current) {
      window.clearTimeout(desktopMenuCloseTimer.current);
      desktopMenuCloseTimer.current = null;
    }
  }

  function showDesktopMenu(menuKey: string) {
    clearDesktopMenuCloseTimer();
    setOpenDesktopMenu(menuKey);
  }

  function closeDesktopMenu() {
    clearDesktopMenuCloseTimer();
    setOpenDesktopMenu(null);
  }

  function closeDesktopMenuAfterPointerExit() {
    clearDesktopMenuCloseTimer();
    desktopMenuCloseTimer.current = window.setTimeout(() => {
      setOpenDesktopMenu(null);
      desktopMenuCloseTimer.current = null;
    }, 180);
  }

  function closeDesktopMenuAfterClick() {
    window.setTimeout(closeDesktopMenu, 0);
  }

  useEffect(() => {
    setIsOpen(false);
    closeDesktopMenu();
  }, [pathname]);

  useEffect(() => {
    function releaseDesktopMenuPointer() {
      isDesktopMenuPointerDown.current = false;
    }

    window.addEventListener("pointerup", releaseDesktopMenuPointer, true);
    window.addEventListener("pointercancel", releaseDesktopMenuPointer, true);

    return () => {
      clearDesktopMenuCloseTimer();
      window.removeEventListener("pointerup", releaseDesktopMenuPointer, true);
      window.removeEventListener("pointercancel", releaseDesktopMenuPointer, true);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/94 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Xing Lab home">
          <span className="flex shrink-0 items-center gap-1 sm:gap-1.5">
            <Image
              src={withBasePath("/images/branding/xing-lab-mark.svg")}
              alt="Xing Lab mark"
              width={72}
              height={62}
              priority
              className="h-12 w-14 shrink-0 object-contain sm:h-14 sm:w-16"
            />
            <span className="text-base font-semibold tracking-normal text-ink sm:text-lg">Xing Lab</span>
          </span>
          <span aria-hidden="true" className="h-8 w-px shrink-0 bg-line" />
          <Image
            src={withBasePath("/images/branding/FDU_logo.png")}
            alt="Fudan University"
            width={478}
            height={209}
            priority
            className="h-auto w-16 shrink-0 sm:w-20 xl:w-24"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = isActiveNavigationItem(pathname, item);
            const itemActive = isActivePath(pathname, item.href);
            const childLinks = item.children ?? [];
            const menuKey = item.href ?? item.label;
            const isDropdownOpen = openDesktopMenu === menuKey;
            const triggerClassName = `inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold tracking-normal transition ${
              active
                ? "bg-fudan text-white"
                : "text-muted hover:bg-white hover:text-ink"
            }`;

            return (
              <div
                key={menuKey}
                className="relative"
                onMouseEnter={() => childLinks.length > 0 && showDesktopMenu(menuKey)}
                onMouseLeave={closeDesktopMenuAfterPointerExit}
                onPointerDownCapture={() => {
                  isDesktopMenuPointerDown.current = true;
                  clearDesktopMenuCloseTimer();
                }}
                onFocus={() => childLinks.length > 0 && showDesktopMenu(menuKey)}
                onBlur={(event) => {
                  const nextFocusedElement = event.relatedTarget;

                  if (isDesktopMenuPointerDown.current) {
                    return;
                  }

                  if (!(nextFocusedElement instanceof Node) || !event.currentTarget.contains(nextFocusedElement)) {
                    closeDesktopMenu();
                  }
                }}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={triggerClassName}
                    aria-current={itemActive ? "page" : undefined}
                    aria-haspopup={childLinks.length > 0 ? "menu" : undefined}
                    aria-expanded={childLinks.length > 0 ? isDropdownOpen : undefined}
                    onClick={closeDesktopMenu}
                  >
                    {item.label}
                    {childLinks.length > 0 ? <ChevronDown aria-hidden="true" size={13} /> : null}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={triggerClassName}
                    aria-haspopup={childLinks.length > 0 ? "menu" : undefined}
                    aria-expanded={childLinks.length > 0 ? isDropdownOpen : undefined}
                    onClick={() => showDesktopMenu(menuKey)}
                  >
                    {item.label}
                    {childLinks.length > 0 ? <ChevronDown aria-hidden="true" size={13} /> : null}
                  </button>
                )}

                {childLinks.length > 0 ? (
                  <div
                    className={`absolute left-0 top-full z-50 min-w-max pt-2 transition ${
                      isDropdownOpen ? "visible opacity-100" : "invisible opacity-0"
                    }`}
                  >
                    <div className="rounded-md border border-line bg-white p-1 shadow-soft">
                      {childLinks.map((child) => {
                        if (!child.href) {
                          return null;
                        }

                        const childActive = isActivePath(pathname, child.href);

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block whitespace-nowrap rounded px-3 py-2 text-xs font-semibold tracking-normal transition ${
                              childActive ? "bg-paper text-fudan" : "text-muted hover:bg-paper hover:text-ink"
                            }`}
                            aria-current={childActive ? "page" : undefined}
                            onClick={closeDesktopMenuAfterClick}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition hover:border-fudan lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>

      <nav
        className={`absolute left-0 right-0 top-full origin-top border-t border-line bg-paper px-5 py-4 shadow-sm transition duration-200 ease-out lg:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-y-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-y-95 opacity-0"
        }`}
        aria-hidden={!isOpen}
        aria-label="Mobile navigation"
      >
        <div className="mx-auto grid max-w-7xl gap-2">
          {navigation.map((item) => {
            const active = isActiveNavigationItem(pathname, item);
            const itemActive = isActivePath(pathname, item.href);
            const childLinks = item.children ?? [];

            return (
              <div key={item.href ?? item.label} className="grid gap-1">
                {item.href ? (
                  <Link
                    href={item.href}
                    tabIndex={isOpen ? undefined : -1}
                    className={`rounded-md px-3 py-3 text-sm font-semibold tracking-normal transition ${
                      active ? "bg-fudan text-white" : "bg-white text-ink hover:text-fudan"
                    }`}
                    aria-current={itemActive ? "page" : undefined}
                    onClick={closeMobileMenuAfterClick}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div
                    className={`rounded-md px-3 py-3 text-sm font-semibold tracking-normal ${
                      active ? "bg-fudan text-white" : "bg-white text-ink"
                    }`}
                  >
                    {item.label}
                  </div>
                )}
                {childLinks.length > 0 ? (
                  <div className="grid gap-1 pl-3">
                    {childLinks.map((child) => {
                      if (!child.href) {
                        return null;
                      }

                      const childActive = isActivePath(pathname, child.href);

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          tabIndex={isOpen ? undefined : -1}
                          className={`rounded-md px-3 py-2 text-sm font-semibold tracking-normal transition ${
                            childActive ? "bg-fudan text-white" : "bg-white text-ink hover:text-fudan"
                          }`}
                          aria-current={childActive ? "page" : undefined}
                          onClick={closeMobileMenuAfterClick}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
