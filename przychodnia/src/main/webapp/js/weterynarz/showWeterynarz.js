$(document).ready(function()
{
    $.get("/przychodnia/rest/weterynarz/getAllWeterynarzs", function(data, textStatus)
    {
        var table = document.getElementById('presentationTable');

        for(var i in data)
        {
            var row = document.createElement("tr");

            var cellId = document.createElement("td");
            var cellIdText = document.createTextNode(data[i].wetId);

            var cellImie = document.createElement("td");
            var cellImieText = document.createTextNode(data[i].imie);

            var cellNazwisko = document.createElement("td");
            var cellNazwiskoText = document.createTextNode(data[i].nazwisko);

           
            cellId.appendChild(cellIdText);
            cellImie.appendChild(cellImieText);
            cellNazwisko.appendChild(cellNazwiskoText);

            var cellRead = document.createElement("td");
            var cellReadLink = document.createElement("a");

            cellReadLink.href = "../../przychodnia/operations/weterynarz/readWeterynarz.html?id=" + data[i].wetId;
            cellReadLink.textContent = "Read";
            cellRead.appendChild(cellReadLink);

            var cellUpdate = document.createElement("td");
            var cellUpdateLink = document.createElement("a");

            cellUpdateLink.href = "../../przychodnia/operations/weterynarz/updateWeterynarz.html?id=" + data[i].wetId;
            cellUpdateLink.textContent = "Update";
            cellUpdate.appendChild(cellUpdateLink);

            var cellDelete = document.createElement("td");
            var cellDeleteLink = document.createElement("a");

            cellDeleteLink.href = "../../przychodnia/operations/weterynarz/deleteWeterynarz.html?id=" + data[i].wetId;
            cellDeleteLink.textContent = "Delete";
            cellDelete.appendChild(cellDeleteLink);

            row.appendChild(cellId);
            row.appendChild(cellImie);
            row.appendChild(cellNazwisko);
            row.appendChild(cellRead);
            row.appendChild(cellUpdate);
            row.appendChild(cellDelete);

            table.appendChild(row);
        }
    });
});