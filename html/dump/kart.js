const CHAR_LIST = ["boo", "bowser", "coupa", "curby", "donkey-kong", "goomba", "inkling", "link", "luigi", "mario", "peach", "rosalina", "toad", "walauigi", "wario", "yoshi",];

// numbers
const NUMBERS = [
    "./res/img/number/one.png",
    "./res/img/number/two.png",
    "./res/img/number/three.png",
    "./res/img/number/four.png",
    "./res/img/number/five.png",
    "./res/img/number/six.png",
    "./res/img/number/seven.png",
    "./res/img/number/eight.png",
    "./res/img/number/nine.png",
];

const POS_LIST = [
    {
        "x": 0.06330275229357799,
        "y": 0.8694968553459119
    },
    {
        "x": 0.1596330275229358,
        "y": 0.889937106918239
    },
    {
        "x": 0.25963302752293577,
        "y": 0.8915094339622641
    },
    {
        "x": 0.3486238532110092,
        "y": 0.8883647798742138
    },
    {
        "x": 0.43302752293577984,
        "y": 0.8915094339622641
    },
    {
        "x": 0.5311926605504587,
        "y": 0.8867924528301887
    },
    {
        "x": 0.6165137614678899,
        "y": 0.8867924528301887,
        "jump": 8
    }, // 6
    {
        "x": 0.7009174311926606,
        "y": 0.8773584905660378
    },
    {
        "x": 0.7963302752293578,
        "y": 0.8522012578616353
    },
    {
        "x": 0.8743119266055046,
        "y": 0.7861635220125787
    },
    {
        "x": 0.9128440366972477,
        "y": 0.6871069182389937
    }, //10
    {
        "x": 0.8486238532110092,
        "y": 0.5911949685534591
    },
    {
        "x": 0.7642201834862385,
        "y": 0.5691823899371069
    },
    {
        "x": 0.6568807339449542,
        "y": 0.5691823899371069
    },
    {
        "x": 0.5577981651376147,
        "y": 0.6147798742138365
    },
    {
        "x": 0.47706422018348627,
        "y": 0.6556603773584906
    }, //15
    {
        "x": 0.3871559633027523,
        "y": 0.699685534591195,
        "jump": 8
    }, //16
    {
        "x": 0.29174311926605506,
        "y": 0.7311320754716981
    },
    {
        "x": 0.1944954128440367,
        "y": 0.7389937106918238
    },
    {
        "x": 0.11009174311926606,
        "y": 0.7169811320754716
    },
    {
        "x": 0.062385321100917435,
        "y": 0.6053459119496856
    }, // 20
    {
        "x": 0.11467889908256881,
        "y": 0.49056603773584906
    },
    {
        "x": 0.20550458715596331,
        "y": 0.4449685534591195
    },
    {
        "x": 0.29908256880733947,
        "y": 0.4591194968553459
    },
    {
        "x": 0.38623853211009174,
        "y": 0.4811320754716981
    },
    {
        "x": 0.4743119266055046,
        "y": 0.4968553459119497
    },
    {
        "x": 0.5715596330275229,
        "y": 0.47327044025157233
    },
    {
        "x": 0.6045871559633027,
        "y": 0.3584905660377358
    },
    {
        "x": 0.5321100917431193,
        "y": 0.2861635220125786
    },
    {
        "x": 0.43394495412844036,
        "y": 0.2783018867924528,
        "jump": 9
    }, // 29
    {
        "x": 0.3412844036697248,
        "y": 0.2830188679245283
    }, // 30
    {
        "x": 0.26238532110091745,
        "y": 0.29874213836477986
    },
    {
        "x": 0.17889908256880735,
        "y": 0.3081761006289308
    },
    {
        "x": 0.08440366972477065,
        "y": 0.2751572327044025
    },
    {
        "x": 0.0853211009174312,
        "y": 0.1509433962264151
    },
    {
        "x": 0.1706422018348624,
        "y": 0.08176100628930817
    },
    {
        "x": 0.25045871559633026,
        "y": 0.06918238993710692
    },
    {
        "x": 0.3330275229357798,
        "y": 0.05817610062893082
    },
    {
        "x": 0.42110091743119266,
        "y": 0.055031446540880505
    },
    {
        "x": 0.5128440366972477,
        "y": 0.04716981132075472
    },
    {
        "x": 0.6027522935779817,
        "y": 0.06132075471698113
    }, //40
    {
        "x": 0.6889908256880733,
        "y": 0.059748427672955975
    },
    {
        "x": 0.789908256880734,
        "y": 0.09276729559748427
    },
    {
        "x": 0.8761467889908257,
        "y": 0.1619496855345912
    },
    {
        "x": 0.9146788990825688,
        "y": 0.27044025157232704
    },
    {
        "x": 0.9027522935779817,
        "y": 0.3836477987421384
    },
    {
        "x": 0.818348623853211,
        "y": 0.41509433962264153
    },
    {
        "x": 0.7412844036697248,
        "y": 0.33962264150943394
    },
    {
        "x": 0.6880733944954128,
        "y": 0.22169811320754718
    } // 48
];

const ITEMS = [
    "./res/img/item/blue shell.png",
    "./res/img/item/bullet bill.png",
    "./res/img/item/gold mushroom.png",
    "./res/img/item/lightning.png",
    "./res/img/item/mushroom.png",
    "./res/img/item/tripple mushroom.png",
    "./res/img/item/green shell.png"
];


const START = POS_LIST[0];

const MOVE_TIME = 1000;
const STEP = 30;

// correct / incorrect sound
const correct = new Audio('../../resource/sound/bell.mp3');
const wrong = new Audio('../../resource/sound/incorrect.mp3');
correct.preload = 'auto';
wrong.preload = 'auto';
// sound stuff
const uiClick = new Audio('./res/sound/uiClick.mp3');
uiClick.preload = 'auto';
const playClick = () => { uiClick.currentTime = 0.5; uiClick.play(); };
// change page audio
const pageChange = new Audio('./res/sound/litupsubway-ui-open-sfx-513358.mp3');
pageChange.preload = 'auto';
const changePagePlay = () => { pageChange.currentTime = 0; pageChange.play(); };

const winSound = new Audio('../../resource/sound/floraphonic-you-win-sequence-2-183949.mp3');
winSound.preload = 'auto';

// game\english-kart\res\sound\floraphonic-casual-click-pop.mp3
const pop = new Audio('./res/sound/floraphonic-casual-click-pop.mp3');
pop.preload = 'auto';

const playPop = () => { pop.currentTime = 0; pop.play(); };

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

// get the selected eiken level
const getLevel = () => {
    for (let i = 0; i < LIST.length; i++) {
        let input = document.querySelector(`#level${i}`);
        if (input.checked) {
            return i;
        }
    }
    return -1;
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

// make character object
const makeChar = (name) => {
    let img = new Image();
    img.src = `./res/img/character/${name}.png`;

    console.log(name);
    let racer = {
        name,
        pos: 0,
        x: START.x, y: START.y,
        img
    };

    return racer;
}

/*
start here
entrance point to the program to game
*/


window.onload = function () {
    // varaibles
    let racers = [];
    let teamNumb = 0;
    let index = 0; // current player index
    // the copy of the questions to use
    let questions;
    // store which questions to use
    let selectLevel;

    // canvas / drawing variables and handlers
    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext('2d');
    let backImg = document.querySelector("#backImg");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let dim = (window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight) * 0.08;

    // anim for drawing characters
    const anim = () => {
        ctx.fillStyle = 'rgb(255, 255, 255, 0.1)';
        ctx.fillRect(0, 0, innerWidth, innerHeight);

        ctx.drawImage(backImg, 0, 0, this.innerWidth, this.innerHeight);

        racers.forEach((char) => {
            let x = char.x * canvas.width - dim / 2;
            let y = char.y * canvas.height - dim / 2;
            ctx.drawImage(char.img, x, y, dim, dim);
        });
        window.requestAnimationFrame(anim);
    }

    // ui screens
    let startBox = document.querySelector("#startBox");
    let numberBox = document.querySelector("#numberBox");
    let charBox = document.querySelector("#charBox");
    let diceBox = document.querySelector("#diceBox");
    let itemBox = document.querySelector("#itemBox");
    let questBox = document.querySelector("#questBox");
    let levelBox = document.querySelector("#levelBox");
    //let __ = document.querySelector("#__");

    // move a character to the next location
    const moveChar = (numb, pickIndex) => {
        if (numb == 0) {
            showDice();
            return alert('move zero no ok');
        }

        const passingCar = new Audio('./res/sound/freesound_community-engine-47745.mp3');
        passingCar.preload = 'auto';
        passingCar.loop = true;

        const stop = new Audio('./res/sound/stop.mp3');
        stop.preload = 'auto';

        // function to create list of sub points between two points
        // start : start index, end : end index
        const pathMaker = (start, end) => {

            // list of positions
            let posList = [];

            //console.log("index: ", start, end);

            // start pos
            let sPos = POS_LIST[start];

            // end post
            let ePos = POS_LIST[end];

            let deltaX = (ePos.x - sPos.x) / STEP;
            let deltaY = (ePos.y - sPos.y) / STEP;

            // add start position
            moveList.push(sPos);

            for (let i = 0; i < STEP; i++) {
                let x = sPos.x + deltaX * i;
                let y = sPos.y + deltaY * i;
                moveList.push({
                    x, y
                });
            }

            return posList;
        }

        let char = racers[pickIndex];

        let moveList = [];

        // the next index after move
        let nextIndex = char.pos + numb;

        // next position
        if (nextIndex < 0) {
            nextIndex = 0;
        }

        // check if greater than level bound
        if (nextIndex >= POS_LIST.length) {
            nextIndex = POS_LIST.length - 1;
        }

        if (nextIndex == char.pos) {
            return console.log('no move');
        }

        while (char.pos != nextIndex) {
            // get the direction either 
            let dir = (nextIndex > char.pos) ? 1 : -1;

            let sIndex = char.pos;
            let eIndex = char.pos + dir;
            let path = pathMaker(sIndex, eIndex);
            moveList.concat(path);

            // move towards the intended index
            char.pos += dir;
        }

        passingCar.currentTime = 0;
        passingCar.play();

        // store if user lands on a bridge
        let bridge = false;


        let moveIndex = 0;
        let waitTime = Math.abs(numb) * MOVE_TIME / moveList.length;

        // check if on bridge
        if (POS_LIST[char.pos].jump != null) {
            bridge = true;
            let jump = POS_LIST[char.pos].jump;
            let start = char.pos;
            let end = char.pos + jump;
            let path = pathMaker(start, end);
            moveList.concat(path);
            char.pos += jump;
        }

        let handle = setInterval(() => {
            let pos = moveList[moveIndex];
            char.x = pos.x;
            char.y = pos.y;
            moveIndex++;

            if (moveIndex >= moveList.length) {
                // finish
                clearInterval(handle);
                passingCar.pause();
                stop.currentTime = 18;
                stop.play();

                // check win
                if (racers[index].pos >= POS_LIST.length - 1) {

                    // play win sound
                    winSound.currentTime = 0;
                    winSound.play();

                    console.log('win');
                    document.querySelector("#endBox").classList.remove('hide');
                    console.log(racers[index].name);
                    document.querySelector("#endWinImg").src = `./res/img/character/${racers[index].name}.png`;
                }
            }
        }, waitTime);

        return bridge;
    }

    /*
    start screen
    */
    document.querySelector('#startBtn').addEventListener('click', () => {
        playClick();
        startBox.classList.add('hide');
        levelBox.classList.remove('hide');
        changePagePlay();
    });

    /*
    level select
    */
    document.querySelector('#lvlEntrBtn').addEventListener('click', () => {
        let level = getLevel();
        console.log(level);

        if (level == -1) {
            return;
        }

        selectLevel = LIST[level];
        questions = JSON.parse(JSON.stringify(selectLevel)).sort(() => Math.random() - 0.5);

        playClick();
        levelBox.classList.add('hide');
        numberBox.classList.remove('hide');
        changePagePlay();
    });

    /*
    number screen
    */
    document.querySelector("#nmbrEntrBtn").addEventListener('click', () => {
        teamNumb = getNumb();

        if (teamNumb == -1) {
            return;
        }

        playClick();

        numberBox.classList.add('hide');
        charBox.classList.remove('hide');
        changePagePlay();
    });



    /*
    character select screen
    */
    document.querySelector("#charEntrBtn").addEventListener("click", () => {
        let pick = getPick();
        if (pick == -1) {
            return;
        }
        let char = makeChar(pick);

        playClick();
        racers.push(char);

        document.querySelector("#selectIndexNumber").src = NUMBERS[racers.length];

        if (racers.length >= teamNumb) {
            charBox.classList.add('hide');
            diceBox.classList.remove('hide');
            changePagePlay();
        }

    });


    /*
    dice screen
    */

    let rollBtn = document.querySelector("#rollBtn");
    //diceIndexNumber for showing with player turn it is
    let diceIndexNumber = document.querySelector("#diceIndexNumber");
    let diceResultImg = document.querySelector("#diceResultImg");
    let rollNextBtn = document.querySelector("#rollNextBtn");


    /*
    quest screen is also here
    */

    // set the active player
    diceIndexNumber.src = NUMBERS[index];

    let rnd;

    rollBtn.addEventListener('click', () => { // fix here
        rnd = Math.floor(Math.random() * 9);
        diceResultImg.src = NUMBERS[rnd];
        rollBtn.classList.add('hide');
        rollNextBtn.classList.remove('hide');
        changePagePlay();
    });

    rollNextBtn.addEventListener('click', () => {
        rollNextBtn.classList.add('hide');
        rollBtn.classList.remove('hide');
        diceBox.classList.add('hide');
        changePagePlay();
        diceResultImg.src = "./res/img/item/dice.png";

        // move selected character
        let bridge = moveChar(rnd + 1, index);
        let time = (rnd + 1) * MOVE_TIME;
        if (bridge) {
            time += MOVE_TIME;
        }

        setTimeout(() => {
            // show quest box
            questBox.classList.remove('hide');
            // make the question 
            let questText = document.querySelector('#questText');
            let questBtnCon = document.querySelector('#questBtnCon');
            let nextBtn = document.querySelector('#nextBtn');
            let itemBtn = document.querySelector('#itemBtn');

            // use each question once before repeating them
            let select = questions.splice(Math.floor(Math.random() * questions.length), 1)[0];
            // reload when empty
            if (questions.length <= 0) {
                questions = JSON.parse(JSON.stringify(selectLevel)).sort(() => Math.random() - 0.5);
            }

            // make them invisible so can press button
            itemBtn.classList.add('hide');
            nextBtn.classList.add('hide');


            questText.innerHTML = select.text;
            let btnList = [];
            questBtnCon.innerHTML = "";
            // set question text and quesiton buttons
            for (let i = 0; i < 4; i++) {
                let btn = document.createElement('button');
                btn.innerHTML = select.options[i];
                questBtnCon.appendChild(btn);
                btnList.push(btn);

                btn.addEventListener('click', () => {
                    btnList.forEach((obj) => { obj.disabled = true; });
                    questText.innerHTML = select.text.replace("( )", `(${select.answer})`);
                    if (select.options[i] == select.answer) {
                        correct.currentTime = 0;
                        correct.play();
                        itemBtn.classList.remove('hide');
                    }
                    else {
                        wrong.currentTime = 0;
                        wrong.play();
                        nextBtn.classList.remove('hide');
                    }
                });
            }
        }, time);
    });


    // next players turn no item
    nextBtn.addEventListener('click', () => {
        questBox.classList.add('hide');
        // next turn show dice
        diceBox.classList.remove('hide');
        // no item
        index++;
        if (index >= racers.length) {
            index = 0;
        }
        diceIndexNumber.src = NUMBERS[index];
        diceBox.classList.remove('hide');
        changePagePlay();
    });

    // get an item and then go to next players turn
    itemBtn.addEventListener('click', () => {
        questBox.classList.add('hide');
        itemBox.classList.remove('hide');
        changePagePlay();
    });


    /*
    item screen
    */
    let getItemBtn = document.querySelector("#getItemBtn");
    let nextItemBtn = document.querySelector("#nextItemBtn");
    let powerUpImg = document.querySelector("#powerUpImg");

    let itmIndex;

    getItemBtn.addEventListener('click', () => {
        getItemBtn.classList.add('hide');
        nextItemBtn.classList.remove('hide');
        itmIndex = Math.floor(Math.random() * ITEMS.length);
        powerUpImg.src = ITEMS[itmIndex];
    });

    nextItemBtn.addEventListener('click', () => {
        itemBox.classList.add('hide');
        getItemBtn.classList.remove('hide');
        nextItemBtn.classList.add('hide');
        powerUpImg.src = './res/img/item/question.png';
        changePagePlay();

        let wait = 0;
        let max;
        let bridge;

        switch (itmIndex) {
            case 0: //blue shell
                max = 0;
                racers.forEach(racer => {
                    if (racer.pos > max) {
                        max = racer.pos;
                    }
                });
                racers.forEach((racer, rIndex) => {
                    if (racer.pos == max) {
                        bridge = moveChar(-3, rIndex);
                    }
                });

                wait = 3 * MOVE_TIME;

                break;
            case 1: // bullet bill
                max = 0;
                racers.forEach(racer => {
                    if (racer.pos > max) {
                        max = racer.pos;
                    }
                });
                let dif = max - racers[index].pos;
                // if in first place only move one
                if (dif <= 0) {
                    dif = 1;
                }
                bridge = moveChar(dif, index);
                wait = dif * MOVE_TIME;
                break;
            case 2: // gold mushroom
                bridge = moveChar(5, index);
                wait = 5 * MOVE_TIME;
                break;
            case 3: // lightning
                racers.forEach((racer, rIndex) => {
                    if (index != rIndex) {
                        bridge = moveChar(-1, rIndex);
                    }
                });
                wait = MOVE_TIME;
                break;
            case 4: // mushroom
                bridge = moveChar(1, index);
                wait = MOVE_TIME;
                break;
            case 5: // tripple mushroom
                bridge = moveChar(3, index);
                wait = 3 * MOVE_TIME;
                break;
            case 6: // green shell
                bridge = moveChar(-1, index);
                wait = MOVE_TIME;
                break;
            default:
                bridge = moveChar(10, index);
                wait = 10 * MOVE_TIME;
                break;
        }

        if (bridge) {
            wait += MOVE_TIME;
        }

        wait += MOVE_TIME;

        setTimeout(() => {
            console.log('item');
            index++;
            if (index >= racers.length) {
                index = 0;
            }
            diceIndexNumber.src = NUMBERS[index];
            diceBox.classList.remove('hide');
            changePagePlay();
        }, wait);
    });


    // start anim
    window.requestAnimationFrame(anim);
}

// no right click 
document.addEventListener('contextmenu', event => event.preventDefault());