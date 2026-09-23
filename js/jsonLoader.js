// eiken question paths
const FIVE = "../../json/eiken_five.json";
const FOUR = "../../json/eiken_four.json";
const THREE = "../../json/eiken_three.json";
const PRE_TWO = "../../json/eiken_pretwo.json";
const PRE_TWO_PLUS = "../../json/eiken_pretwoplus.json";
const TWO = "../../json/eiken_two.json";


// load json
async function getData(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result.question;
    } catch (error) {
        console.error(error.message);
    }
}

// helper functions 

async function getFive() {
    return await getData(FIVE);
}

async function getFour() {
    return await getData(FOUR);
}

async function getThree() {
    return await getData(THREE);
}

async function getPTwo() {
    return await getData(PRE_TWO);
}

async function getPTwoPlus() {
    return await getData(PRE_TWO_PLUS);
}

async function getTwo() {
    return await getData(TWO);
}

const loadQuest = async (index) => {
    let vocab;
    switch (index) {
        case 0:
            vocab = await getFive();
            break;
        case 1:
            vocab = await getFour();
            break;
        case 2:
            vocab = await getThree();
            break;
        case 3:
            vocab = await getPTwo();
            break;
        case 4:
            vocab = await getPTwoPlus();
            break;
        case 5:
            getTwo();
            break;
        default:
            vocab = await getFive();
            break;
    }
    return vocab;
}