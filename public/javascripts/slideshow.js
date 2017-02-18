var i = 0; var path = new Array();

// LIST OF IMAGES
path[0] = "public/images/sneezes/sneeze35.JPG";
path[1] = "public/images/sneezes/sneeze01.JPG";
path[2] = "public/images/sneezes/sneeze02.JPG";
path[3] = "public/images/sneezes/sneeze03.JPG";
path[4] = "public/images/sneezes/sneeze04.JPG";
path[5] = "public/images/sneezes/sneeze05.JPG";
path[6] = "public/images/sneezes/sneeze06.JPG";
path[7] = "public/images/sneezes/sneeze07.JPG";
path[8] = "public/images/sneezes/sneeze08.JPG";
path[9] = "public/images/sneezes/sneeze09.JPG";
path[10] = "public/images/sneezes/sneeze10.JPG";
path[11] = "public/images/sneezes/sneeze11.JPG";
path[12] = "public/images/sneezes/sneeze12.JPG";
path[13] = "public/images/sneezes/sneeze13.JPG";
path[14] = "public/images/sneezes/sneeze14.JPG";
path[15] = "public/images/sneezes/sneeze15.JPG";
path[16] = "public/images/sneezes/sneeze16.JPG";
path[17] = "public/images/sneezes/sneeze17.JPG";
path[18] = "public/images/sneezes/sneeze18.JPG";
path[19] = "public/images/sneezes/sneeze19.JPG";
path[20] = "public/images/sneezes/sneeze20.JPG";
path[21] = "public/images/sneezes/sneeze21.JPG";
path[22] = "public/images/sneezes/sneeze22.JPG";
path[23] = "public/images/sneezes/sneeze23.JPG";
path[24] = "public/images/sneezes/sneeze24.JPG";
path[25] = "public/images/sneezes/sneeze25.JPG";
path[26] = "public/images/sneezes/sneeze26.JPG";
path[27] = "public/images/sneezes/sneeze27.JPG";
path[28] = "public/images/sneezes/sneeze28.JPG";
path[29] = "public/images/sneezes/sneeze29.JPG";
path[30] = "public/images/sneezes/sneeze30.JPG";
path[31] = "public/images/sneezes/sneeze31.JPG";
path[32] = "public/images/sneezes/sneeze32.JPG";
path[33] = "public/images/sneezes/sneeze33.JPG";
path[34] = "public/images/sneezes/sneeze34.JPG";

function swapImage() {
  document.slide.src = path[i];
  if (i < path.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("swapImage()",500);
}

window.onload = swapImage;
