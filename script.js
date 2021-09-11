// var stocksInit = document.querySelector("#init-price")
// var stocksQty = document.querySelector("#stocks-qty")
// var stocksCurr = document.querySelector("#curr-price")
var stocksInfo = document.querySelectorAll("#stock")
var calcBtn = document.querySelector("#calc-btn")
var output = document.querySelector(".output")

function handleClick(){
    var stockArr = [];
    for(var index = 0; index < stocksInfo.length; index++){
        console.log(stocksInfo[index].value)
        if(stocksInfo[index].value){
            stockArr[index] = stocksInfo[index].value;
        } else {
            showMessage("Enter all the fields!!");
            break;
        }
    }
    calculateProfitOrLoss(stockArr)
}

function calculateProfitOrLoss(stockArr){
    if(stockArr[0] < stockArr[2]){
        var profit = (stockArr[2] - stockArr[0]) * stockArr[1];
        var profitPercentage = profit * 100;

        showMessage(`Congrats!! You made a profit of ${profit} and an overall of ${profitPercentage}%`)
    } else if(stockArr[0] > stockArr[2]){
        var loss = (stockArr[0] - stockArr[2]) * stockArr[1];
        var lossPercentage = loss * 100;

        showMessage(`Oh no no!! You made a loss of ${loss} and an overall of ${lossPercentage}%`)
    } else {
        showMessage("If you'd put in the effort then you'd see some change here :)")
    }
}

function showMessage(message){
    output.innerText = message;
}


calcBtn.addEventListener("click", handleClick)