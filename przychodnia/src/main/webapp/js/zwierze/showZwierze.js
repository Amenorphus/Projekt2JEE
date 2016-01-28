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

            row.appendChild(cellId);
            row.appendChild(cellImie);
            row.appendChild(cellGatunek);
            row.appendChild(cellDataur);
            row.appendChild(cellIm);
            row.appendChild(cellNaz);
            
            table.appendChild(row);
        }
    });
});