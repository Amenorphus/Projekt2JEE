$(document).ready(function()
{
    $.get("/przychodnia/rest/weterynarz/getAllWeterynarzs", function(data, textStatus)
    {
        var table = document.getElementById('presentationTablew');

        for(var i in data)
        {
            var row = document.createElement("tr");

            var cellId = document.createElement("td");
            var cellIdText = document.createTextNode(data[i].id);

            var cellImie = document.createElement("td");
            var cellImieText = document.createTextNode(data[i].imie);

            var cellNazwisko = document.createElement("td");
            var cellNazwiskoText = document.createTextNode(data[i].nazwisko);

           
            cellId.appendChild(cellIdText);
            cellImie.appendChild(cellImieText);
            cellNazwisko.appendChild(cellNazwiskoText);

           
            var cellUpdate = document.createElement("td");
            var cellUpdateLink = document.createElement("a");

            cellUpdateLink.href = "../../przychodnia/operations/weterynarz/updateWeterynarz.html"
            cellUpdateLink.textContent = "Edytuj";
            cellUpdate.appendChild(cellUpdateLink);

            var cellDelete = document.createElement("td");
            var cellDeleteLink = document.createElement("a");

            cellDeleteLink.href = "../../przychodnia/operations/weterynarz/deleteWeterynarz.html"
            cellDeleteLink.textContent = "Kasuj";
            cellDelete.appendChild(cellDeleteLink);

            row.appendChild(cellId);
            row.appendChild(cellImie);
            row.appendChild(cellNazwisko);
            row.appendChild(cellUpdate);
            row.appendChild(cellDelete);

            table.appendChild(row);
        }
    });
});