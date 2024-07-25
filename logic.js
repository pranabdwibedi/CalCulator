const outputScreen = document.querySelector("#outputText");
const buttons = document.querySelectorAll(".button");

//Ac button
buttons[0].addEventListener("click",()=>{
    outputScreen.innerText = "";
});
buttons[1].addEventListener("click",()=>{
    outputScreen.innerText = outputScreen.innerText.slice(0,length-1);
});


let operands = [];
let j=0;
let startIndex = 0;
let endIndex = (outputScreen.innerText).length;



for(i=2;i<buttons.length-1;i++){
    let btn = buttons[i];
    btn.addEventListener("click",()=>{
        outputScreen.innerText = outputScreen.innerText + btn.getAttribute("id");
    })
}




buttons[buttons.length-1].addEventListener("click", () => {
    for(let i = 0;i<buttons.length;i++){
        buttons[i].disabled=true;
    }
    let OutputString = (outputScreen.innerText).toString();
    for(i = 0;i < OutputString.length;i++){
        if(OutputString.charAt(i) == "+" || OutputString.charAt(i) == "-" || OutputString.charAt(i) == "%" || OutputString.charAt(i) == "/" || OutputString.charAt(i) == "*"){
            operands[j] = OutputString.slice(startIndex, i);
            startIndex = i+1;
            operands[++j] = OutputString.charAt(i);
            j++;
        }
        else if(i == OutputString.length-1){
            operands[j] = OutputString.slice(startIndex, i+1)
        }
    }
    calculateresult(operands);
    let newbutton = document.querySelector("#newB");
    newbutton.setAttribute("id","newB1")
    newbutton.addEventListener("click",()=>{
        window.location.reload();
    });
})




let result = 0;


let calculateresult = (operands) =>{
    result = parseInt(operands[0]);
    for(i = 0;i < operands.length;i++){
        if(operands[i] == "+" || operands[i] == "-" || operands[i] == "%" || operands[i] == "/" || operands[i] == "*"){
            switch(operands[i]){
                case "+" :
                    result = parseInt(result) + parseInt(operands[i+1]);
                    break;
                case "-" :
                    result = parseInt(result) - parseInt(operands[i+1]);
                    break;
                case "*" :
                    result = parseInt(result) * parseInt(operands[i+1]);
                    break;
                case "/" :
                    result = parseInt(result) / parseInt(operands[i+1]);
                    break;
                case "%" :
                    result = parseInt(result) % parseInt(operands[i+1]);
                    break;
            }
        }
    }
    outputScreen.innerText = result;
    // let res = document.querySelector("#preRes")
    // res.innerText = result;
}
