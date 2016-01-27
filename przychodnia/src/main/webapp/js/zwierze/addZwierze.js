$(document).ready(function() {
    $.get("/przychodnia/rest/weterynarz/getAllWeterynarzs", function (data, textStatus) {
        var wetsel = document.getElementById('weterynarzid');

        for (var i in data) {
            var opt = document.createElement('option');

            var weterynarzInfo = data[i].id + " " + data[i].imie + " " + data[i].nazwisko;

            opt.value = weterynarzInfo;
            opt.innerHTML = weterynarzInfo;
            wetsel.appendChild(opt);
        }
    });
});