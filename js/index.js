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
        const finalCard = document.createElement("div")
        finalCard.innerHTML = `<p>Cat</p>
    `
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