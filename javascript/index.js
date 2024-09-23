const theme=document.getElementsByTagName('html')[0];
theme.setAttribute('data-theme',"light")


// Donate for Flood at Noakhali 01



document.getElementById('noakhali-onate-btn').addEventListener('click' ,function(){
    const noakhaliInput=parseFloat(document.getElementById('noakhali-input').value );

    if(noakhaliInput>0 && noakhaliInput!=="string" ){
       document.getElementById('total-amount')
       
       document.getElementById('noakhali-amount').innerText=newAmount

    }else{
        alert("Failed to add money")
    }
})

// Donate for Flood Relief in Feni 02

let feni = 0 ;

document.getElementById('feni-onate-btn').addEventListener('click',function(){
    
    let feniInput= parseFloat(document.getElementById('feni-input').value );

    if(feniInput>0 && feniInput!== "string"){
        feni+= feniInput 
        document.getElementById('feni-amount').innerText=feni ;
        document.getElementById('total-amount') ;
        let newFaniTotal= totalAmount +feni ;
        document.getElementById('total-amount').innerText=newFaniTotal
        

    }else{
        alert("Failed to add money")
    }

})
// Donate for Flood Relief in Feni 03

