width(60, document.getElementsByTagName("width")[0])
width(50, document.getElementsByTagName("width")[1])
width(60, document.getElementsByTagName("width")[2])
width(50, document.getElementsByTagName("width")[3])
width(60, document.getElementsByTagName("width")[4])
width(30, document.getElementsByTagName("width")[5])
width(40, document.getElementsByTagName("width")[6])
width(70, document.getElementsByTagName("width")[7])
width(60, document.getElementsByTagName("width")[8])
width(40, document.getElementsByTagName("width")[9])
width(50, document.getElementsByTagName("width")[10])
width(90, document.getElementsByTagName("width")[11])
width(40, document.getElementsByTagName("width")[12])

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