//back-end
var akan = function(w, x, y, z) {
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var y = new Date(w, --x, y);
  if (z === "Female") {
      return y && femaleNames[y.getDay()];
  } else {
      return y && maleNames[y.getDay()];
  }
}

// User interface (or front-end) logic:
$(document).ready(function() {
  $("form#form").submit(function(event) {
      event.preventDefault();
      var w = parseInt($("#year").val());
      var x = parseInt($("#month").val());
      var y = parseInt($("#date").val());
      var z = $("input:radio[name=gender]:checked").val();
      var result = akan(y, m, d, g);
      alert("Your akan name is: " + result);
      //refresh page
      document.getElementById("form").reset();
  });
});