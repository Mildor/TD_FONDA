/* document.body.onload(function(e){
    var all_checkbox_mousquetaires = document.querySelectorAll('[name="mousquetaires[]"]')
    var input_number = document.querySelector('[name="ultimate"]')
    console.log(all_checkbox_mousquetaires)
    input_number.addEventListener('change', function(e){
        var value = input_number.value
        if ((value > 9) || (value < 1)){
            input_number.setAttribute('max', 9)
            input_number.value = 1
            input_number.setAttribute('min', 1)
        }
        console.log(input_number.value)
    })
    var count = 0
    var count_onload = 0
    all_checkbox_mousquetaires.forEach(function(e){
        e.addEventListener('click', function(element){
            if(e.checked){
                count ++;
            }else{
                if (count != 0 ){
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
        var get_err = window.location.search
        console.log(get_err)
    }
    
    error_display();
})
 */