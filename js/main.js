
let turns = 1;
var a1 = "";
var a2 = "";
var a3 = "";
var b1 = "";
var b2 = "";
var b3 = "";
var c1 = "";
var c2 = "";
var c3 = "";


document.querySelector('.A1').addEventListener('click', ticTacToeA1)
document.querySelector('.A2').addEventListener('click', ticTacToeA2)
document.querySelector('.A3').addEventListener('click', ticTacToeA3)
document.querySelector('.B1').addEventListener('click', ticTacToeB1)
document.querySelector('.B2').addEventListener('click', ticTacToeB2)
document.querySelector('.B3').addEventListener('click', ticTacToeB3)
document.querySelector('.C1').addEventListener('click', ticTacToeC1)
document.querySelector('.C2').addEventListener('click', ticTacToeC2)
document.querySelector('.C3').addEventListener('click', ticTacToeC3)





function ticTacToeA1() {
    if (!document.querySelector('.A1').innerText) {
        if (turns % 2 === 0) {
            a1 = "X";
             document.querySelector('.A1').innerText = a1;
        } else {
            a1 = "O";
            document.querySelector(".A1").innerText = a1;
        }
        turns += 1
        if(turns >5){
            if((a1===a2&&a2===a3)||(b1===b2&&b2===b3)||(c1===c2&&c2===c3)||(a1===b1&&b1===c1)||(a2===b2&&b2===c2)||(a3===b3&&b3===c3)||(a1===b2&&b2===c3)||(a3===b2&&b2===c1)){
            document.querySelector("h2").innerText="You won!"
        }
        }
    }
}

function ticTacToeA2() {
    if (!document.querySelector('.A2').innerText) {
        if (turns % 2 === 0) {
            a2 = "X";
             document.querySelector('.A2').innerText = a2;
        } else {
            a2 = "O";
            document.querySelector(".A2").innerText = a2;
        }
        turns += 1
        if(turns >5){
            if((a1===a2&&a2===a3)||(b1===b2&&b2===b3)||(c1===c2&&c2===c3)||(a1===b1&&b1===c1)||(a2===b2&&b2===c2)||(a3===b3&&b3===c3)||(a1===b2&&b2===c3)||(a3===b2&&b2===c1)){
            document.querySelector("h2").innerText="You won!"
        }
        }
    }
}

function ticTacToeA3() {
    if (!document.querySelector('.A3').innerText) {
        if (turns % 2 === 0) {
            a3 = "X";
             document.querySelector('.A3').innerText = a3;
        } else {
            a3 = "O";
            document.querySelector(".A3").innerText = a3;
        }
        turns += 1
        if(turns >5){
            if((a1===a2&&a2===a3)||(b1===b2&&b2===b3)||(c1===c2&&c2===c3)||(a1===b1&&b1===c1)||(a2===b2&&b2===c2)||(a3===b3&&b3===c3)||(a1===b2&&b2===c3)||(a3===b2&&b2===c1)){
            document.querySelector("h2").innerText="You won!"
        }
        }
    }
}

function ticTacToeB1() {
    if (!document.querySelector('.B1').innerText) {
        if (turns % 2 === 0) {
            b1 = "X";
             document.querySelector('.B1').innerText = b1;
        } else {
            b1 = "O";
            document.querySelector(".B1").innerText = b1;
        }
        turns += 1
        if(turns >5){
            if((a1===a2&&a2===a3)||(b1===b2&&b2===b3)||(c1===c2&&c2===c3)||(a1===b1&&b1===c1)||(a2===b2&&b2===c2)||(a3===b3&&b3===c3)||(a1===b2&&b2===c3)||(a3===b2&&b2===c1)){
            document.querySelector("h2").innerText="You won!"
        }
        }
    }
}

function ticTacToeB2() {
    if (!document.querySelector('.B2').innerText) {
        if (turns % 2 === 0) {
            b2 = "X";
             document.querySelector('.B2').innerText = b2;
        } else {
            b2 = "O";
            document.querySelector(".B2").innerText = b2;
        }
        turns += 1
        if(turns >5){
            if((a1===a2&&a2===a3)||(b1===b2&&b2===b3)||(c1===c2&&c2===c3)||(a1===b1&&b1===c1)||(a2===b2&&b2===c2)||(a3===b3&&b3===c3)||(a1===b2&&b2===c3)||(a3===b2&&b2===c1)){
            document.querySelector("h2").innerText="You won!"
        }
        }
    }
}

function ticTacToeB3() {
    if (!document.querySelector('.B3').innerText) {
        if (turns % 2 === 0) {
            b3 = "X";
             document.querySelector('.B3').innerText = b3;
        } else {
            b3 = "O";
            document.querySelector(".B3").innerText = b3;
        }
        turns += 1
        if(turns >5){
            if((a1===a2&&a2===a3)||(b1===b2&&b2===b3)||(c1===c2&&c2===c3)||(a1===b1&&b1===c1)||(a2===b2&&b2===c2)||(a3===b3&&b3===c3)||(a1===b2&&b2===c3)||(a3===b2&&b2===c1)){
            document.querySelector("h2").innerText="You won!"
        }
        }
    }
}

function ticTacToeC1() {
    if (!document.querySelector('.C1').innerText) {
        if (turns % 2 === 0) {
            c1 = "X";
             document.querySelector('.C1').innerText = c1;
        } else {
            c1 = "O";
            document.querySelector(".C1").innerText = c1;
        }
        turns += 1
        if(turns >5){
            if((a1===a2&&a2===a3)||(b1===b2&&b2===b3)||(c1===c2&&c2===c3)||(a1===b1&&b1===c1)||(a2===b2&&b2===c2)||(a3===b3&&b3===c3)||(a1===b2&&b2===c3)||(a3===b2&&b2===c1)){
            document.querySelector("h2").innerText="You won!"
        }
        }
    }
}

function ticTacToeC2() {
    if (!document.querySelector('.C2').innerText) {
        if (turns % 2 === 0) {
            c2 = "X";
             document.querySelector('.C2').innerText = c2;
        } else {
            c2 = "O";
            document.querySelector(".C2").innerText = c2;
        }
        turns += 1
        if(turns >5){
            if((a1===a2&&a2===a3)||(b1===b2&&b2===b3)||(c1===c2&&c2===c3)||(a1===b1&&b1===c1)||(a2===b2&&b2===c2)||(a3===b3&&b3===c3)||(a1===b2&&b2===c3)||(a3===b2&&b2===c1)){
            document.querySelector("h2").innerText="You won!"
        }
        }
    }
}

function ticTacToeC3() {
    if (!document.querySelector('.C3').innerText) {
        if (turns % 2 === 0) {
            c3 = "X";
             document.querySelector('.C3').innerText = c3;
        } else {
            c3 = "O";
            document.querySelector(".C3").innerText = c3;
        }
        turns += 1
        if(turns >5){
            if((a1===a2&&a2===a3)||(b1===b2&&b2===b3)||(c1===c2&&c2===c3)||(a1===b1&&b1===c1)||(a2===b2&&b2===c2)||(a3===b3&&b3===c3)||(a1===b2&&b2===c3)||(a3===b2&&b2===c1)){
            document.querySelector("h2").innerText="You won!"
        }
        }
    }
}











