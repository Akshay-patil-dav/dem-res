


   // script.js
   $(document).ready(function() {
    let elementCount = 1;
    let duplicationEnabled = true;

    // if(duplicationEnabled){}


    $(".mydiv").draggable({
        containment: "body"
    });
    $(".mydiv1").draggable({
        containment: "body"
    });
    // Make the element draggable
    $(".mydiv2").draggable({
        containment: "body"
    });

     // Make the element draggable
     $(".mydiv3").draggable({
        containment: "body"
    });
    $(".mydiv4").draggable({
        containment: "body"
    });
    // Make the element draggable
    $(".mydiv5").draggable({
        containment: "body"
    });

     // Make the element draggable
     $(".mydiv6").draggable({
        containment: "body"
    });
    $(".mydiv7").draggable({
        containment: "body"
    });
    // Make the element draggable
    $(".mydiv8").draggable({
        containment: "body"
    });

     // Make the element draggable
     $(".mydiv9").draggable({
        containment: "body"
    });

    

 
       // Duplicate the element
       $("#duplicate-mydiv8").click(function() {
        elementCount++;
        let newElement = $("#mydiv8").clone();
        newElement.attr("id", "element-" + elementCount);
        newElement.css({
            position: "absolute",
            top: "35.5vw",  
            left: "2vw",
            // zindex: "100"
        }).appendTo("body");
        newElement.draggable({
            containment: "body"
        });
    });

    $("#duplicate-mydivmoon").click(function() {
        elementCount++;
        let newElement = $("#mydiv2").clone();
        newElement.attr("id", "element-" + elementCount);
        newElement.css({
            position: "absolute",
            top: "35.5vw",
            left: "4vw"
        }).appendTo("body");
        newElement.draggable({
            containment: "body"
        });
    });

    $("#duplicate-mydivMercury").click(function() {
        elementCount++;
        let newElement = $("#mydiv").clone();
        newElement.attr("id", "element-" + elementCount);
        newElement.css({
            position: "absolute",
            top: "35.5vw",
            left: "6vw"
        }).appendTo("body");
        newElement.draggable({
            containment: "body"
        });
    });

    $("#duplicate-mydivvenus").click(function() {
        elementCount++;
        let newElement = $("#mydiv1").clone();
        newElement.attr("id", "element-" + elementCount);
        newElement.css({
            position: "absolute",
            top: "35.5vw",
            left: "8vw"
        }).appendTo("body");
        newElement.draggable({
            containment: "body"
        });
    });


    $("#duplicate-mydivMars").click(function() {
        elementCount++;
        let newElement = $("#mydiv3").clone();
        newElement.attr("id", "element-" + elementCount);
        newElement.css({
            position: "absolute",
            top: "35.5vw",
            left: "10.5vw"
        }).appendTo("body");
        newElement.draggable({
            containment: "body"
        });
    });

    
    $("#duplicate-btnJupiter").click(function() {
        elementCount++;
        let newElement = $("#mydiv4").clone();
        newElement.attr("id", "element-" + elementCount);
        newElement.css({
             position: "absolute",
             top: "35.5vw",
            left: "13vw"
        }).appendTo("body");
        newElement.draggable({
            containment: "body"
        });
    });


    $("#duplicate-mydivSaturn").click(function() {
        elementCount++;
        let newElement = $("#mydiv6").clone();
        newElement.attr("id", "element-" + elementCount);
        newElement.css({
            position: "absolute",
            // top: "0.1vw",
            top: "35.5vw",
            left: "15.5vw",
        }).appendTo("body");
        newElement.draggable({
            containment: "body"
        });
    });

    $("#duplicate-mydivRahu").click(function() {
        elementCount++;
        let newElement = $("#mydiv7").clone();
        newElement.attr("id", "element-" + elementCount);
        newElement.css({
            position: "absolute",
            // top: "0.1vw",
            top: "35.5vw",
            left: "18vw",
        }).appendTo("body");
        newElement.draggable({
            containment: "body"
        });
    });


    $("#duplicate-mydivKetu").click(function() {
        elementCount++;
        let newElement = $("#mydiv9").clone();
        newElement.attr("id", "element-" + elementCount);
        newElement.css({
            position: "absolute",
            // top: "0.1vw",
            backgroundcolor: "red",
            // height: "",
            top: "35.5vw",
            left: "20.3vw"
            
        }).appendTo("body");
        newElement.draggable({
            containment: "body"
        });
    });




    // $("#remove").click(function() {
    //     $(".#mydiv8").remove(); // Remove all cloned elements
    // });
   
    // $("#remove").click(function() {
    //     // alert("wdsk")
    //     duplicationEnabled = true;
    // });

    $("#remove").click(function() {
        // Remove all cloned elements
        $("[id^='element-']").remove();

        // Reset original elements' positions
        $("#mydiv").css({ top: "", left: "" });
        $("#mydiv1").css({ top: "", left: "" });
        $("#mydiv2").css({ top: "", left: "" });
        $("#mydiv3").css({ top: "", left: "" });
        $("#mydiv4").css({ top: "", left: "" });
        $("#mydiv5").css({ top: "", left: "" });
        $("#mydiv6").css({ top: "", left: "" });
        $("#mydiv7").css({ top: "", left: "" });
        $("#mydiv8").css({ top: "", left: "" });
        $("#mydiv9").css({ top: "", left: "" });

        // Reset element count
        elementCount = 1;
    });
});

