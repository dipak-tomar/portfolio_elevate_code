import logo from "../../assets/logo.svg";
import "./Nav.scss";
import { useEffect, useRef, useState } from "react";

import { useLocation } from "react-router-dom";

import gsap from "gsap";
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoDiscord,
  IoLogoLinkedin,
  IoLogoSlack,
  IoLogoSkype,
} from "react-icons/io5";
import { Link } from "react-scroll";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const [active, setActive] = useState(false);
  const [activeLink, setActiveLink] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const shapeRef1 = useRef();
  const shapeRef2 = useRef();
  const shapeRef3 = useRef();
  const shapeRef4 = useRef();

  const navTl = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 968px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    navTl.current = gsap.timeline({
      paused: true,
    });

    navTl.current.to(".nav-list", {
      display: "flex",
    });

    navTl.current.to(shapeRef1.current, {
      width: "25vw",
      opacity: 1,
    });
    navTl.current.to(
      shapeRef2.current,
      {
        width: "25vw",
        opacity: 1,
      },
      "<0%"
    );
    navTl.current.to(
      shapeRef3.current,
      {
        width: "25vw",
        opacity: 1,
      },
      "<0%"
    );
    navTl.current.to(
      shapeRef4.current,
      {
        width: "25vw",
        opacity: 1,
      },
      "<0%"
    );

    navTl.current.to(
      "#link-1",
      {
        x: 0,
        opacity: 1,
      },
      "<100%"
    );
    navTl.current.to(
      "#link-2",
      {
        x: 0,
        opacity: 1,
      },
      "<25%"
    );
    navTl.current.to(
      "#link-3",
      {
        x: 0,
        opacity: 1,
      },
      "<25%"
    );
    navTl.current.to(
      "#link-4",
      {
        x: 0,
        opacity: 1,
      },
      "<25%"
    );
  }, []);

  const handleOpen = () => {
    if (open) {
      navTl.current.reverse();
      setOpen(false);
    } else {
      navTl.current.play();
      setOpen(true);
    }
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("project")) {
      setActiveLink(true);
    } else {
      setActiveLink(false);
    }
  }, [location]);

  return (
    <>
      {activeLink ? (
        <div className="nav">
          <div className="nav-icons">
            <a
              href="https://github.com/dipak-tomar"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="nav-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/dipak-kumar-tomar-50a568239/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoLinkedin className="nav-icon" />
            </a>
            <a
              href="https://join.skype.com/invite/u1bIfZSvjc20"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoSkype className="nav-icon" />
            </a>
          </div>
        </div>
      ) : (
        <>
          {isMobile ? (
            <>
              <div className="nav">
                <div className="nav-icons">
                  <a
                    href="https://github.com/dipak-tomar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLogoGithub className="nav-icon" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dipak-kumar-tomar-50a568239/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLogoLinkedin className="nav-icon" />
                  </a>
                  <a
                    href="https://join.skype.com/invite/u1bIfZSvjc20"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLogoSkype className="nav-icon" />
                  </a>
                </div>

                <p className="nav-btn">
                  {open ? (
                    <span
                      onClick={() => {
                        navTl.current.reverse();
                        setOpen((_open) => false);
                      }}
                    >
                      close
                    </span>
                  ) : (
                    <span
                      className="nav__btn"
                      onClick={() => {
                        navTl.current.play();
                        setOpen((_open) => true);
                      }}
                    >
                      menu
                    </span>
                  )}
                </p>

                <div ref={shapeRef1} className="nav__shape nav__shape-1"></div>
                <div ref={shapeRef2} className="nav__shape nav__shape-2"></div>
                <div ref={shapeRef3} className="nav__shape nav__shape-3"></div>
                <div ref={shapeRef4} className="nav__shape nav__shape-4"></div>
              </div>
              <ul className="nav-list">
                <li id="link-1">
                  <a className="nav-link" href="#home" onClick={handleOpen}>
                    Home
                  </a>
                </li>
                <li id="link-2">
                  <a className="nav-link" href="#about" onClick={handleOpen}>
                    About
                  </a>{" "}
                </li>
                <li id="link-3">
                  <a className="nav-link" href="#projects" onClick={handleOpen}>
                    Portfolio
                  </a>{" "}
                </li>
                <li id="link-4">
                  <a className="nav-link" href="#contact" onClick={handleOpen}>
                    Contact
                  </a>{" "}
                </li>
              </ul>
            </>
          ) : (
            <div className="nav">
              {/* R.T */}
              <div className="nav-icons">
                <a
                  href="https://github.com/dipak-tomar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoGithub className="nav-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dipak-kumar-tomar-50a568239/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoLinkedin className="nav-icon" />
                </a>
                <a
                  href="https://join.skype.com/invite/u1bIfZSvjc20"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoSkype className="nav-icon" />
                </a>
              </div>

              <ul className="nav-main-list">
                <li>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={active ? "nav-btn active" : "nav-btn"}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-btn"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-btn"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-btn"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Nav;
