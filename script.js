$(document).ready(function () {       
    $("#generate").click(function() {
        var number = $("input").val();
        $("input").val(""); 
 
        $.ajax({
            url: "https://randomuser.me/api/?results=10",
            dataType: "json",
            success: function(res) {
                var data = res.results
                console.log(data)
               
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i].name.first)
                    console.log(data[i].name.last)
             
                     $ (".row").append(
                    `<div class='col-12 col-sm-6 col-md-4'>
                        <button id='btn-delete' class='btn btn-danger w-100'>Delete</button>
                        <div class='my-1 p-2'>
                            <img class='card-img-top' alt='user' src='${data[i].picture.large}'>
                            <h5 class='card-title'> ${data[i].name.first} ${data[i].name.last}</h5>
                            <p class='card-text'> ${data[i].location.city} ${data[i].location.street.number} ${data[i].location.street.name}</p>
                            <button class='btn btn-primary'>Email</button>
                        </div>
                    </div>`)
                }
            }
        });
    });
    
    $(document).on("click", "#btn-delete", function(){
        $(this).parent().remove()
    })
});
