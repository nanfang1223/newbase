
onload = function () {
  setHTML()
  onresize = function () {
    setHTML()
  }

  function setHTML () {
    var baseVal = 100
    var pageWidth = 750
    var screenWidth = document.querySelector('html').offsetWidth
    var fontsize = screenWidth * baseVal / pageWidth
    document.querySelector('html').style.fontSize = fontsize + 'px'
  }
}