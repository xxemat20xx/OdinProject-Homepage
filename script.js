 const scrollable = document.getElementById('scrollable');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    scrollLeftBtn.addEventListener('click', () => {
      scrollable.scrollBy({
        left: -150,
        behavior: 'smooth'
      });
    });

    scrollRightBtn.addEventListener('click', () => {
      scrollable.scrollBy({
        left: 150,
        behavior: 'smooth'
      });
    });