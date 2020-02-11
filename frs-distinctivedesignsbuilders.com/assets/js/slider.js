function fileNames(page, sliderNum) {
  var imgList = [];

  if(page == 'wholehouse'){
    if(sliderNum == 0){
      imgList = [
        "attach51213_20190820_183236.jpg",
        "attach51214_20190820_183236.jpg",
        "attach51215_20190820_183236.jpg",
        "attach51216_20190820_183237.jpg",
        "attach51218_20190820_183237.jpg",
        "attach51219_20190820_183240.jpg",
        "attach51220_20190820_183240.jpg",
        "attach51221_20190820_183240.jpg",
        "attach51222_20190820_183439.jpg",
        "attach51223_20190820_183439.jpg",
        "attach51224_20190820_183439.jpg",
        "attach51225_20190820_183441.jpg",
        "attach51226_20190820_183441.jpg",
        "attach51227_20190820_183441.jpg",
        "attach51228_20190820_183602.jpg",
        "attach51229_20190820_183602.jpg",
        "attach51230_20190820_183602.jpg",
        "attach51231_20190820_183605.jpg",
        "attach51232_20190820_183605.jpg",
        "attach51233_20190820_183609.jpg",
        "attach51234_20190820_183609.jpg",
        "attach51235_20190820_183609.jpg",
        "attach51236_20190820_183616.jpg",
        "attach51237_20190820_183616.jpg",
        "attach51238_20190820_183616.jpg"
      ];
    }
    if(sliderNum == 1){
      // pass
    }
    if(sliderNum == 2){
      // pass
    }
  } else if(page == 'baths'){
    imgList = [];
  } else if(page == 'kitchens') {
    imgList = [];
  }

  return imgList;
}

function directoryPath(page, sliderNum) {
  var rootPath = "./assets/images/feature/";
  var numberedPage = '';

  if(page == 'wholehouse'){
    numberedPage = page + (sliderNum+1);
  } else {
    numberedPage = page;
  }

  return rootPath + numberedPage + "/";
}

var defaultSlider = 0;
var sliderNumber = defaultSlider;

// array of the sample images
var imgArray = fileNames(thisPage, sliderNumber).map(function(imgFileName){
  return "" + directoryPath(thisPage, sliderNumber) + imgFileName;
});
// main image
var img = document.getElementById("imgG");

// image default display
img.src = imgArray[0];
var i = 0;

// main function
function changeImage(e) {
    if (e == 'prev') {
      i--;
    } else if (e == 'next') {
      i++;
      i = i % imgArray.length;
    }
    if (i < 0) {
      i = imgArray.length - 1;
    }
  img.src = imgArray[i];
}
