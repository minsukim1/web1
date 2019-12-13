var Links = {
  setColor:function(color){
    // var tar = document.querySelectorAll('a');
    // var i = 0;
    // while (i < tar.length){
    //   tar[i].style.color = color;
    //   i++;
    // }
    $('a').css('color',color);
  }
}
var body = {
  setColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  SetBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}
function nightDayHandler(home) {
  var target = document.querySelector('body');
  if(home.value ==='night') {
    body.SetBackgroundColor('black');
    body.setColor('white');
    home.value = 'day';
    Links.setColor('green');
  } else {
    body.SetBackgroundColor('white');
    body.setColor('black');
    home.value = 'night';
    Links.setColor('black');
  }
}
