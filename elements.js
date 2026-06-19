const createElements = (arr) => {
    const allSynonyms = arr.map((el) => `<span class="btn">${el}</span>`);
    console.log(allSynonyms.join(" "))
}

const sentence = ["I", "am", "brave"]
createElements(sentence)