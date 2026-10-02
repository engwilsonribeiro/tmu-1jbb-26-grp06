/* =========================================================
   4M MARKETING
   INTERAÇÕES
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.getElementById("loader");
    const loaderProgress = document.getElementById("loaderProgress");

    let progress = 0;

    const progressInterval = setInterval(() => {

        progress += Math.random() * 12;

        if (progress >= 100) {

            progress = 100;

            clearInterval(progressInterval);

        }

        if (loaderProgress) {

            loaderProgress.style.width = `${progress}%`;

        }

    }, 80);


    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {

                loader.classList.add("loaded");

            }

        }, 500);

    });


    /* =====================================================
       HEADER
    ===================================================== */

    const header = document.getElementById("header");

    const updateHeader = () => {

        if (!header) return;

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    };


    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileNav =
        document.getElementById("mobileNav");

    const mobileLinks =
        mobileNav
            ? mobileNav.querySelectorAll("a")
            : [];


    const closeMenu = () => {

        if (!menuToggle || !mobileNav) return;

        menuToggle.classList.remove("active");

        mobileNav.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove("menu-open");

    };


    if (menuToggle && mobileNav) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                mobileNav.classList.toggle("open");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        });


        mobileLinks.forEach(link => {

            link.addEventListener(
                "click",
                closeMenu
            );

        });

    }


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    const scrollProgress =
        document.getElementById("scrollProgress");


    const updateScrollProgress = () => {

        if (!scrollProgress) return;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        if (documentHeight <= 0) return;

        const percentage =
            (window.scrollY / documentHeight) * 100;

        scrollProgress.style.width =
            `${percentage}%`;

    };


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );


    updateScrollProgress();


    /* =====================================================
       REVEAL ON SCROLL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -50px 0px"
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       IMAGENS
       Se a imagem existir:
       mostra imagem.

       Se não existir:
       mantém placeholder.
    ===================================================== */

    const imageContainers =
        document.querySelectorAll(
            ".image-slot, .artist-image, .project-image"
        );


    imageContainers.forEach(container => {

        const image =
            container.querySelector("img");


        if (!image) return;


        const markImage = () => {

            if (
                image.complete &&
                image.naturalWidth > 0
            ) {

                container.classList.add(
                    "has-image"
                );

            } else {

                container.classList.remove(
                    "has-image"
                );

            }

        };


        image.addEventListener(
            "load",
            markImage
        );


        image.addEventListener(
            "error",
            () => {

                container.classList.remove(
                    "has-image"
                );

            }
        );


        markImage();

    });


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backToTop =
        document.getElementById("backToTop");


    const updateBackToTop = () => {

        if (!backToTop) return;

        if (window.scrollY > 600) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    };


    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );


    updateBackToTop();


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       NAVEGAÇÃO ATIVA
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".desktop-nav .nav-link"
        );


    if (
        sections.length &&
        navLinks.length &&
        "IntersectionObserver" in window
    ) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            const currentId =
                                entry.target.id;


                            navLinks.forEach(link => {

                                link.classList.toggle(
                                    "active",
                                    link.getAttribute(
                                        "href"
                                    ) === `#${currentId}`
                                );

                            });

                        }

                    });

                },
                {
                    rootMargin:
                        "-35% 0px -55% 0px"
                }
            );


        sections.forEach(section => {

            sectionObserver.observe(
                section
            );

        });

    }


    /* =====================================================
       ANO AUTOMÁTICO
    ===================================================== */

    const currentYear =
        document.getElementById(
            "currentYear"
        );


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       FECHAR MENU AO REDIMENSIONAR
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 760
            ) {

                closeMenu();

            }

        },
        { passive: true }
    );


});