(function flexible(window, document) {
  let docEl = document.documentElement;
  let dpr = window.devicePixelRatio || 1;

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + "px";
    } else {
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / width
  function setRemUnit() {
    let viewWidth = docEl.clientWidth;
    if (viewWidth >= 320 && viewWidth <= 750) {
      var rem = viewWidth / 7.5;
    } else if (viewWidth < 320) {
      rem = 320 / 7.5;
    } else {
      rem = 100;
    }
    docEl.style.fontSize = rem + "px";
  }

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", function(e) {
    if (e.persisted) {
      setRemUnit();
    }
  });
})(window, document);
