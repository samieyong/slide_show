const slideShow = document.querySelector('.slide-show');

setInterval(() => {
   let firstChild = slideShow.firstElementChild;
   firstChild.classList.add('faded-out');
   slideShow.children[3].classList.add('light');
   slideShow.children[2].classList.remove('light');
   setTimeout(() => {
      slideShow.removeChild(firstChild);
      slideShow.appendChild(firstChild);
      setTimeout(() => {
         firstChild.classList.remove('faded-out');
      }, 500);
   }, 500);
}, 3000);
