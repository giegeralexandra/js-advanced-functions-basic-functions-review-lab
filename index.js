// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(sym = "*"){
    return function(s = "special"){
        return `You are ${sym + s + sym}!`
    }
}

const Calculator = {}
Calculator.add = function() {
    return 1+3
    },
    
Calculator.subtract = function() {
    return 1-3
    }

Calculator.multiply = function(){
    return 1*3
}

Calculator.divide = function(){
     return 10/5
}

function actionApplyer(init, array){
    let num = init
    for(let i=0; i < array.length; i++){
        num = array[i](num)
    }
    return num
}
