$(".onlyNumber").keypress(function (e) {
        if (e.keyCode != 8 && e.keyCode != 0 && (e.keyCode < 48 || e.keyCode > 57)) {
            return false;
        }
    });

    $(".onlyNumber").on('paste', function(e) {
        e.stopPropagation();
        e.preventDefault();

        let cd = e.originalEvent.clipboardData;
        let intValue = cd.getData("text/plain")
        console.log(intValue);
        if (!Number.isNaN(parseInt(intValue))) {
            if(parseInt(intValue) >= 0) {
                e.target.value = parseInt(intValue);
            }
        }
    });

    $(".onlyNumberAndDecimal").keypress(function (e) {
        if (e.keyCode != 8 && e.keyCode != 0 && e.keyCode != 46 && (e.keyCode < 48 || e.keyCode > 57)) {
            return false;
        }

        if(e.keyCode == 46 && $(this).val().indexOf('.') != -1) {
            return false;
        }
    });

    $(".onlyNumberAndDecimal").on('paste', function(e) {
        e.stopPropagation();
        e.preventDefault();

        let cd = e.originalEvent.clipboardData;
        let decValue = cd.getData("text/plain")
        console.log(decValue);
        if (!Number.isNaN(parseFloat(decValue))) {
            if(parseFloat(decValue) >= 0) {
                e.target.value = parseFloat(decValue);
            }
        }
    });


$(document).on("copy", function(e){
  e.stopPropagation();
  e.preventDefault();
                
  var cd = e.originalEvent.clipboardData;
  cd.setData("text/plain", "nice, eh?!");
 });
    
// Decimal with (13,7)
    ^\s*(?=.*[1-9])\d{1,13}(?:\.\d{1,7})?\s*$
