function init() {
    
    amount = document.getElementById('amount');
    rate = document.getElementById('rate_slider');
    rate_display = document.getElementById('rate_display');
    nb_years=document.getElementById('nbyears');
    result=document.getElementById('result');
    update_rate(rate.value);
    
    //reset on refresh
    result.innerHTML = ""

    //start here
    amount.focus();
}

function update_rate(val) {
    rate_display.innerHTML = parseFloat(val).toFixed(2) + "%" ; 
}

function isAmountOK(val){
    return (isNaN(val) || (parseInt(val) <= 0) || val === undefined || val == null || val.length <= 0) ? false : true;
}
//check investment amount is a positive value
function validate() { 
    if (isNaN(amount.value) || isEmpty(amount.value) || (parseInt(amount.value) <= 0)) { 
        alert("Enter a positive investment amount"); 

    }
}

function compute() {

    if (isAmountOK(amount.value) == true) { 
        var today= new Date();
        var cur_year = today.getFullYear();
        nbyears = parseInt(nb_years.value)
        interest = amount.value * rate.value * nbyears /100;
        sht = "<span class='highlight'>"
        eht = "</span>"
        result.innerHTML =  "If you deposit " + sht + amount.value + eht + ",<br/>" +
                            "at an interest rate of " + sht + rate_display.innerHTML + eht + ".<br/>" +
                            "You will receive an amount of " + sht + interest + eht + ",<br/>" +
                            "in the year " + sht + (cur_year + nbyears) + eht;
    }
    else  { 
        result.innerHTML = "";
        amount.focus();
        alert("Enter a positive investment amount"); 
    }
}
  
        