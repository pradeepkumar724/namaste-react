function a() {
  var x = 1000;
  function v() {
    var w = 7;
    function y() {
      console.log(w, x);
    }
    y()
  }
  v()
}
a();
// console.log()
