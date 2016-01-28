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

            row.appendChild(cellId);
            row.appendChild(cellImie);
            row.appendChild(cellNazwisko);

            table.appendChild(row);
        }
    });
});