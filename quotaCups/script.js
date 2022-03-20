$.ajax({
    type:'GET',
    url:'./php/selectPrinter.php',
    success: function(r) { ShowPrinter(r);},
    error: function(r) {alert('error'); console.log(r)}
});

function ShowPrinter(data)
{
    var dati = data.split('\n')
    var select = document.getElementById("printer");
    for(var i = 0; i<dati.length; i++){
        var options = document.createElement("option");
        options.value = dati[i];
        options.text = dati[i];
        select.appendChild(options);
    }
}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
   // var formInvio = document.getElementById("formInvio").submit();
}

function togglePopupDelete(){
    document.getElementById("popup-1Delete").classList.toggle("active");
}



$('#formInvio').on('submit', function(e)
{
    var printer = document.getElementById("printer").value;
    var klimit = document.getElementById("klimit").value;
    var period = document.getElementById("period").value;
    var page = document.getElementById("Page").value;

    e.preventDefault(); //stop send form 

        $.ajax({ 
            type:    'POST',
            url:     './php/InserQuota.php',
            data:    {'printer': printer, 'klimit': klimit, 'period': period, 'page': page},
            success: function(r) {document.getElementById("popup-1").classList.toggle("active")},
            error:   function(r) {alert('error'); console.log(r)}
        });
});

$('#formElimino').on('submit', function(e)
{
    var printer = document.getElementById("printer").value;

    e.preventDefault(); 

        $.ajax({ 
            type:    'POST',
            url:     './php/DeleteQuota.php',
            data:    {'printer': printer},
            success: function(r) {document.getElementById("popup-1Delete").classList.toggle("active")},
            error:   function(r) {alert('error'); console.log(r)}
        });
});