var slide;
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PUBLICIDAD_URL).then(function (result) {
        if (result.status === "ok") {
            productDetail = result.data;
            showImages();
        }
    })
});

function showImages() {
    if (slide && slide.images) {
        var divSlide = document.getElementById("slide");

        for (let i = 0; i < slide.images.length; i++) {
            var active = (i === 0) ? "active" : "";
            var contenido = '<div class="carousel-item ' + active + '">' +
                '<img class="d-block w-100" src="' + slide.images[i] + '" alt="First slide">' +
                '</div>';


            divSlide.innerHTML += contenido;
        }
    }
}
