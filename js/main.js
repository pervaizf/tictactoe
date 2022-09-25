// set turn number
let turns = 1;

// set box sections inside of boxSelector variable
const boxSelector = document.querySelectorAll(".box")

// turn boxSelector into an array, iterate through array, add an event listener to each box section, run ticTacToe function
Array.from(boxSelector).forEach((element, i) => element.addEventListener("click", ticTacToe))


function ticTacToe() {
//run only if the box does not have an X or O
    if (this.childNodes[1].innerText !== "X" || this.childNodes[1].innerText !== "O") {
        //hides the dummy letter in the span
        this.childNodes[1].classList.toggle("hidden")
        //for even turns, set box to X
        if (turns % 2 === 0) {
            this.childNodes[1].innerText = "X"
        //for odd turns, set box to O
        } else {
            this.childNodes[1].innerText = "O"
        }
        //complete and add a turn
        turns += 1
        //after 5 turns (when 3 in a row is possible)
        if(turns >5){
            //set variables with value of each box
            var a1 = document.querySelector(".A1").childNodes[1].innerText;
            var a2 = document.querySelector(".A2").childNodes[1].innerText;
            var a3 = document.querySelector(".A3").childNodes[1].innerText;
            var b1 = document.querySelector(".B1").childNodes[1].innerText;
            var b2 = document.querySelector(".B2").childNodes[1].innerText;
            var b3 = document.querySelector(".B3").childNodes[1].innerText;
            var c1 = document.querySelector(".C1").childNodes[1].innerText;
            var c2 = document.querySelector(".C2").childNodes[1].innerText;
            var c3 = document.querySelector(".C3").childNodes[1].innerText;
            //see if there is 3 in a row
            if((a1===a2&&a2===a3) ||(b1===b2&&b2===b3)||(c1===c2&&c2===c3)||(a1===b1&&b1===c1)||(a2===b2&&b2===c2)||(a3===b3&&b3===c3)||(a1===b2&&b2===c3)||(a3===b2&&b2===c1)){
                //set you won text
            document.querySelector("h2").innerText="You won!"
        }
        }
    }
}

//winning function
//iterate through all boxes
//keep track of box name and x, o, ""
//if it has an x or o
    //if they are in a row
    //win











