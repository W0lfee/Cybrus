var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


document.getElementById('count1').animate([
  { '--num': 0 },
  { '--num': 10000 },
  { '--num': 120}
], {
  duration: 2000,
    fill: 'forwards',
    iterations: 1
});

document.getElementById('count2').animate([
  { '--num': 0 },
  { '--num': 100 },
  { '--num': 110 }
], {
  duration: 2000,
    fill: 'forwards',
    iterations: 1
})





