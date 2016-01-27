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

            cellId.appendChild(cellIdText);
            cellImie.appendChild(cellImieText);
            cellGatunek.appendChild(cellGatunekText);
            cellDataur.appendChild(cellDataurText);

            var cellRead = document.createElement("td");
            var cellReadLink = document.createElement("a");

            cellReadLink.href = "../../przychodnia/operations/zwierze/readZwierze.html?id=" + data[i].id;
            cellReadLink.textContent = "Read";
            cellRead.appendChild(cellReadLink);

            var cellUpdate = document.createElement("td");
            var cellUpdateLink = document.createElement("a");

            cellUpdateLink.href = "../../przychodnia/operations/zwierze/updateZwierze.html?id=" + data[i].id;
            cellUpdateLink.textContent = "Update";
            cellUpdate.appendChild(cellUpdateLink);

            var cellDelete = document.createElement("td");
            var cellDeleteLink = document.createElement("a");

            cellDeleteLink.href = "../../przychodnia/operations/zwierze/deleteZwierze.html?id=" + data[i].id;
            cellDeleteLink.textContent = "Delete";
            cellDelete.appendChild(cellDeleteLink);

            row.appendChild(cellId);
            row.appendChild(cellImie);
            row.appendChild(cellGatunek);
            row.appendChild(cellDataur);
            row.appendChild(cellRead);
            row.appendChild(cellUpdate);
            row.appendChild(cellDelete);

            table.appendChild(row);
        }
    });
});