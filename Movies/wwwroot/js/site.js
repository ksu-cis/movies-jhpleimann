// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var movieEntries = document.getElementsByClassName("movie-entry");

var form = document.GetElementId("search-and-filter-form");

form.addEventListener('submit', function (event) {
    event.preventDefault()
    alert('searching...')
    var i, entry;

    var term = document.getElementById("search").value;


    var mpaa[];
    var mpaaCheckBoxes = document.getElementsByClassName("mpaa");

    var minIMBD = document.getElementsByClassName("minIMDB").value;

    for (var j = 0; j < mpaaCheckBoxes.length; j++) {
        if (mpaaCheckBoxes[j].checkd) {
            mpaa.push(mpaaCheckBoxes[j].value);
        }
    }

    for (i = 0; i < movieEntries.length; i++) {
        entry = movieEntries[i];
        entry.style.display = "block";
  //  }


        if (term) {
            // for (i = 0; i < movieEntries.length; i++) {
            //var entry = movieEntries[i];
            if (!entry.dataset.title.toLowerCase().includes(term.toLowerCase())) {
                entry.style.display = "none";

            }

            if (mpaa.length > 0) {
                if (!mpaa.includes(entry.dataset.mpaa)) {
                    entry.style.display = "block";
                }
            }

            if (minIMBD) {
                if (!entry.dataset.imdb || parseFloat(imdb) > parseFloat(entry.datasetimbd)) {
                    entry.style.display = "none";
                }
            }
            /*   else {
                   entry.style.display = "none";
               } */
        }
        }
    }
});