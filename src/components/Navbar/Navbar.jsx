"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProviders, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const isUseLogin = true;

  const [providers, setProvider] = useState(null);
  const [toogleDropdown, setToogleDropdown] = useState(false);

  useEffect(() => {
    const feProvider = async () => {
      const res = await getProviders();

      setProvider(res);
    };
    setProvider();
  }, []);

  return (
    <nav className="py-3 w-full flex-between mb-16">
      <div className="flex-center gap-[5px]">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            width={30}
            height={30}
            alt="RuaAI"
            className="object-cover"
          />
        </Link>
        <p className="logo_text">RuaAI</p>\
      </div>

      {/* Destop  */}
      <div className="sm:flex hidden">
        {isUseLogin ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/" className="black_btn">
              Create Promt
            </Link>

            <button onClick={signOut} className="outline_btn">
              Logout
            </button>

            <Link href="/">
              <Image
                src="assets/images/logo.svg"
                width={35}
                height={35}
                alt="Profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  signIn
                </button>
              ))}
          </>
        )}
      </div>
      {/*  Mobile*/}
      <div className="sm:hidden flex relative    ">
        {isUseLogin ? (
          <div>
            <Image
              src="assets/images/logo.svg"
              width={35}
              height={35}
              alt="Profile"
              onClick={() => setToogleDropdown((prev) => !prev)}
            />

            {toogleDropdown && (
              <div className="dropdown">
                <Link
                  href="/"
                  className="dropdown_link"
                  onClick={() => setToogleDropdown(false)}
                >
                  MyProfile
                </Link>
                <Link
                  href="/"
                  className="dropdown_link"
                  onClick={() => setToogleDropdown(false)}
                >
                  Create
                </Link>

                <button
                  type="button"
                  onClick={() => setToogleDropdown(false)}
                  className="black_btn"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  signIn
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
