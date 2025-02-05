tsParticles.load("particles-js", {
    particles: {
        number: {
            value: 30, // Número de partículas
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ff5733" // Color de las partículas
        },
        shape: {
            type: "circle", // Forma de las partículas
        },
        opacity: {
            value: 0.2, // Opacidad de las partículas
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 2, // Tamaño de las partículas
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        links: {
            enable: true, // Habilita los enlaces entre partículas
            distance: 150,
            color: "#ffffff", // Color de los enlaces
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1, // Velocidad de las partículas
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse" // Efecto al pasar el ratón
            },
            onclick: {
                enable: true,
                mode: "push" // Efecto al hacer clic
            }
        }
    }
});