const vocabData = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(response => response.json())
        .then(object => lessons(object.data))
};

//spinner
const manageSpinner = (status) => {
    if (status == true) {
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("level-show").classList.add("hidden")
    }
    else {
        document.getElementById("spinner").classList.add("hidden")
        document.getElementById("level-show").classList.remove("hidden")
    }
}

//removeActive:
const removeActive = () => {
    const existingActive = document.querySelectorAll(".catchActive");
    // console.log(existingActive)
    existingActive.forEach(btn => btn.classList.remove("active"))
}

// display cards:
const loadWordLevel = (id) => {
    manageSpinner(true)
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then(response => response.json())
        .then(values => {
            removeActive();// before adding active, removing existing active 
            //getting id for active btn           
            const clickedBtn = document.getElementById(`clicked-btn-${id}`)
            // console.log(clickedBtn);
            clickedBtn.classList.add("active")
            displayWords(values.data)
        });
};



//load Word Detail:
const onInfoClick = async (id) => {
    const url = `https://openapi.programming-hero.com/api/word/${id}`
    // console.log(url)
    const res = await fetch(url);
    const details = await res.json();
    displayWordDetails(details.data);
};
const displayWordDetails = (wordDetail) => {
    console.log(wordDetail);

    //     {
    //     "word": "Sincere",
    //     "meaning": "সত্‍ / আন্তরিক",
    //     "pronunciation": "সিনসিয়ার",
    //     "level": 1,
    //     "sentence": "He gave a sincere apology.",
    //     "points": 1,
    //     "partsOfSpeech": "adjective",
    //     "synonyms": [
    //         "honest",
    //         "genuine",
    //         "truthful"
    //     ],
    //     "id": 19
    // }
    const wordInfoDetail = document.getElementById("word-detail")
    wordInfoDetail.innerHTML = `
                <div class=" space-y-5">
                <div class="">
                    <h1 class="font-bold text-3xl">${wordDetail.word}(<i class="fa-solid fa-microphone-lines"></i> :${wordDetail.pronunciation})</h1>
                </div>
                <div class="">
                    <h1 class="font-semibold text-lg">Meaning</h1>
                    <p class="font-medium text-base">${wordDetail.meaning}</p>
                </div>
                <div class="">
                    <h1 class="font-semibold text-lg">Example</h1>
                    <p class="font-medium text-base">${wordDetail.sentence}</p>
                </div>
                <div class="">
                    <h1 class="font-semibold text-lg">সমার্থক শব্দ গুলো</h1>
                    <button class="btn">${wordDetail.synonyms[0]}</button>
                    <button class="btn">${wordDetail.synonyms[1]}</button>
                    <button class="btn">${wordDetail.synonyms[2]}</button>
                </div>
            </div>
    `
    document.getElementById("my_modal_5").showModal()
}

//word load

const displayWords = (words) => {
    // console.log(words);
    // 1
    const showWords = document.getElementById("level-show")
    showWords.innerHTML = "";

    if (words.length == 0) {
        showWords.innerHTML = `
        <div class=" text-center col-span-3 space-y-5 py-10">
            <img class="mx-auto" src="./assets/alert-error.png"/>
            <p class="text-xl font-medium text-gray-500 bangla-font">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h1 class="text-5xl font-medium bangla-font">নেক্সট Lesson এ যান। </h1>
        </div>
        `
        manageSpinner(false);
        return;
    }

    //2
    for (let word of words) {
        // console.log(word)
        //3
        // {id: 85, level: 1, word: 'Hat', meaning: 'টুপি', pronunciation: 'হ্যাট'}
        const finalCard = document.createElement("div")
        finalCard.innerHTML = `<div class="bg-white rounded-sm text-center py-10 px-5 m-5 space-y-5">
            <h1 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যায় নি।"}</h1>
            <p>Meaning /Pronunciation</p>
            <p class="font-medium text-lg">${word.meaning ? word.meaning : "অর্থ পাওয়া যায় নি। "}/${word.pronunciation ? word.pronunciation : "উচ্চারণ পাওয়া যায় নি।"}</p>
                        <div class="flex justify-between items-center">
                <button onclick="onInfoClick(${word.id})" class="btn bg-[#e8f4ff] hover:bg-[#1A91FF80]"> <i
                        class="fa-solid fa-circle-info text-xl"></i></button>
                <button class="btn bg-[#e8f4ff] hover:bg-[#1A91FF80]"><i
                        class="fa-solid fa-volume-high text-xl"></i></button>
            </div>
        </div>`
        // 4
        showWords.append(finalCard)
    }
    manageSpinner(false);
}
// 

const lessons = (values) => {
    // console.log(values)
    // 4 1.call the div and empty it, 2.loop,  3.create. 4.append 
    const lessonsLevel = document.getElementById("lessons")
    lessonsLevel.innerHTML = ""

    for (let lesson of values) {
        // console.log(lesson);
        // {id: 106, level_no: 6, lessonName: 'Mastering Vocabulary'}
        const levelDiv = document.createElement("div")
        levelDiv.innerHTML = `<button id="clicked-btn-${lesson.level_no}" onclick="loadWordLevel(${lesson.level_no})" 
        class="btn btn-outline btn-primary catchActive"><i class="fa-solid fa-book-open"></i>Level- ${lesson.level_no}</button>`;

        lessonsLevel.append(levelDiv)
    }
}

vocabData();