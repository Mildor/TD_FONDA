window.onload = function(){
    error_display();

    var input_submit = document.querySelector("[type='submit']")
    var all_checkbox_mousquetaires = document.querySelectorAll('[name="mousquetaires[]"]')
    var input_number = document.querySelector('[name="ultimate"]')
    var all_input = document.querySelectorAll('input[id]')
    var count = 0

    input_submit.disabled = true

    input_number.addEventListener('change', function(e){
        var value = input_number.value
        if ((value > 9) || (value < 1)){
            input_number.setAttribute('max', 9)
            input_number.value = 1
            input_number.setAttribute('min', 1)
        }
    })

    all_checkbox_mousquetaires.forEach(function(e){
        e.addEventListener('click', function(element){
            if(e.checked){
                count ++;
            }else{
                if (count !== 0 ){
                    count --;
                }
            }
            if(count < 3){
                all_checkbox_mousquetaires.forEach(function(ele){
                    ele.disabled = false;
                })
            }else{
                all_checkbox_mousquetaires.forEach(function(ele){
                    if (ele.checked === false){
                        ele.disabled = true;
                    }

                })
            }
        })
    })

    function error_display(){
        var get_err = window.location.search.substring(5)
        if (get_err == 1){
            var span= document.getElementById('error')
            span.innerHTML = "Vous devez remplir tous les champs du quizz"
        }
    }

    function check_ultime(){
        var regex_number = /^[1-9]$|^[1-9][0-9]$|^(100)$/
        var input_value = document.getElementById('ultime').value
        var compteur = 0
        var span = document.getElementById('error-ultime')

        if(input_value.match(regex_number)){
            span.innerHTML = ""
            compteur=1
        }else{
            span.innerHTML = "Les valeurs données ne correspondent pas"
            compteur=0
        }
        return compteur
    }

    function check_cheval(){
        var compteur = 0
        var all_cheval = document.querySelectorAll('input[name="cheval"]')

        all_cheval.forEach(element=>{
            if(element.checked){
                compteur ++;
            }
        })
        return compteur
    }

    function check_mousquetaire(){
        var all_mousquetaire = document.querySelectorAll('input[name="mousquetaires[]"]')
        var span = document.getElementById('error-mousquetaires')
        var compteur = 0
        all_mousquetaire.forEach(element=>{
            if(element.checked){
                compteur ++;
            }else{
                if (compteur !== 0 ){
                    compteur --;
                }
            }
        })
        if( compteur === 2){
            span.innerHTML = ""
            return 1
        }else{
            span.innerHTML = "Les valeurs données ne correspondent pas"
            return null
        }
    }

    function check_acteur(){
        var actors = document.getElementById( "acteur" );
        var valeur = actors.options[ actors.selectedIndex ].value
        var compteur = 0

        if (valeur !== "None"){
            compteur = 1
        }
        return compteur
    }

    function check_whatscolor(){
        var regex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
        var compteur = 0
        var input_color = document.getElementById('whatscolor').value
        var span = document.getElementById('error-whatscolor')

        if(input_color.match(regex) && input_color !== "#000000"){
            span.innerHTML = ""
            compteur = 1
        }else{
            span.innerHTML = "Les valeurs données ne correspondent pas"
            compteur = 0
        }

        return compteur
    }

    function check_twins(){
        var regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
        var compteur = 0
        var input_date = document.getElementById('twins').value
        var span = document.getElementById('error-twins')

        if(input_date.match(regex)){
            span.innerHTML = ""
            compteur = 1
        }else{
            span.innerHTML = "Les valeurs données ne correspondent pas"
            compteur = 0
        }
        return compteur
    }

    function check_wwtwo(){
        var regex = /19[0-9]{2}|2000/
        var compteur = 0
        var input_range = document.getElementById("ww2").value
        var span = document.getElementById('error-ww2')

        if(input_range !== "1900" && input_range !== "2000" && input_range.match(regex)){
            span.innerHTML = ""
            compteur = 1
        }else{
            span.innerHTML = "Les valeurs données ne correspondent pas"
            compteur = 0
        }

        return compteur
    }

    function check_durer(){
        var regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
        var compteur = 0
        var input_time = document.getElementById('durer').value
        var span = document.getElementById('error-durer')

        if(input_time.match(regex)){span.innerHTML = ""

            compteur = 1
        }else{
            span.innerHTML = "Les valeurs données ne correspondent pas"
            compteur = 0
        }
        return compteur
    }

    function check_ultimate(){
        var regex = /[0-9]/
        var compteur = 0
        var input_number = document.getElementById('ultimate').value
        var span = document.getElementById('error-ultimate')

        if (input_number.match(regex)){
            span.innerHTML = ""
            compteur = 1
        }else{
            span.innerHTML = "Les valeurs données ne correspondent pas"
            compteur = 0
        }
        return compteur
    }

    function check_dragonflight(){
        var regex = /^(\d{4,})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}(?:\.\d+)?))?$/
        var compteur = 0
        var input_dtloc = document.getElementById('dragonflight').value
        var span = document.getElementById('error-dragonflight')

        if(input_dtloc.match(regex)){
            span.innerHTML = ""
            compteur = 1
        }else{
            span.innerHTML = "Les valeurs données ne correspondent pas"
            compteur = 0
        }
        return compteur
    }

    function check_email(){
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        var compteur = 0
        var input_email = document.getElementById('email').value
        var span = document.getElementById('error-email')

        if(input_email.match(regex)){
            span.innerHTML = ""
            compteur = 1
        }else{
            span.innerHTML = "Les valeurs données ne correspondent pas"
            compteur = 0
        }

        return compteur
    }

    function check_file(){
        var compteur = 0
        var input_file = document.getElementById('file').value
        var span = document.getElementById('error-file')

        if(input_file !== ""){
            span.innerHTML = ""
            compteur = 1
        }else{
            span.innerHTML = "Les valeurs données ne correspondent pas"
            compteur = 0
        }
        return  compteur
    }

    function check_month(){
        var regex = /(0?[1-9]|1[012])/
        var compteur = 0
        var input_month = document.getElementById('month').value
        var span = document.getElementById('error-month')

        if (input_month.match(regex)){
            span.innerHTML = ""
            compteur = 1
        }else{
            span.innerHTML = "Les valeurs données ne correspondent pas"
            compteur = 0
        }

        return compteur
    }

    function check_password(){
        var input_pass = document.getElementById('password').value
        if(input_pass.length === 3){
            input_pass = "yes"
        }
    }

    function check_search(){
        var input_search = document.getElementById('search').value
        var compteur = 0
        var span = document.getElementById('error-search')

        if(input_search !== ""){
            span.innerHTML = ""
            compteur = 1
        }else{
            span.innerHTML = "Les valeurs données ne correspondent pas"
            compteur = 0
        }

        return compteur
    }

    function check_tel(){
        var regex = /[0-9]+/
        var input_tel = document.getElementById('tel').value
        var compteur = 0
        var span = document.getElementById('error-tel')

        if(input_tel.length === 10 && input_tel.match(regex)){
            span.innerHTML = ""
            compteur = 1
        }else{
            span.innerHTML = "Les valeurs données ne correspondent pas"
            compteur = 0
        }
        return compteur
    }

    function check_url(){
        var regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
        var input_url = document.getElementById('url').value
        var compteur = 0
        var span = document.getElementById('error-url')

        if(input_url.match(regex)){
            span.innerHTML = ""
            compteur = 1
        }else{
            span.innerHTML = "Les valeurs données ne correspondent pas"
            compteur = 0
        }
        return compteur
    }

    function check_week(){
        var regex = /[0-9]+-W[0-9]+/
        var input_week = document.getElementById('week').value
        var compteur = 0
        var span = document.getElementById('error-week')

        if(input_week.match(regex)){
            span.innerHTML = ""
            compteur = 1
        }else{
            span.innerHTML = "Les valeurs données ne correspondent pas"
            compteur = 0
        }
        return compteur
    }

    document.getElementById('image').disabled = true

    all_input.forEach(element=>{
        element.addEventListener('blur', e=>{
            var disabl_or_not = 0
            disabl_or_not = check_all()
            input_submit.disabled = disabl_or_not !== 17;

        })
    })

    function check_all(){
        let countdown = 0
        countdown += check_ultime()
        countdown += check_cheval()
        countdown += check_mousquetaire()
        countdown += check_acteur()
        countdown += check_whatscolor()
        countdown += check_twins()
        countdown += check_wwtwo()
        countdown += check_durer()
        countdown += check_ultimate()
        countdown += check_dragonflight()
        countdown += check_email()
        countdown += check_file()
        countdown += check_month()
        check_password()
        countdown += check_search()
        countdown += check_tel()
        countdown += check_url()
        countdown += check_week()
        return countdown
    }
}