const vocabData = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(response => response.json())
        .then(object => lessons(object.data))

    const lessons = (values) => {
        // console.log(values)
        // 4 1.call the div and empty it, 2.loop,  3.create. 4.append 
        const lessonsLevel = document.getElementById("lessons")
        lessonsLevel.innerHTML = ""

        for (let lesson of values) {
            // console.log(lesson);
            // {id: 106, level_no: 6, lessonName: 'Mastering Vocabulary'}
            const levelDiv = document.createElement("div")
            levelDiv.innerHTML = `<button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Level- ${lesson.level_no}</button>`;

            lessonsLevel.append(levelDiv)
        }
    }
}
vocabData();