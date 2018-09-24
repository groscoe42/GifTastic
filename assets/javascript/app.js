$(document).ready(function () {
    //declare variables
    var animals = ["bear", "bees", "ostrich", "emu", "ocelot", "puffin", "tiger", "giraffe"];


    // build buttons

    //create new buttons
    function makeBtn() {
        $(".buttCont").empty();
        animals.forEach(function (element) {
            var nuBtn = $("<button>");
            nuBtn.addClass("animal-button");
            nuBtn.text(element);
            $(".buttCont").append(nuBtn);
        })
    };

    makeBtn();

    //search
    $("#addIt").on("click", function (evetn) {
        event.preventDefault();
        var nuAnimal = $("#uText").val();
        animals.push(nuAnimal);
        makeBtn();

    })

});



//onclick display stuff

//how to pause nd unpause;