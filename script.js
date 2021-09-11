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
            return;
        }
    }
    calculateProfitOrLoss(stockArr)
}

function calculateProfitOrLoss(stockArr){
    if(stockArr[0] < stockArr[2]){
        var profit = (stockArr[2] - stockArr[0]) * stockArr[1];
        var profitPercentage = profit/stockArr[0] * 100;

        showMessage(`Congrats!! You made a profit of Rs. ${profit.toFixed(2)} and an overall profit of ${profitPercentage.toFixed(2)}%`)
        document.body.style.backgroundColor = "rgba(0, 128, 0, 0.801)"

    } else if(stockArr[0] > stockArr[2]){
        var loss = (stockArr[0] - stockArr[2]) * stockArr[1];
        var lossPercentage = loss/stockArr[0] * 100;

        showMessage(`Oh no no!! You made a loss of Rs. ${loss.toFixed(2)} and an overall loss of ${lossPercentage.toFixed(2)}%`)

        document.body.style.backgroundColor = "rgba(255, 0, 0, 0.76)"
    } else {
        showMessage("If you'd put in the effort then you'd see some change here :)")
    }
}

function showMessage(message){
    output.innerText = message;
}


calcBtn.addEventListener("click", handleClick)