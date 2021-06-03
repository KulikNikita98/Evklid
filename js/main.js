const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 2000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

});

document.addEventListener('DOMContentLoaded', function () {

  $(function () {
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: "content"
    });

  });



  const btn = document.querySelector('.btn_search');
  const btnCancel = document.querySelector('.btn_cancel_hidden');
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__list');
  const input = document.querySelector('.header__search-input_hidden');
  const body = document.querySelector('body');
  const checkbox = document.querySelector('.svg__acception');
  const checkboxMark = document.querySelector('.svg__acception-path');

  checkbox.ariaChecked = true;

  checkbox.addEventListener('click', ()=> {
      if ( !(checkboxMark.style.display === 'none')) {
      checkboxMark.style.display = 'none';
      checkbox.ariaChecked = false;
    } else {
      checkboxMark.style.display = '';
      checkbox.ariaChecked = true;
    }
  })

  checkbox.addEventListener('keydown', ()=> {
    if ( !(checkboxMark.style.display === 'none')) {
    checkboxMark.style.display = 'none';
    checkbox.ariaChecked = false;
  } else {
    checkboxMark.style.display = '';
    checkbox.ariaChecked = true;
  }
})



  burger.addEventListener('click', ()=> {
    if (!(body.style.overflow === 'hidden')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'unset';
    }
  })


  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('header__list_show');
  })
  btn.addEventListener('click', () => {
    btn.classList.add('btn_search_active');
    menu.classList.add('header__list_hidden');
    input.classList.add('header__search-input');
    btnCancel.classList.add('btn_cancel');
    btnCancel.setAttribute('tabindex', '0');
  })
  btnCancel.addEventListener('click', () => {
    btn.classList.remove('btn_search_active');
    menu.classList.remove('header__list_hidden');
    input.classList.remove('header__search-input');
    btnCancel.classList.remove('btn_cancel');
    btnCancel.removeAttribute('tabindex');
  });

  let wrapper = document.querySelector('.section-we-work__wrapper');
  let currentClass;
  const btnSteps = document.querySelectorAll('.btn-steps');
  btnSteps.forEach(function (el) {
    el.addEventListener('click', function (e) {
      document.querySelectorAll('.btn-steps').forEach(btn => {
        btn.classList.remove('btn-steps_active');
      });
      const path = e.currentTarget.dataset.path;

      (() => {
        wrapper.classList.remove(currentClass);
        wrapper.classList.add(`section-we-work__wrapper_${path}`);
        currentClass = wrapper.getAttribute('class').split(' ')[1];
      })();
      const paragraph = document.querySelectorAll('.tab__content');
      paragraph.forEach(p => {
        p.classList.remove('tab__content_active');
      });
      document.querySelector(`[data-target=${path}]`).classList.add('tab__content_active');
      this.classList.add('btn-steps_active');

    });

  });


});



