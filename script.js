document.getElementById("search-button").addEventListener("click", function () {
  var searchTerm = document.getElementById("search-input").value;

  switch (searchTerm.toLowerCase()) {
    case "boneca":
      window.location.href = "boneca.html";
      break;
    case "ioio":
      window.location.href = "ioio.html";
      break;
    case "xalingo":
      window.location.href = "xalingo.html";
      break;
    default:
      alert("Ops! Item não encontrado");
  }
});
