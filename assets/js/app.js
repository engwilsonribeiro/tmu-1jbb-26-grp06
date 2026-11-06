/* =========================================================
   4M MARKETING
   INTERAÇÕES
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =====================================================
           LOADER
        ===================================================== */

        const loader =
            document.getElementById(
                "loader"
            );


        const loaderProgress =
            document.getElementById(
                "loaderProgress"
            );


        let progress = 0;


        const progressInterval =
            setInterval(
                () => {

                    progress +=
                        Math.random() * 12;


                    if (
                        progress >= 100
                    ) {

                        progress = 100;

                        clearInterval(
                            progressInterval
                        );

                    }


                    if (
                        loaderProgress
                    ) {

                        loaderProgress.style.width =
                            `${progress}%`;

                    }

                },
                80
            );



        window.addEventListener(
            "load",
            () => {

                setTimeout(
                    () => {

                        if (
                            loader
                        ) {

                            loader.classList.add(
                                "loaded"
                            );

                        }

                    },
                    500
                );

            }
        );



        /* =====================================================
           HEADER
        ===================================================== */

        const header =
            document.getElementById(
                "header"
            );


        const updateHeader =
            () => {

                if (
                    !header
                ) {

                    return;

                }


                if (
                    window.scrollY > 30
                ) {

                    header.classList.add(
                        "scrolled"
                    );

                } else {

                    header.classList.remove(
                        "scrolled"
                    );

                }

            };


        updateHeader();


        window.addEventListener(
            "scroll",
            updateHeader,
            {
                passive: true
            }
        );



        /* =====================================================
           MENU MOBILE
        ===================================================== */

        const menuToggle =
            document.getElementById(
                "menuToggle"
            );


        const mobileNav =
            document.getElementById(
                "mobileNav"
            );


        const mobileLinks =
            mobileNav
                ? mobileNav.querySelectorAll(
                    "a"
                )
                : [];


        const closeMenu =
            () => {

                if (
                    !menuToggle ||
                    !mobileNav
                ) {

                    return;

                }


                menuToggle.classList.remove(
                    "active"
                );


                mobileNav.classList.remove(
                    "open"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                document.body.classList.remove(
                    "menu-open"
                );

            };



        if (
            menuToggle &&
            mobileNav
        ) {


            menuToggle.addEventListener(
                "click",
                () => {

                    const isOpen =
                        mobileNav.classList.toggle(
                            "open"
                        );


                    menuToggle.classList.toggle(
                        "active",
                        isOpen
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        String(
                            isOpen
                        )
                    );


                    document.body.classList.toggle(
                        "menu-open",
                        isOpen
                    );

                }
            );



            mobileLinks.forEach(
                link => {

                    link.addEventListener(
                        "click",
                        closeMenu
                    );

                }
            );

        }



        /* =====================================================
           SCROLL PROGRESS
        ===================================================== */

        const scrollProgress =
            document.getElementById(
                "scrollProgress"
            );


        const updateScrollProgress =
            () => {

                if (
                    !scrollProgress
                ) {

                    return;

                }


                const documentHeight =
                    document.documentElement
                        .scrollHeight
                    -
                    window.innerHeight;


                if (
                    documentHeight <= 0
                ) {

                    return;

                }


                const percentage =
                    (
                        window.scrollY
                        /
                        documentHeight
                    ) * 100;


                scrollProgress.style.width =
                    `${percentage}%`;

            };


        updateScrollProgress();


        window.addEventListener(
            "scroll",
            updateScrollProgress,
            {
                passive: true
            }
        );



        /* =====================================================
           REVEAL ON SCROLL
        ===================================================== */

        const revealElements =
            document.querySelectorAll(
                ".reveal"
            );


        if (
            "IntersectionObserver"
            in window
        ) {


            const revealObserver =
                new IntersectionObserver(
                    (
                        entries,
                        observer
                    ) => {

                        entries.forEach(
                            entry => {

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

                            }
                        );

                    },
                    {
                        threshold: .12,

                        rootMargin:
                            "0px 0px -50px 0px"
                    }
                );


            revealElements.forEach(
                element => {

                    revealObserver.observe(
                        element
                    );

                }
            );


        } else {


            revealElements.forEach(
                element => {

                    element.classList.add(
                        "visible"
                    );

                }
            );

        }



        /* =====================================================
           IMAGENS
        ===================================================== */

        const imageContainers =
            document.querySelectorAll(
                ".image-slot, .artist-image, .project-image"
            );


        imageContainers.forEach(
            container => {


                const image =
                    container.querySelector(
                        "img"
                    );


                if (
                    !image
                ) {

                    return;

                }


                const markImage =
                    () => {

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

            }
        );



        /* =====================================================
           BACK TO TOP
        ===================================================== */

        const backToTop =
            document.getElementById(
                "backToTop"
            );


        const updateBackToTop =
            () => {

                if (
                    !backToTop
                ) {

                    return;

                }


                if (
                    window.scrollY > 600
                ) {

                    backToTop.classList.add(
                        "visible"
                    );

                } else {

                    backToTop.classList.remove(
                        "visible"
                    );

                }

            };


        updateBackToTop();


        window.addEventListener(
            "scroll",
            updateBackToTop,
            {
                passive: true
            }
        );


        if (
            backToTop
        ) {

            backToTop.addEventListener(
                "click",
                () => {

                    window.scrollTo({

                        top: 0,

                        behavior:
                            "smooth"

                    });

                }
            );

        }



        /* =====================================================
           NAVEGAÇÃO
        ===================================================== */

        const internalLinks =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        const navigationLinks =
            document.querySelectorAll(
                ".desktop-nav .nav-link, .mobile-nav a"
            );


        const sections =
            document.querySelectorAll(
                "main section[id]"
            );



        /* -----------------------------------------------------
           PEGAR SEÇÃO PELO HASH
        ----------------------------------------------------- */

        const getSection =
            hash => {

                if (
                    !hash ||
                    hash === "#"
                ) {

                    return null;

                }


                const id =
                    decodeURIComponent(
                        hash.substring(
                            1
                        )
                    );


                return document.getElementById(
                    id
                );

            };



        /* -----------------------------------------------------
           CALCULAR ALTURA DO HEADER
        ----------------------------------------------------- */

        const getHeaderOffset =
            () => {

                const height =
                    header
                        ? header.offsetHeight
                        : 0;


                return (
                    height +
                    20
                );

            };



        /* -----------------------------------------------------
           ATIVAR LINK
        ----------------------------------------------------- */

        const setActiveLink =
            hash => {

                navigationLinks.forEach(
                    link => {

                        const linkHash =
                            link.getAttribute(
                                "href"
                            );


                        const active =
                            linkHash === hash;


                        link.classList.toggle(
                            "active",
                            active
                        );


                        if (
                            active
                        ) {

                            link.setAttribute(
                                "aria-current",
                                "page"
                            );

                        } else {

                            link.removeAttribute(
                                "aria-current"
                            );

                        }

                    }
                );

            };



        /* -----------------------------------------------------
           IR PARA A SEÇÃO
        ----------------------------------------------------- */

        const goToSection =
            (
                hash,
                updateUrl = true
            ) => {


                const target =
                    getSection(
                        hash
                    );


                if (
                    !target
                ) {

                    return;

                }


                const targetTop =
                    target.getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    getHeaderOffset();


                window.scrollTo({

                    top:
                        Math.max(
                            0,
                            targetTop
                        ),

                    behavior:
                        "smooth"

                });


                setActiveLink(
                    hash
                );


                if (
                    updateUrl &&
                    window.location.hash !== hash
                ) {

                    history.pushState(
                        null,
                        "",
                        hash
                    );

                }

            };



        /* -----------------------------------------------------
           CLICKS NOS LINKS
        ----------------------------------------------------- */

        internalLinks.forEach(
            link => {


                link.addEventListener(
                    "click",
                    event => {


                        const hash =
                            link.getAttribute(
                                "href"
                            );


                        const target =
                            getSection(
                                hash
                            );


                        if (
                            !target
                        ) {

                            return;

                        }


                        event.preventDefault();


                        if (
                            link.closest(
                                "#mobileNav"
                            )
                        ) {

                            closeMenu();

                        }


                        goToSection(
                            hash,
                            true
                        );

                    }
                );

            }
        );



        /* -----------------------------------------------------
           DETECTAR SEÇÃO ATUAL
        ----------------------------------------------------- */

        const updateCurrentSection =
            () => {


                if (
                    !sections.length
                ) {

                    return;

                }


                const referencePoint =
                    getHeaderOffset()
                    +
                    40;


                let currentHash =
                    "#inicio";


                sections.forEach(
                    section => {


                        const top =
                            section
                                .getBoundingClientRect()
                                .top;


                        if (
                            top <=
                            referencePoint
                        ) {

                            currentHash =
                                section
                                    .dataset
                                    .navTarget
                                ||
                                `#${section.id}`;

                        }

                    }
                );


                setActiveLink(
                    currentHash
                );

            };



        /* -----------------------------------------------------
           OTIMIZAÇÃO DO SCROLL
        ----------------------------------------------------- */

        let navigationFrame =
            null;


        const handleNavigationScroll =
            () => {


                if (
                    navigationFrame !== null
                ) {

                    return;

                }


                navigationFrame =
                    requestAnimationFrame(
                        () => {


                            navigationFrame =
                                null;


                            updateCurrentSection();

                        }
                    );

            };



        window.addEventListener(
            "scroll",
            handleNavigationScroll,
            {
                passive: true
            }
        );


        window.addEventListener(
            "resize",
            updateCurrentSection,
            {
                passive: true
            }
        );



        /* -----------------------------------------------------
           VOLTAR / AVANÇAR
        ----------------------------------------------------- */

        window.addEventListener(
            "popstate",
            () => {


                const hash =
                    window.location.hash
                    ||
                    "#inicio";


                const target =
                    getSection(
                        hash
                    );


                if (
                    target
                ) {

                    goToSection(
                        hash,
                        false
                    );

                }

            }
        );



        /* -----------------------------------------------------
           ABRIR URL COM HASH
        ----------------------------------------------------- */

        const initialHash =
            window.location.hash;


        if (
            initialHash
        ) {

            setTimeout(
                () => {

                    goToSection(
                        initialHash,
                        false
                    );

                },
                100
            );


        } else {

            setActiveLink(
                "#inicio"
            );

        }



        updateCurrentSection();



        /* =====================================================
           ANO AUTOMÁTICO
        ===================================================== */

        const currentYear =
            document.getElementById(
                "currentYear"
            );


        if (
            currentYear
        ) {

            currentYear.textContent =
                new Date()
                    .getFullYear();

        }



        /* =====================================================
           FECHAR MENU NO DESKTOP
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
            {
                passive: true
            }
        );

    }
);