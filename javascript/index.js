const theme=document.getElementsByTagName('html')[0];
theme.setAttribute('data-theme',"light")


// Donate for Flood at Noakhali 01


document.getElementById('noakhali-onate-btn').addEventListener('click' ,function(){

    const noakhaliInput=parseFloat(document.getElementById('noakhali-input').value );

    if(noakhaliInput>0 && noakhaliInput!=="string" ){
        let totalAmount=parseFloat(document.getElementById('total-amount').innerText) ;

       let totalBalance =totalAmount-noakhaliInput ;
       document.getElementById("total-amount").innerText=totalBalance
       let noakhaliAmount=parseFloat(document.getElementById('noakhali-amount').innerText) ;

    //    let newBalance=totalBalance + noakhaliAmount
       let newBalance=noakhaliAmount + noakhaliInput
       
       document.getElementById('noakhali-amount').innerText=newBalance

    }else{
        alert("Failed to add money")
    }
})

// Donate for Flood Relief in Feni,02

document.getElementById('feni-onate-btn').addEventListener('click', function(){
    let feniInput = parseFloat(document.getElementById('feni-input').value) ;
    
    if(feniInput >0 && feniInput !== "string"){
        let totalAmount = parseFloat(document.getElementById('total-amount').innerText) ;

        let total= totalAmount - feniInput ;
        document.getElementById('total-amount').innerText=total

        let feniAmount= parseFloat(document.getElementById('feni-amount').innerText) ;
        
        let newBalance = feniAmount +feniInput ;
        document.getElementById("feni-amount").innerText=newBalance ;

    
    }else{
        alert("Failed to add money")
    }

})


// Aid for Injured in the Quota Movement 03

document.getElementById("quota-onate-btn").addEventListener("click" ,function(){
    let quotaInput=parseFloat(document.getElementById("quota-input").value) ;

    if(quotaInput >0 && quotaInput ){
        let totalAmount=parseFloat(document.getElementById('total-amount').innerText) ;

        let total= totalAmount - quotaInput;
        document.getElementById('total-amount').innerText=total ;

        let quotaAmount= parseFloat(document.getElementById('quota-amount').innerText );
        let newBalance= quotaAmount + quotaInput ;
        document.getElementById('quota-amount').innerText=newBalance ;

    }
})


