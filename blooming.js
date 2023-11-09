
function display(){
    const total=dropform.dropselect;
        var amount=document.getElementById("amount");
        amount.innerHTML=('Rs.'+total[total.selectedIndex].value);
    }

    
