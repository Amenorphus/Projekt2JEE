$(document).ready(function() {
    $.get("/przychodnia/rest/weterynarz/getAllWeterynarzs", function (data, textStatus) {
        var wetsel = document.getElementById('weterynarzid');

        for (var i in data) {
            var opt = document.createElement('option');

            var weterynarzInfo = data[i].id;
            

            opt.value = weterynarzInfo;
            opt.innerHTML = weterynarzInfo;
            wetsel.appendChild(opt);
        }
    });
    
    $( "#dodaj" ).on('click', function(event) {
    	event.preventDefault();
		$.ajax({
			  method: "POST",
			  url: "/przychodnia/rest/zwierze/addZwierze",
			  data: 
			  {
				  imie : document.getElementById('imie').value,
				  gatunek : document.getElementById('gatunek').value,
				  dataur : document.getElementById('dataur').value,
				  weterynarz : document.getElementById('weterynarzid').value
			  },
			  success: function() { document.location.replace("../../index.html"); }
			})
		
		});
});