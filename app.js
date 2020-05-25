// Variables
var clicker = 0,
    selectedNumbers = [],
    box = document.getElementsByClassName("box"),
    playerOne = document.getElementById("playerOne"),
    playerTwo = document.getElementById("playerTwo"),
    winnerAlert = document.getElementById("winnerAlert"),
    winnerText = document.getElementById("winnerText"),
    restart = document.getElementById("restart"),
    start = document.getElementById("start"),
    pOne = document.getElementById("firstPlayer"),
    pTwo = document.getElementById("scndPlayer"),
    gameBox = document.getElementById("gameBox"),
    info = document.getElementById("info"),
    pOneSpan = document.getElementById("playerOne"),
    pTwoSpan = document.getElementById("playerTwo"),
    sound = document.getElementById("sound"),
    win = document.getElementById("win"),
    tie = document.getElementById("tie"),
    playerOneName = "",
    playerTwoName = "",
    winnerName = "",
    firstTouch = true,
    savedObject = {
        one: null,
        two: null,
        three: null,
        four: null,
        five: null,
        six: null,
        seven: null,
        eight: null,
        nine: null
    };

// Actual Game Function

var testClick = num => {
    selectedNumbers.push(num);
    var item = document.getElementById(num);
    if (item) {
        switch (num) {
            case 1:
                savedObject.one = num;
                break;
            case 2:
                savedObject.two = num;
                break;
            case 3:
                savedObject.three = num;
                break;
            case 4:
                savedObject.four = num;
                break;
            case 5:
                savedObject.five = num;
                break;
            case 6:
                savedObject.six = num;
                break;
            case 7:
                savedObject.seven = num;
                break;
            case 8:
                savedObject.eight = num;
                break;
            case 9:
                savedObject.nine = num;
                break;
        }
        clicker++;
        console.log(clicker);
        if (clicker > 9) {
            return;
        }
        if (clicker % 2 !== 0) {
            winnerName = playerOneName;
            item.innerText = "X";
            item.style.color = "green";
            playerOne.style.color = "black";
            playerTwo.style.color = "red";
        } else {
            item.innerText = "0";
            winnerName = playerTwoName;
            item.innerText = "0";
            item.style.color = "red";
            playerOne.style.color = "green";
            playerTwo.style.color = "black";
        }
        if (clicker > 4) {
            checkWinner(
                savedObject.one,
                savedObject.two,
                savedObject.three,
                winnerName
            );
            checkWinner(
                savedObject.one,
                savedObject.four,
                savedObject.seven,
                winnerName
            );
            checkWinner(
                savedObject.one,
                savedObject.five,
                savedObject.nine,
                winnerName
            );
            checkWinner(
                savedObject.two,
                savedObject.five,
                savedObject.eight,
                winnerName
            );
            checkWinner(
                savedObject.three,
                savedObject.five,
                savedObject.seven,
                winnerName
            );
            checkWinner(
                savedObject.three,
                savedObject.six,
                savedObject.nine,
                winnerName
            );
            checkWinner(
                savedObject.seven,
                savedObject.eight,
                savedObject.nine,
                winnerName
            );
            checkWinner(
                savedObject.four,
                savedObject.six,
                savedObject.five,
                winnerName
            );
        }
        item.removeAttribute("id");
    }
};

// Winner Function
var checkWinner = (i, j, n, playerName) => {
    sound.pause();
    let finish = false;
    if (i && j && n) {
        if (
            box[i - 1].innerHTML === box[j - 1].innerHTML &&
            box[j - 1].innerHTML === box[n - 1].innerHTML
        ) {
            finish = true;
            winnerText.innerHTML = "winner is " + playerName;
            winnerAlert.style.display = "block";
            win.play();
            return;
        }
        if (clicker >= 9 && !finish) {
            winnerText.innerHTML = "Tie";
            winnerAlert.style.display = "block";
            tie.play();
            return;
        }
    }
};

var startEffect = () => {
    for (let i = 0; i < 9; i++) {
        let time = i * 70;
        box[i].style.transition = time + "ms";
        setTimeout(() => {
            box[i].style.opacity = "1";
        }, time);
    }
};

// Buttons
start.addEventListener("click", () => {
    if (pOne.value === "") {
        pTwo.style.border = "none";
        pOne.style.border = "1px solid red";
        return;
    }
    if (pTwo.value === "") {
        pOne.style.border = "none";
        pTwo.style.border = "1px solid red";
        return;
    }
    sound.play();
    startEffect();
    playerOneName = pOne.value;
    playerTwoName = pTwo.value;
    pOneSpan.innerHTML = pOne.value;
    pTwoSpan.innerHTML = pTwo.value;
    pOne.style.border = "none";
    pTwo.style.border = "none";
    info.style.display = "none";
    gameBox.style.display = "block";
});

restart.addEventListener("click", () => {
    location.reload();
});