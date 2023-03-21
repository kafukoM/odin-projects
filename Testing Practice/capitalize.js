function capitalize(word) {

    if ((typeof word === 'number')) {
        throw new Error('Please enter a valid string')
    } else if (word == '') {
        throw new Error('String is empty')
    }
    return word[0].toUpperCase() + word.slice(1)
}

module.exports = capitalize