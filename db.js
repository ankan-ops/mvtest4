const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("formData.db");

db.run(
  "INSERT INTO (date TEXT, time TEXT, subject TEXT, paket TEXT, school TEXT, klass TEXT, county TEXT, fname TEXT, lname TEXT, quantity INTEGER, mail TEXT, phone INTEGER, other TEXT)"
);

function insertData() {
  var date = document.querySelector("#date").value;
  var time = document.querySelector("#time").value;
  var subject = document.querySelector("#subject").value;
  var paket = document.querySelector("#paket").value;
  var school = document.querySelector("#school").value;
  var klass = document.querySelector("#klass").value;
  var county = document.querySelector("#county").value;
  var fname = document.querySelector("#fname").value;
  var lname = document.querySelector("#lname").value;
  var quantity = document.querySelector("#quantity").value;
  var mail = document.querySelector("#mail").value;
  var phone = document.querySelector("#number").value;
  var other = document.querySelector("#other").value;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "index.php", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.send(
    "date=" +
      date +
      "time=" +
      time +
      "Subject=" +
      subject +
      "paket=" +
      paket +
      "school=" +
      school +
      "klass=" +
      klass +
      "county=" +
      county +
      "firstname=" +
      fname -
      +"lastname=" +
      lname +
      "quantity=" +
      quantity +
      "mail=" +
      mail +
      "phone=" +
      phone +
      "other=" +
      other
  );
}
