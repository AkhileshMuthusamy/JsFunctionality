$(".onlyNumber").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
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
    
    ^\s*(?=.*[1-9])\d{1,13}(?:\.\d{1,7})?\s*$
