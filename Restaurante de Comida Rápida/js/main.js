  /* ================= SLADER ================= */

  const myCarousel = document.querySelector('#carouselExampleDark');
  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000, // cambia cada 5 segundos
    ride: 'carousel',
    pause: false,   // no se detiene al pasar el mouse
    wrap: true      // vuelve al primer slide al final
  });