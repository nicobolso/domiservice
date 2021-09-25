const cliente_url = "https://nicobolso.github.io/drinkservice/cliente.json"
const producto_url = "https://nicobolso.github.io/drinkservice/producto.json"
const PUBLICIDAD_URL = "https://nicobolso.github.io/drinkservice/publicidad.json"

var showSpinner = function () {
    document.getElementById("spinner-wrapper").style.display = "block";
  }
  
  var hideSpinner = function () {
    document.getElementById("spinner-wrapper").style.display = "none";
  }
  
  var getJSONData = function (url) {
    var result = {};
    showSpinner();
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then(function (response) {
        result.status = 'ok';
        result.data = response;
        hideSpinner();
        return result;
      })
      .catch(function (error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
      });
  }
 
