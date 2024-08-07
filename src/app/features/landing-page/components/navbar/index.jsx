"use client";
import React, {useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../navbar/navbar.module.scss";
import Image from "next/image";
import logo from "../../../../../../public/assets/images/RogueDevTech.svg"
import menu from "../../../../../../public/assets/images/Vector.svg"
import exit from "../../../../../../public/assets/images/exit.svg"

const NavBar = () => {

  const [mobile, setMobile] = useState(true);

  const toggleMenu = () => {
    setMobile((open) => !open)
}

  const handleNavbar = () => {
    toggleMenu()
  }

  const pathname = usePathname();
  
  

  return (
      <nav className={ styles.navbar}>
        <div className={styles.logo_image}>
          <Link href="/landing">
            <Image 
            src={logo}
            alt="logo"
            width={160}
            className={styles.logo_img}
            />
          </Link>
        </div>
        <div className={mobile ? styles.Navbar_List : styles.Navbar_List_isopen}>
          
          <ul>
            <span
            onClick={toggleMenu}
            >
              <Image className={styles.exx} src={exit} alt="menu" width={30}/>
            </span>
          
            <li className={`${pathname === "/about" ? styles.active : ""}`} onClick={() => {handleNavbar("/about")  ;}}>
              <Link href="/">About</Link>
            </li>
            <li className={`${pathname === "/team" ? styles.active : ""}`} onClick={() => {handleNavbar("/team") ;}}>
              <Link href="/">Service</Link>
            </li>
            <li className={`${pathname === "/contact" ? styles.active : ""}`} onClick={() => {handleNavbar("/contact") ;}}>
              <Link href="/">Portfolio</Link>
            </li>
            <li className={`${pathname === "/contact" ? styles.active : ""}`} onClick={() => {handleNavbar("/contact") ;}}>
              <Link href="/">Contact</Link>
            </li>
            <li className={`${pathname === "/contact" ? styles.active : ""}`} onClick={() => {handleNavbar("/contact") ;}}>
              <Link href="/">
                <button>Get in touch</button>
              </Link>
            </li>
          </ul>
        </div>
        <div id={styles.Hamburger}> 
            <span
              className="Hamburger span"
              onClick={toggleMenu}
            >
              <div className="Hamburger">
                {mobile ? <Image src={menu} alt="menu" width={25}/> : <Image src={exit} alt="menu" width={20}/>}
              </div>
            </span>
        </div>
      </nav>
  );
};

export default NavBar;