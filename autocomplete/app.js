var arr = [
  "Alborz",
  "Ardabil",
  "Bushehr",
  "Chaharmahal and Bakhtiari",
  "East Azerbaijan",
  "Isfahan",
  "Fars",
  "Gilan",
  "Golestan",
  "Hamadan",
  "Hormozgan",
  "Ilam",
  "Kerman",
  "Kermanshah",
  "Khuzestan",
  "Kohgiluyeh and Boyer-Ahmad",
  "Kurdistan",
  "Lorestan",
  "Markazi",
  "Mazandaran",
  "North Khorasan",
  "Qazvin",
  "Qom",
  "Razavi Khorasan",
  "Semnan",
  "Sistan and Baluchestan",
  "South Khorasan",
  "Tehran",
  "West Azerbaijan",
  "Yazd",
  "Zanjan"
];

function autocomplete(inp, arr) {
  inp.addEventListener("input", function(e) {
      let value = e.target.value;
      closeAllLists();
      if (!value) return false;
      let a = document.createElement("div");
      a.setAttribute("class", "autocomplete-items");
      e.target.parentNode.parentNode.appendChild(a);

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, value.length).toUpperCase() == value.toUpperCase()) {
          let b = document.createElement("div");
          b.setAttribute("class", "item");
          b.innerHTML = arr[i];
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
            inp.value = e.target.getElementsByTagName("input")[0].value;
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
      if (a.childElementCount == 0) {        
        let b = document.createElement("div");
        b.setAttribute("class", "not-found");
        b.innerHTML = 'Not Found!'
        b.innerHTML += "<input type='hidden' value='" + 'Not Found!' + "'>";
        b.addEventListener("click", function(e) {
          inp.value = e.target.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
  });

  function closeAllLists(element) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (element != x[i] && element != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("myInput"), arr);