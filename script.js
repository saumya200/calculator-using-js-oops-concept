
 class Calculator {

    constructor() {
        this.clear();
    }
    clear() {
        this.displayNum = "";
        this.operator = "";
        this.secondNum = "";
        this.result = 0;
        this.showDisplay();
    }
    showDisplay() {
        document.querySelector(".display").innerText = this.displayNum;
    }
    addNum(number) {
        if (this.operator !== "") { 
            this.addSecondNum(number);
            return;
        }
        if (number === "." && this.displayNum.includes(".")) { return };
        this.displayNum += number;
        this.showDisplay();
    }

    addSecondNum(number) {
        if (number === "." && this.displayNum.includes(".")) { return };
        this.secondNum += number;
        document.querySelector(".display").innerText = this.secondNum;
    }

    chooseOperator(operator) {
        this.operator = operator;
    }
    delete() {
        this.displayNum = this.displayNum.slice(0, -1);
        this.showDisplay();
    }
    finishOperation(result) {
        this.operator = "";
        this.secondNum = "";
        this.displayNum = result;
    }
    calculate() {
        switch (this.operator) {
            case "+":
                this.result = Number(this.displayNum) + Number(this.secondNum);
                this.displayNum = this.result.toString();
                this.showDisplay();
                this.finishOperation(this.result.toString());
                break;
            case "-":
                this.result = Number(this.displayNum) - Number(this.secondNum);
                this.displayNum = this.result.toString();
                this.showDisplay();
                this.finishOperation(this.result.toString());
                break;
            case "x":
                this.result = Number(this.displayNum) * Number(this.secondNum);
                this.displayNum = this.result.toString();
                this.showDisplay();
                this.finishOperation(this.result.toString());
                break;
            case "/":
                this.result = Number(this.displayNum) / Number(this.secondNum);
                this.displayNum = this.result.toString();
                this.showDisplay();
                this.finishOperation(this.result.toString());
                break;
            default:
                break;
        }
    }
}


const numButtons = document.querySelectorAll(".num-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const allClear = document.getElementById("all-clear");
const del = document.getElementById("del-button");
const equals = document.getElementById("equals");

let calc = new Calculator();


numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.addNum(button.innerText);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.chooseOperator(button.innerText);
    });
});

allClear.addEventListener('click', () => { calc.clear() });

del.addEventListener('click', () => { calc.delete() });

equals.addEventListener('click', () => { calc.calculate() });