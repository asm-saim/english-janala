const vocabData = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(response => response.json())
        .then(object => lessons(object.data))
};

// display cards:
const loadWordLevel = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then(response => response.json())
        .then(values => displayWords(values.data))

};
const displayWords = (words) => {
    // console.log(words);
    // 1
    const showWords = document.getElementById("level-show")
    showWords.innerHTML = "";
    //2
    for (let word of words) {
        // console.log(word)
        //3
        // {id: 85, level: 1, word: 'Hat', meaning: 'টুপি', pronunciation: 'হ্যাট'}
        const finalCard = document.createElement("div")
        finalCard.innerHTML = `<div class="bg-white rounded-sm text-center py-10 px-5 m-5 space-y-5">
            <h1 class="font-bold text-2xl">${word.word}</h1>
            <p>Meaning /Pronunciation</p>
            <p class="font-medium text-lg">${word.meaning}/${word.pronunciation}</p>
                        <div class="flex justify-between items-center">
                <button class="btn bg-[#e8f4ff] hover:bg-[#1A91FF80]"> <i
                        class="fa-solid fa-circle-info text-xl"></i></button>
                <button class="btn bg-[#e8f4ff] hover:bg-[#1A91FF80]"><i
                        class="fa-solid fa-volume-high text-xl"></i></button>
            </div>
        </div>`
        // 4
        showWords.append(finalCard)
    }

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
        levelDiv.innerHTML = `<button onclick="loadWordLevel(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Level- ${lesson.level_no}</button>`;

        lessonsLevel.append(levelDiv)
    }
}

vocabData();