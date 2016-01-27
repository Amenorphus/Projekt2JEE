$(document).ready(function() {
    $.get("/przychodnia/rest/weterynarz/getAllWeterynarzs", function (data, textStatus) {
        var wetSelect = document.getElementById('zwierzeId');

        for (var i in data) {
            var opt = document.createElement('option');

            var weterynarzInfo = data[i].id + " " + data[i].imie;

            opt.value = weterynarzInfo;
            opt.innerHTML = weterynarzInfo;
            wetSelect.appendChild(opt);
        }
    });
});