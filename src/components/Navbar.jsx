import React from 'react'
import logo from "../assets/erick-logo.jpg"
import { useState, useEffect } from "react";
function Navbar() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 50;
        if (isScrolled) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [])

  return (
    <div className={scrolled ? "scrolled" : ""}>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#home">
          <img
            src={logo}
            alt="Eric Kaloki"
            width="130"
            class="d-inline-block align-text-top"
            onClick={() => setActiveLink("home")}
          />
        </a>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a
              class={activeLink === "home" ? "nav-link active" : "nav-link"}
              onClick={() => setActiveLink("home")}
              aria-current="page"
              href="#"
            >
              Home
            </a>
          </li>
          <li class="nav-item">
            <a
              class={activeLink === "about" ? "nav-link active" : "nav-link"}
              onClick={() => setActiveLink("about")}
              aria-current="page"
              href="#about"
            >
              About
            </a>
          </li>
          <li class="nav-item">
            <a
              class={activeLink === "skills" ? "nav-link active" : "nav-link"}
              href="#skills"
              onClick={() => setActiveLink("skills")}
            >
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a
              class={activeLink === "projects" ? "nav-link active" : "nav-link"}
              href="#projects"
              onClick={() => setActiveLink("projects")}
            >
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a
              class={activeLink === "contact" ? "nav-link active" : "nav-link"}
              href="#contact"
              onClick={() => setActiveLink("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar