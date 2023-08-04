// Hàm để tạo mảng ngẫu nhiên không trùng lặp
function getRandomArray(arr, count) {
    if (count > arr.length) {
        throw new Error(
            "Số lượng phần tử ngẫu nhiên yêu cầu lớn hơn số phần tử trong mảng ban đầu."
        );
    }

    const shuffledArray = arr.slice(); // Tạo một bản sao của mảng ban đầu để không ảnh hưởng đến mảng gốc
    const randomArray = [];

    while (randomArray.length < count) {
        const randomIndex = Math.floor(Math.random() * shuffledArray.length);
        const selectedNumber = shuffledArray.splice(randomIndex, 1)[0]; // Lấy số ngẫu nhiên từ mảng ban đầu và xóa khỏi mảng

        randomArray.push(selectedNumber);
    }

    return randomArray;
}

// Tạo mảng ngẫu nhiên có 10 số từ mảng ban đầu
const data10Words = getRandomArray(dataWords, 10);

// ====================Tạo data các màn chơi======================
function getRandomUniqueElements(arr, count, firstElementIndex) {
    const result = [];
    const sourceIndexes = arr.map((_, index) => index);
    //Loại bỏ chỉ số đã lấy ra khỏi sourceIndexes để không lấy lại phần tử đó trong các lần lặp tiếp theo.
    let index = sourceIndexes[firstElementIndex];
    sourceIndexes.splice(firstElementIndex, 1);
    while (result.length < count) {
        const randomIndex = Math.floor(Math.random() * sourceIndexes.length);
        index = sourceIndexes[randomIndex];
        sourceIndexes.splice(randomIndex, 1);
        result.push(arr[index]);
    }

    return result;
}

function generateRandomArrays(sourceArray, lengthArr) {
    const resultArray = [];
    while (resultArray.length < lengthArr) {
        const firstElementIndex = Math.floor(
            Math.random() * sourceArray.length
        );
        const firstElement = sourceArray[firstElementIndex];

        // Kiểm tra xem phần tử đầu tiên đã được sử dụng trong mảng con trước đó chưa
        const isUsed = resultArray.some(
            (subArray) => subArray[0] === firstElement
        );
        if (!isUsed) {
            const randomElements = getRandomUniqueElements(
                sourceArray,
                3,
                firstElementIndex
            );
            const subArray = [firstElement, ...randomElements];
            resultArray.push(subArray);
        }
    }

    return resultArray;
}

let dataGame = generateRandomArrays(data10Words, 10);

// ==================hàm xáo trộn mảng===============
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// Hàm xáo trộn mảng sử dụng thuật toán Fisher-Yates Shuffle
function shuffleObjectArray(array) {
    const newArray = array.slice(); // Tạo một bản sao của mảng gốc
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function shuffleObjectArrayMultiTimes(arr, times){
    for(let i = 0; i < times; i++){
        arr = shuffleObjectArray(arr);
    }
    return arr;
}
// tạo data cho các màn game
let dataGame1 = dataGame;
let dataGame2 = shuffleObjectArrayMultiTimes(dataGame, 5);
console.log(dataGame1);
console.log(dataGame2);
// ==================game 1===============
let playScreen = document.querySelector(".playScreen");
let footer = document.querySelector("footer");
let correctAns = document.querySelector(".correctAns");
let btnContinues = document.querySelector(".btnContinues");
let clientAns; // câu trả lời mà người dung chọn
let answer; // đáp án chính xác của màn chơi
let showAns;
let status; // trạng thái đúng hay sai
let isWaiting = false;
let countGame1 = 0;
let countGame2 = 0;

function reset() {
    footer.classList.remove("true");
    footer.classList.remove("false");
    isWaiting = false;
    showAns = null;
}

// render game 1
function renderGame1() {
    let urlImg = dataGame1[countGame1][0].urlImg;
    let define = dataGame1[countGame1][0].define;
    let A = dataGame1[countGame1][0].word;
    let B = dataGame1[countGame1][1].word;
    let C = dataGame1[countGame1][2].word;
    let D = dataGame1[countGame1][3].word;
    showAns =
        dataGame1[countGame1][0].word + " : " + dataGame1[countGame1][0].define;
    //tạo mảng tmpDataWords để sáo trộn câu hỏi
    let tmpDataWords = [];
    tmpDataWords.push(A, B, C, D);
    tmpDataWords = shuffleArray(tmpDataWords);

    let templateGame1 = `<div class="game1">
    <div class="questionArea">
        <div class="leftSide">
            <div class="boxImgQues">
            <img
                src="${urlImg}"
                alt=""
                class="imgQues"
            />
            </div>
        </div>
        <div class="define "><p>${define}</p></div>
    </div>
    <div class="chooseArea">
        <div class="boxImg">
            <img src="./assets/img/anim1.gif" alt="">
            <p class="mes button-74">
                Please choose the word that matches the definition above</p>
        </div>
        <div class="boxChoose">
            <div class="line">
                <div class="sentance sentanceA button-54" onclick="chooseAns(this)">${tmpDataWords[0]}</div>
                <div class="sentance sentanceA button-54" onclick="chooseAns(this)">
                ${tmpDataWords[1]}
                </div>
            </div>
            <div class="line">
                <div class="sentance sentanceA button-54" onclick="chooseAns(this)">
                ${tmpDataWords[2]}
                </div>
                <div class="sentance sentanceA button-54" onclick="chooseAns(this)">
                ${tmpDataWords[3]}
                </div>
            </div>
        </div>
    </div>
</div>`;
    // xoá game cũ
    playScreen.innerHTML = "";
    // render ra màn hình
    playScreen.insertAdjacentHTML("afterbegin", templateGame1);
    correctAns.textContent = showAns;
    // Điều hướng khi bấm nút btnContinues thi chuyển sang game2()
    btnContinues.setAttribute("onclick", "game2()");
    //trả ra đáp án đúng của màn chơi và tăng màn chơi tiếp theo
    return dataGame1[countGame1++][0].word;
}

// render game 2
function renderGame2() {
    let urlImg = dataGame2[countGame2][0].urlImg;
    let question = dataGame2[countGame2][0].question;
    let A = dataGame2[countGame2][0].word;
    let B = dataGame2[countGame2][1].word;
    let C = dataGame2[countGame2][2].word;
    let D = dataGame2[countGame2][3].word;
    showAns =
        dataGame2[countGame2][0].word + " - " + dataGame2[countGame2][0].answer;
    //tạo mảng tmpDataWords để sáo trộn câu hỏi
    let tmpDataWords = [];
    tmpDataWords.push(A, B, C, D);
    tmpDataWords = shuffleArray(tmpDataWords);

    let templateGame1 = `<div class="game1">
    <div class="questionArea">
        <div class="leftSide">
            <div class="boxImgQues">
            <img
                src="${urlImg}"
                alt=""
                class="imgQues"
            />
            </div>
        </div>
        <div class="define "><p>${question}</p></div>
    </div>
    <div class="chooseArea">
        <div class="boxImg">
            <img src="./assets/img/anim2.gif" alt="">
            <p class="mes button-74">
            Please choose the missing word</p>
        </div>
        <div class="boxChoose">
            <div class="line">
                <div class="sentance sentanceA button-54" onclick="chooseAns(this)">${tmpDataWords[0]}</div>
                <div class="sentance sentanceA button-54" onclick="chooseAns(this)">
                ${tmpDataWords[1]}
                </div>
            </div>
            <div class="line">
                <div class="sentance sentanceA button-54" onclick="chooseAns(this)">
                ${tmpDataWords[2]}
                </div>
                <div class="sentance sentanceA button-54" onclick="chooseAns(this)">
                ${tmpDataWords[3]}
                </div>
            </div>
        </div>
    </div>
</div>`;
    // xoá game cũ
    playScreen.innerHTML = "";
    // render ra màn hình
    playScreen.insertAdjacentHTML("afterbegin", templateGame1);
    correctAns.textContent = showAns;
    // Điều hướng khi bấm nút btnContinues thi chuyển sang game1()
    btnContinues.setAttribute("onclick", "game1()");
    //trả ra đáp án đúng của màn chơi và tăng màn chơi tiếp theo
    return dataGame2[countGame2++][0].word;
}

function checkAns() {
    console.log(answer, clientAns);
    isWaiting = true;
    if (answer === clientAns) {
        footer.classList.add("true");
    } else {
        footer.classList.add("false");
    }
}

function game1() {
    reset();
    answer = renderGame1();
}
function game2() {
    reset();
    answer = renderGame2();
}

function chooseAns(elm) {
    let boxChoose = document.querySelector(".boxChoose");
    let list_Sentance = document.querySelectorAll(".sentance");
    if (isWaiting === false) {
        list_Sentance.forEach((sentance) => {
            sentance.classList.remove("active");
        });
        elm.classList.add("active");
        clientAns = elm.textContent.trim();
    }
}

window.addEventListener("load", () => {
    game1();
});
