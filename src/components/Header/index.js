"use client";
import Link from "next/link";
import React from "react";
import { routes } from "@/components/Header/routes";
// import styles from "@/app/components/Header/styles.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="/">
          MyApp
        </Link>
        <ul className="navbar-nav">
          {routes.map((item) => (
            <li key={item.title} className="nav-item">
              <Link
                href={item.href}
                className="nav-link"
                style={
                  pathname === item.href
                    ? { fontWeight: "bold", color: "#007bff" }
                    : {}
                }
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
