"use client";
import React from "react";
import { routes } from "@/components/Header/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import styles from "./styles.module.css";
const SideBar = () => {
  const pathname = usePathname();
  return (
    <ul>
      {routes.map((item) => (
        <li key={item.title} className="nav-item mt-2">
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
  );
};

export default SideBar;
