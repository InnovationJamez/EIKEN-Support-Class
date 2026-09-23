const DIM = 5;

const BR = "battle-row";
const BD = "battle-div";

const FLIP_CARD = "flip-card";
const FLIP_CARD_INNER = "flip-card-inner";
const FLIP_CARD_FRONT = "flip-card-front";
const FLIP_CARD_BACK = "flip-card-back";
const FLIP = "flip";

const QUESTI_BLOCK = "../../img/item/question.png";

const CHAR_LIST = ["boo", "bowser", "coupa", "curby", "donkey-kong", "goomba", "inkling", "link", "luigi", "mario", "peach", "rosalina", "toad", "walauigi", "wario", "yoshi",];
const CHAR_BASE = "../../img/character/";

// numbers
const NUMBERS = [
    "one.png",
    "two.png",
    "three.png",
    "four.png",
    "five.png",
    "six.png",
    "seven.png",
    "eight.png",
    "nine.png",
];

// sound stuff
// correct / incorrect sound
const correct = new Audio('../../sound/bell.mp3');
correct.preload = 'auto';
const playCorrect = () => { correct.currentTime = 0; correct.play(); };

const wrong = new Audio('../../sound/incorrect.mp3');
const playWrong = () => { wrong.currentTime = 0; wrong.play(); };
wrong.preload = 'auto';

const uiClick = new Audio('../../sound/click.mp3');
uiClick.preload = 'auto';
const playClick = () => { uiClick.currentTime = 0.5; uiClick.play(); };

// change page audio
const pageChange = new Audio('../../sound/toggle.mp3');
pageChange.preload = 'auto';
const changePagePlay = () => { pageChange.currentTime = 0; pageChange.play(); };

// go agian sound
const goAgain = new Audio('../../sound/correct.mp3');
goAgain.preload = 'auto';
const goAgainPlay = () => { goAgain.currentTime = 0; goAgain.play(); };


// pop sound effect
const pop = new Audio('../../sound/pop.mp3');
pop.preload = 'auto';
const playPop = () => { pop.currentTime = 0; pop.play(); };

const createCards = () => {
    let battleBoard = document.querySelector("#battleBoard");

    let rowHeight = 100 / DIM;// also div width
    let styleText = `${rowHeight.toFixed(2)}%`;

    // store the cards to control later
    let cards = [];

    for (let i = 0; i < DIM; i++) {
        let row = document.createElement('div');
        row.classList.add(BR);
        row.style.height = styleText;
        for (let j = 0; j < DIM; j++) {

            let div = document.createElement('div');
            div.style.width = styleText;
            div.classList.add(BD);

            // make a flip card
            let flipCard = document.createElement('div');
            flipCard.classList.add(FLIP_CARD);
            let flipCardInner = document.createElement('div');
            flipCardInner.classList.add(FLIP_CARD_INNER);
            let flipCardFront = document.createElement('div');
            flipCardFront.classList.add(FLIP_CARD_FRONT);
            let flipCardBack = document.createElement('div');
            flipCardBack.classList.add(FLIP_CARD_BACK);

            // front img
            let frontImg = document.createElement('img');
            frontImg.src = QUESTI_BLOCK;
            frontImg.draggable = false;
            frontImg.classList.add('flip-img');

            // back img
            let backImg = document.createElement('img');
            backImg.src = `${CHAR_BASE}${CHAR_LIST[Math.floor(Math.random() * CHAR_LIST.length)]}.png`;
            backImg.draggable = false;
            backImg.classList.add('flip-img');


            // add img to front /back
            flipCardFront.appendChild(frontImg);
            flipCardBack.appendChild(backImg);


            // add front and back to inner
            flipCardInner.appendChild(flipCardFront);
            flipCardInner.appendChild(flipCardBack);

            // add inner to flip card
            flipCard.appendChild(flipCardInner);

            // add flip card to div
            div.appendChild(flipCard);

            // add div to row
            row.appendChild(div);

            // add flip card to list
            cards.push({ outer: flipCard, img: backImg });
        }
        battleBoard.appendChild(row);
    }

    // return the cards 
    return cards;
}

// get the selected eiken level
const getLevel = () => {
    let len = 6;
    for (let i = 0; i < len; i++) {
        let input = document.querySelector(`#level${i}`);
        if (input.checked) {
            return i;
        }
    }
    return -1;
}


const getNumb = () => {
    for (let i = 0; i < 5; i++) {
        let numb = i + 2;
        let input = document.querySelector(`#teamNumb${numb}`);
        if (input.checked) {
            return numb;
        }
    }
    return -1;
}

// check if the tile is surounded by another player tiles
const checkSuround = (board, index, playerIndex) => {

    // create list of points to check 
    // if point is off the board ignore it!
    let checkPoints = [];

    // check up 
    if(index + DIM < board.length){
        checkPoints.push(board[index + DIM]);
    }


    // check down
    if(index - DIM >= 0){
        checkPoints.push(board[index - DIM]);
    }

    // check right make sure to not go out of bounds
    if((index % DIM) + 1 < DIM){
        checkPoints.push(board[index + 1]);
    }

    // check left if on left edge do not add 
    // it will look at the prior row
    if((index % DIM) - 1 >= 0){
        checkPoints.push(board[index - 1]);
    }

    if(checkPoints.length < 2){
        return false;
    }

    // player already has this tile no need to take it 
    if(board[index] == playerIndex){
        return false;
    }

    //console.log(index);
    //console.log(checkPoints);

    // compare each point to the next and skip last 
    for (let index = 0; index < checkPoints.length - 1; index++) {
        if(checkPoints[index] != checkPoints[index + 1]){
            return false;
        }
    }

    return true;
}

// when tile is taken check if this has 
// caused any adjasent tiles to be surounded
const checkBorders = (board, index, playerIndex) => {
    // store list of tiles that are surounded
    let taken = [];

    // check up 
    if (index + DIM < board.length && checkSuround(board, index + DIM, playerIndex)) {
        taken.push(index + DIM);
    }
    // check down 
    if (index - DIM >= 0 && checkSuround(board, index - DIM, playerIndex)) {
        taken.push(index - DIM);
    }
    // check right 
    if ((index % DIM) + 1 < DIM && checkSuround(board, index + 1, playerIndex)) {
        taken.push(index + 1);
    }
    // check left 
    if ((index % DIM) - 1 >= 0 && checkSuround(board, index - 1, playerIndex)) {
        taken.push(index - 1);
    }
    return taken;
}

// get which character is selected
const getPick = () => {
    for (let i = 0; i < CHAR_LIST.length; i++) {
        let char = CHAR_LIST[i];
        let check = document.querySelector(`#${char}`);
        if (check.checked) {
            check.disabled = true; check.checked = false; return char;
        }
    }
    return -1;
}

window.onload = async function () {
    // list of player progress
    let players = [];

    // busy variable to stop presses during flipping and animation
    let busy = false;

    // number of teams
    let teamNumb;

    // player index
    let playerIndex = 0;

    // quest list
    let questList = [];

    // create grid to track board
    let board = Array.from({ length: DIM * DIM }, () => -1);

    // buttons
    let startBtn = document.querySelector("#startBtn");
    let lvlEntrBtn = document.querySelector("#lvlEntrBtn");
    let nmbrEntrBtn = document.querySelector("#nmbrEntrBtn");
    let charEntrBtn = document.querySelector("#charEntrBtn");

    // battle ui
    let playerName = document.querySelector("#playerName");
    let playerImg = document.querySelector("#playerImg");
    let playerTable = document.querySelector("#playerTable");
    let clsBtn = document.querySelector("#clsBtn");

    const updateUI = () => {
        let activePlayer = players[playerIndex];
        let path = `${CHAR_BASE}${activePlayer.char}.png`;
        playerImg.src = path;
        playerName.innerHTML = activePlayer.char;
        players.forEach(player => {
            player.scoreText.innerHTML = player.score;
        });
    }

    var cards = createCards();

    cards.forEach((card, index) => {
        card.outer.addEventListener('click', () => {

            // if place taken return
            if (board[index] != -1) {
                return;
            }

            if(busy){
                return;
            }

            busy = true;

            document.querySelector("#questBox").classList.remove('hide');
            let quest = questList[index];
            let questText = document.querySelector("#questText");
            let questBtnCon = document.querySelector("#questBtnCon");
            questText.innerHTML = quest.text;

            questBtnCon.innerHTML = "";
            quest.options.forEach(opt => {
                let btn = document.createElement('button');
                btn.innerHTML = opt;
                questBtnCon.appendChild(btn);

                // store if the player can go a second time
                let goAgain = false;

                btn.addEventListener('click', () => {
                    if (opt == quest.answer) { // correct

                        // create list of tiles to flip
                        let flipList = [];
                        let activePlayer = players[playerIndex];
                        activePlayer.score++;
                        playCorrect();
                        board[index] = playerIndex;
                        flipList.push(card);

                        // find which tiles are surounded and will be taken 
                        let taken = checkBorders(board, index, playerIndex);

                        if (taken.length > 0) {
                            taken.forEach(takenIndex => {
                                let priorIndex = board[takenIndex];
                                board[takenIndex] = playerIndex;
                                // reduce score if tile taken from another player
                                if(priorIndex != -1){
                                   players[priorIndex].score--; 
                                }
                                // add card to flip list
                                flipList.push(cards[takenIndex]);
                                // increment current player score
                                activePlayer.score++;
                            });
                        }

                        // player has taken more than one tile in a turn
                        if(flipList.length > 1){
                            // player will go one more time!
                            goAgain = true;
                            console.log(`${activePlayer.char} take another turn`);
                        }

                        let path = `${CHAR_BASE}${activePlayer.char}.png`;
                        let flipIndex = 0;
                        let handler = setInterval(()=>{
                            let card = flipList[flipIndex];
                            card.outer.classList.remove('flip');
                            setTimeout(()=>{
                                card.img.src = path;
                                card.outer.classList.add('flip');
                            }, 400)
                            playPop();
                            flipIndex++;
                            if(flipIndex >= flipList.length){
                                clearInterval(handler);
                                busy = false;
                                if(goAgain){
                                    document.querySelector('#spImg').src = `${CHAR_BASE}${activePlayer.char}.png`;
                                    document.querySelector('#spText').innerHTML = `Go again ${activePlayer.char}!`;
                                    document.querySelector('#specialScreen').classList.remove('hide');
                                    setTimeout(()=>{
                                        document.querySelector('#specialScreen').classList.add('hide');
                                    }, 800);
                                    goAgainPlay();
                                }
                            }
                        }, 800);
                    }
                    else { // incorrect
                        playWrong();
                        busy = false;
                    }
                    document.querySelector("#questBox").classList.add('hide');
                    // incremen to next player unless player goes again
                    if(goAgain == false){
                        playerIndex += 1;
                        if (playerIndex >= players.length) {
                            playerIndex = 0;
                        }                        
                    }
                    // show change
                    updateUI();
                });
            });
        });
    });

    // event listeners
    startBtn.addEventListener('click', () => {
        playClick();
        document.querySelector("#start").classList.add('hide');
        document.querySelector("#levelBox").classList.remove('hide');
    });

    clsBtn.addEventListener('click', ()=>{
        busy = false;
        document.querySelector("#questBox").classList.add('hide');
    });

    lvlEntrBtn.addEventListener('click', async () => {
        let level = getLevel();
        if (level == -1) {
            return;
        }
        //     let data = await getData(FIVE);
        //     console.log(data);
        let quest = await loadQuest(level);
        questList = quest.sort(()=>Math.random() - 0.5);
        playClick();
        document.querySelector("#levelBox").classList.add('hide');
        document.querySelector("#numberBox").classList.remove('hide');
    });

    nmbrEntrBtn.addEventListener('click', async () => {
        teamNumb = getNumb();
        if (teamNumb <= 0) {
            return;
        }
        playClick();
        document.querySelector("#numberBox").classList.add('hide');
        document.querySelector("#charBox").classList.remove('hide');
    });

    charEntrBtn.addEventListener('click', async () => {
        let pick = getPick();
        if (pick == -1) {
            return;
        }
        playClick();
        players.push({
            char: pick,
            score: 0
        });
        document.querySelector("#selectIndexNumber").src = "../../img/number/" + NUMBERS[players.length];
        if (players.length >= teamNumb) {
            document.querySelector("#charBox").classList.add('hide');
            // create player table
            players.forEach(player => {
                let tRow = document.createElement('tr');
                let nameData = document.createElement('td');
                nameData.innerHTML = player.char;
                let scoreData = document.createElement('td');
                scoreData.innerHTML = 0;
                tRow.appendChild(nameData);
                tRow.appendChild(scoreData);
                playerTable.appendChild(tRow);
                player.scoreText = scoreData;
            });
            // update ui after the html element is created
            updateUI();
        }
    });
}

document.addEventListener('contextmenu', event => event.preventDefault());