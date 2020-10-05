console.log('main.js');

// // Preloader
// $.holdReady( true );

// $('body').imagesLoaded({ background: ".background-holder" }, function(){
//     $('#preloader').removeClass("loading");
//     $.holdReady( false );
//     setTimeout(function() {
//         $('#preloader').remove();
//     }, 800);
// });

// Zanimation
$(window).on('load', function(){
    $('*[data-inertia]').each(function(){
        $(this).inertia();
    });
});

// Two possibilities exist: either we are alone in the Universe or we are not.
// Both are equally terrifying.
// And this is a strange fix for menu hover on iPad
$(document).ready(function() {
   $('body').bind('touchstart', function() {});
});


function parentId() {
  return "carousel-parent";
}

function generateImgsObj(imgArray, imgPath, parentDiv){
  var imgsObjs = {
    "count": imgArray.length,
    "parentId": parentDiv
  };

  for(var i=0, max=imgArray.length; i<max; ++i){
    //var itemName = "" + i + "";
    var imgIdName = "img" + i;
    var divIdName = "div" + i;
    var thisObj = {
      "img": imgIdName,
      "div": divIdName,
      "url": imgPath + imgArray[i]
    };
    imgsObjs[i] = thisObj;
  }

  return imgsObjs;
}


function appendImgDiv(obj){
  //console.log(obj);

  //incomplete
  function appendDivOnly(divId, position){
    console.log(divId)
    //var divHtmlStr = "<div id=\"" + idName + "\" class=\"carousel-item\"></div>";
    //newDiv.innerHTML = divHtmlStr;
    var newDiv = document.createElement("DIV");
    newDiv.setAttribute("id", divId);
    newDiv.classList.add("carousel-item");
    if(position == "0") {
      newDiv.classList.add("active");
    }
    document.getElementById(obj.parentId).appendChild(newDiv);
  }

  //incomplete
  function appendImgOnly(imgId, divId, imgSrc){
    //var imgStr = "<img class=\"d-block w-100\" src=\"...\" alt=\"Second slide\">";
    var newImg = document.createElement("IMG");
    newImg.setAttribute("id", imgId);
    newImg.setAttribute("src", imgSrc);
    newImg.classList.add("d-block");
    newImg.classList.add("w-100");
    newImg.classList.add("imgSize");
    newImg.classList.add("mx-auto");
    newImg.classList.add("rounded");
    document.getElementById(divId).appendChild(newImg);
  }

  function assignActive(idTag) {
    var element = document.getElementById(idTag);
    element.classList.add("active");
  }

  for(var d=0, max=obj.count; d<max; ++d){
    //console.log(obj[d].div);
    //console.log(obj[d].img);
    appendDivOnly(obj[d].div, d);
    appendImgOnly(obj[d].img, obj[d].div, obj[d].url);
  }

}

function initializeCarousel(){
  console.log("carousel initialized");
  $('.carousel').carousel({
    interval: 4000,
    pause: "hover",
    wrap: false
  });
}

// var imgsObj = generateImgsObj(fileNames(), directoryPath(), parentId());
// appendImgDiv(imgsObj);
//
// var lastImgIndex = imgsObj.count-1;
// //console.log(`img${lastImgIndex}`);
//
// document.getElementById(`img${lastImgIndex}`).onload = initializeCarousel();
