// IMAGES
const BATSU = "../../resource/img/icon/mark_batsu.png";
const MARU = "../../resource/img/icon/mark_maru.png";
const TIE = "../../resource/img/icon/tie.png";

// board values x o null
const STATE = Object.freeze({
    E: 0,
    X: 1,
    O: 2,
});

// sound stuff
const correct = new Audio('../../resource/sound/bell.mp3');
const wrong = new Audio('../../resource/sound/incorrect.mp3');
correct.preload = 'auto';
wrong.preload = 'auto';

// resource\sound\floraphonic-you-win-sequence-2-183949.mp3
// https://pixabay.com/sound-effects/search/win/
const winSound = new Audio('../../resource/sound/floraphonic-you-win-sequence-2-183949.mp3');
winSound.preload = 'auto';


/* tempalte

    {
        text: "",
        options: ["", "", "", ""],
        answer: ""
    }

*/


/*
012
345
678
*/

// tic tac toe win check list
const WIN = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [6, 4, 2] // diagnal

]


// check win 
const checkWin = (board) => {

    const checkOne = (i) => {
        let check = WIN[i];

        if(board[check[0]] == STATE.E){
            return false;
        }

        if(board[check[0]] != board[check[1]] || board[check[1]] != board[check[2]]){
            return false;
        }

        return true;
    }

    //console.log(board);

    let len = WIN.length;
    for(let i = 0; i < len; i++){
        if(checkOne(i)){
            return true;
        }
    }

    return false;
}

// mark 
const createImg = (mark) => {
    let img = document.createElement('img');
    img.className = "mark";
    img.src = (mark == STATE.X) ? BATSU : MARU;
    return img;
}

const getQuest = (level) => {
    switch(level){
        case 5:
            return N5;
        case 4:
            return N4;
        case 3:
            return N3;
        case 2:
            return P2;
        case 1:
            return N2;
        default:
            return N5
    }
}

function start() {
    // screens
    let questScrn = document.querySelector("#questScrn");
    let startScrn = document.querySelector("#startScrn");
    let endScrn = document.querySelector("#endScrn");

    // ui img
    let uiImg = document.querySelector("#uiImg");
    let endImg = document.querySelector("#endImg");

    // buttons / input
    let clsBtn = document.querySelector("#clsBtn");
    let batsuRadio =  document.querySelector("#batsuRadio");
    let level =  document.querySelector("#level");

    // get leve questions
    let nLevel = Number(level.value);
    let questPick = getQuest(nLevel).sort(() => Math.random() - 0.5);
    //console.log(questPick);

    // store tic tac board
    let board = Array.from({length: 9}, ()=>STATE.E);

    // current player x or o
    //console.log(batsuRadio);
    let player = (batsuRadio.checked) ? STATE.X : STATE.O;
    uiImg.src = (player == STATE.X) ? BATSU : MARU;

    let randList = questPick.sort(()=>Math.random() - 0.5).sort(()=>Math.random() - 0.5);
    //console.log(randList);

    // number of correct answers
    let count = 0;

    const showQuest = (quest, block, index)=>{
        //console.log(quest);
        questScrn.classList.remove('hide');
        let btnCon = document.querySelector("#btnCon");

        let questText = document.querySelector("#questText");
        questText.innerHTML = quest.text;

        btnCon.innerHTML = "";

        for(let i = 0; i < 4; i++){
            let btn = document.createElement('button');
            btn.innerHTML = quest.options[i];
            btnCon.appendChild(btn);

            btn.addEventListener('click', ()=>{
                //console.log(quest.answer, quest.options[i]);
                // answer is correct
                if(quest.answer == quest.options[i]){
                    //console.log("correct");
                    correct.currentTime = 0;
                    correct.play();

                    block.innerHTML = "";
                    // add mark to the board and the current player
                    block.appendChild(createImg(player));
                    // add this mark to the array as well
                    // do not use i
                    board[index] = player;
                    // close the quesiton screen
                    questScrn.classList.add('hide');
                    // disable the block click
                    block.disabled = true;
                    // correct answer add to turn
                    count+=1;
                }
                // answer is correct
                else {
                    //console.log("incorrect");
                    wrong.currentTime = 0;
                    wrong.play();
                    questScrn.classList.add('hide');
                }

                let win = checkWin(board);
                //console.log(win);
                console.log(count);
                // show end screen if win
                if(win){
                    winSound.currentTime = 0;
                    winSound.play();
                    // show end
                    setTimeout(() => {
                        endImg.src = (player == STATE.X) ? BATSU : MARU;
                        endScrn.classList.remove('hide');  
                    }, 1000);
                    
                }
                else if(count >= 9){
                    // tie no win
                    // show end
                    winSound.currentTime = 0;
                    winSound.play();
                    endImg.src = TIE;
                    setTimeout(() => {
                        endScrn.classList.remove('hide');  
                    }, 1000);
                }
                else {
                    // toggle to next player
                    player = (player == STATE.X) ? STATE.O : STATE.X;
                    uiImg.src = (player == STATE.X) ? BATSU : MARU;
                }
            });
        }
    }

    for (let i = 0; i < 9; i++) {
        let block = document.querySelector(`#block${i}`);

        let quest = randList[i];

        // question text
        let h2 = document.createElement('h3');
        h2.innerHTML = quest.text;
        // options text
        let text = document.createElement('p');
        text.innerHTML = Array.from(quest.options, (value)=>`<br>${value}`).join("");
        // add to block
        block.appendChild(h2);
        block.appendChild(text);


        block.addEventListener('click', () => {
            //console.log(quest);
            showQuest(quest, block, i);
        });
    }

    clsBtn.addEventListener("click", ()=>{
        questScrn.classList.add('hide');
    });

    // begin
    startScrn.classList.add('hide');
}

document.addEventListener('contextmenu', event => event.preventDefault());
