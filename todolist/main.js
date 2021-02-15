$(function(){


    //Felvétel gomb megnyomására az input mezőbe beírt feladat kerüljön bele a számozott listába listaelemként
    $("#add").on("click", function(e){

        //Eltárolom változóba az input mező értékét
        var text = $("#todo").val();

        //Ha a text változó tartalma üres...
        if(text == ""){

            //Akkor tiltjuk a függvény működését (nem rakhat bele üres elemet a számozott listába)
            e.preventDefault();
        }
        //Ha nem üres...
        else{
            //Hozzáadhatja a számozott listához a text változóban eltárolt értéket listaelemként
            $("ol").append("<li>" + text + " <i class='fas fa-trash ml-3'></i></li>");

            //Majd töröljük az input mezőben megmaradt szöveget
            $("#todo").val("");

        }

    })


    //Feladat hozzáadása enter billentyű lenyomására
    $("#todo").keyup(function(event){

        //Ha az input mezőben lenyomott billentyű a 13-as kódú billentyű, azaz az Enter
        if(event.keyCode == 13){
            //Akkor a jquery "megnyomja" a felvétel gombot
            $("#add").click()
        }
    })


    //Kuka ikonra kattintva, tüntessük el a hozzá tartozó feladatot és közben css-el húzzuk át.
    $(document).on("dblclick", "i", function(){

        //Arra az iknora amelyikre rákattintottam(duplán) és az ő szülőeleméhez, ami a listaelem hozzáad egy "athuz" class-t majd eltünteti az elemet 0.5 másodperc alatt
        $(this).parent().addClass("athuz").fadeOut(500);
    })


    //Összes listaelem törlése egyszerre
    $("#delete").on("click", function(){

        //A számozott lista tartalmát üressé tesszük = kitöröljük
        $("ol").html("");

    })

})