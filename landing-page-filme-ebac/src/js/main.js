document.addEventListener('DOMContentLoaded', function () {
    // Animação de scroll suave para links internos
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset para dar um espaço
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação de elementos ao fazer scroll
    const animateOnScrollElements = document.querySelectorAll('.attractions__item, .movies__card, .watch-options__item, .devices__item');

    const animateOnScroll = function () {
        animateOnScrollElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.classList.add('animate-fade-in');
            }
        });
    };

    // Adicionar classe CSS para animação
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      .animate-fade-in {
        animation: fadeIn 0.6s ease-in forwards;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .attractions__item, .movies__card, .watch-options__item, .devices__item {
        opacity: 0;
      }
    `;
    document.head.appendChild(styleSheet);

    // Executar animação no scroll
    window.addEventListener('scroll', animateOnScroll);

    // Executar animação ao carregar a página
    animateOnScroll();

    // Funcionalidade do FAQ (accordion)
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');

        question.addEventListener('click', function () {
            // Fechar todos os outros itens FAQ
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Alternar a classe ativa para este item
            item.classList.toggle('active');
        });
    });

    // Efeito de parallax no Hero
    const heroSection = document.querySelector('.hero');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.pageYOffset;
        const translateY = scrollPosition * 0.4;

        if (heroSection) {
            heroSection.style.backgroundPosition = `center ${translateY}px`;
        }
    });

    // Efeito hover nos cards de filmes
    const movieCards = document.querySelectorAll('.movies__card');

    movieCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            card.querySelector('.movies__image').style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', function () {
            card.querySelector('.movies__image').style.transform = 'scale(1)';
        });
    });

    // Efeito de rotação nos ícones ao passar o mouse
    const iconWrappers = document.querySelectorAll('.attractions__icon-wrapper, .watch-options__icon-wrapper, .devices__icon-wrapper');

    iconWrappers.forEach(wrapper => {
        wrapper.addEventListener('mouseenter', function () {
            wrapper.style.transform = 'rotate(5deg)';
        });

        wrapper.addEventListener('mouseleave', function () {
            wrapper.style.transform = 'rotate(0deg)';
        });
    });
})