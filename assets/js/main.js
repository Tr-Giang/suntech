const app = {

    handleNav: function () {
        const navBtn = document.querySelector('.header__function__item__nav');
        const navBox = document.querySelector('.header__box');
        const navOther = document.querySelector('.header__nav__btn');
        const overlay = document.querySelector('.overlay');
        const overlayHeader = document.querySelector('.overlay__header');
        const navItems = document.querySelectorAll('header button:not(.header__function__item__nav), header a');
        const ElementsCloseNav = [overlay, overlayHeader, ...navItems];
        navBtn.onclick = function () {
            let sizeWidth = window.innerWidth;
            if (sizeWidth < 992) {
                navBox.classList.contains('open') ? navBox.classList.remove('open') : navBox.classList.add('open');
            } else {
                navOther.classList.contains('open') ? navOther.classList.remove('open') : navOther.classList.add('open');

            }

            overlay.classList.contains('open') ? overlay.classList.remove('open') : overlay.classList.add('open');
            overlayHeader.classList.contains('open') ? overlayHeader.classList.remove('open') : overlayHeader.classList.add('open');
        };

        ElementsCloseNav.forEach((ElementCloseNav) => {
            ElementCloseNav.onclick = function () {
                closeNav();
            };
        });

        function closeNav() {
            if (navBox.classList.contains('open')) {
                navBox.classList.remove('open');
            } else if (navOther.classList.contains('open')) {
                navOther.classList.remove('open');
            }
            overlay.classList.remove('open');
            overlayHeader.classList.remove('open');
        }

    },

    handleBtn: function () {
        const heartButtons = document.querySelectorAll('.product__icon__btn--heart');
        const cartButtons = document.querySelectorAll('.product__icon__btn--cart');
        const reloadButtons = document.querySelectorAll('.product__icon__btn--reload');

        heartButtons.forEach((heartButton) => {
            heartButton.onclick = () => {
                heartButton.classList.contains('liked') ? heartButton.classList.remove('liked') : heartButton.classList.add('liked');

            };
        });

        cartButtons.forEach((cartButton) => {
            cartButton.onclick = () => {
                let cartAddProduct = cartButton.querySelector('.product__added');

                if (cartButton.classList.contains('added')) {
                    cartButton.classList.remove('added');
                } else {
                    cartButton.classList.add('added');
                    cartAddProduct.classList.add('add__product');
                    setTimeout(() => {
                        cartAddProduct.classList.remove('add__product');
                    }, 850);
                }
            };
        });

        reloadButtons.forEach((reloadButton) => {

            reloadButton.onclick = () => {
                let reloadIcon = reloadButton.querySelector('i');
                console.log(reloadIcon);
                reloadIcon.classList.add('reloaded');
                setTimeout(() => {
                    reloadIcon.classList.remove('reloaded');
                }, 300);
            };
        });
    },

    selectLanguages: function () {
        const selectElement = document.querySelector('#languages');
        
    },


    start: function () {
        this.handleNav();
        this.handleBtn();
        this.selectLanguages();
    }
};

app.start();
