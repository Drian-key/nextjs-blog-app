import { getCurrentUser } from "@/lib/session";
import Link from "next/link";
import React from "react";
import ButtonLogout from "./button-logout";
import { ModeToggle } from "./toggle-theme";
import Logo from "./logo";

const Header = async () => {
  const user = await getCurrentUser();

  return (
    <header className="p-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <div className="flex gap-6">
          <Link href="/" className="text-2xl font-bold">
            <Logo />
          </Link>
          <ul className="flex space-x-4 items-center font-medium">
            <li>
              <Link href="/blogs" className="hover:underline">
                BTest
              </Link>
            </li>
            {user?.name ? (
              <>
                <li>
                  <Link href="/blogs/create" className="hover:underline">
                    Create
                  </Link>
                </li>
                <ButtonLogout />
                <li>
                  <p>{user.name}</p>
                </li>
              </>
            ) : (
              <li>
                <Link href="/api/auth/signin" className="hover:underline">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Header;
