const theme=document.getElementsByTagName('html')[0];
theme.setAttribute('data-theme',"light")


// Donate for Flood at Noakhali 01
let noakhaliAmount=100 ;
let totalAmount =5500 ;

document.getElementById('noakhali-onate-btn').addEventListener('click' ,function(){
    const noakhaliInput=parseFloat(document.getElementById('noakhali-input').value );

    if(noakhaliInput>0 && noakhaliInput!=="string" ){
        noakhaliAmount+=noakhaliInput
        document.getElementById('noakhali-amount').innerText= noakhaliAmount ;
        document.getElementById('total-amount');
        let newtotal=noakhaliAmount +totalAmount ;
        document.getElementById('total-amount').innerText=newtotal ;

    }else{
        alert("Faild to add money")
    }
})

// Donate for Flood Relief in Feni 02

let feniAmount=10 ;

document.getElementById('feni-onate-btn').addEventListener('click',function(){
    
    let feniInput= parseFloat(document.getElementById('feni-input').value );

    if(feniInput>0 && feniInput!== "string"){
        feniAmount+=feniInput
        let feniAmount=document.getElementById('feni-amount').innerText=feniAmount
        

    }else{
        alert("Faild to add money")
    }

})
