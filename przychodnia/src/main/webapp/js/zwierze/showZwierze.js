$(document).ready(function()
{
    $.get("/przychodnia/rest/zwierze/getAllZwierzes", function(data, textStatus)
    {
        var table = document.getElementById('presentationTable');

        for(var i in data)
        {
            var row = document.createElement("tr");

            var cellId = document.createElement("td");
            var cellIdText = document.createTextNode(data[i].id);

            var cellImie = document.createElement("td");
            var cellImieText = document.createTextNode(data[i].imie);

            var cellGatunek = document.createElement("td");
            var cellGatunekText = document.createTextNode(data[i].gatunek);

            var cellDataur = document.createElement("td");
            var cellDataurText = document.createTextNode(data[i].dataur);
            
            var cellIm = document.createElement("td");
            var cellImText = document.createTextNode(data[i].weterynarz.imie);
            var cellNaz = document.createElement("td");
            var cellNazText = document.createTextNode(data[i].weterynarz.nazwisko);

            cellId.appendChild(cellIdText);
            cellImie.appendChild(cellImieText);
            cellGatunek.appendChild(cellGatunekText);
            cellDataur.appendChild(cellDataurText);
            
            cellIm.appendChild(cellImText);
            cellNaz.appendChild(cellNazText);
   
            var cellUpdate = document.createElement("td");
            var cellUpdateLink = document.createElement("a");

            cellUpdateLink.href = "../../przychodnia/operations/zwierze/editZwierze.html"
            cellUpdateLink.textContent = "Edytuj";
            cellUpdate.appendChild(cellUpdateLink);

            var cellDelete = document.createElement("td");
            var cellDeleteLink = document.createElement("a");

            cellDeleteLink.href = "../../przychodnia/operations/zwierze/deleteZwierze.html"
            cellDeleteLink.textContent = "Kasuj";
            cellDelete.appendChild(cellDeleteLink);

            row.appendChild(cellId);
            row.appendChild(cellImie);
            row.appendChild(cellGatunek);
            row.appendChild(cellDataur);
            row.appendChild(cellIm);
            row.appendChild(cellNaz);
            row.appendChild(cellUpdate);
            row.appendChild(cellDelete);
            
            table.appendChild(row);
        }
    });
});