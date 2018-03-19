$(document).ready(function() {
  var str = prompt("Write a sentence:");
  console.log(str);
  var first = /^./;
  var last = /.$/;
  var newstr = str.replace(first, String.call.bind(str.toUpperCase)).replace(last, String.call.bind(str.toUpperCase));
  console.log(newstr);
});
