"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const router = useRouter();

  const links = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="h-screen w-60 bg-gray-900 text-white p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-6">MyApp</h2>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`px-4 py-2 rounded transition-colors ${
              router.pathname === link.path
                ? "bg-gray-700"
                : "hover:bg-gray-800"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
