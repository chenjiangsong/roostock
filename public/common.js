function windowResize() {
  // var deviceWidth = document.documentElement.clientWidth
  var deviceWidth = window.innerWidth
  var fontSize
  console.log(deviceWidth)
  // if (deviceWidth > 640) {
  //   fontSize = 640 / 3.2
  // } else {
  //   fontSize = deviceWidth / 3.2
  // }
  document.getElementsByTagName('html')[0].style.fontSize = deviceWidth / 3.2 + 'px';
}

window.onresize = function() {
  windowResize()
}
windowResize()
