const values = document.getElementsByClassName("width");

for (let i = 0; i < values.length; i++) {
  width(values[i].getAttribute('data-percent'), values[i]);
}

function width(size, elem) {
  var width = 0;
  var id = setInterval(frame, 10);

  function frame() {
    if (width == size) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}