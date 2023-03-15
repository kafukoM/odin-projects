const img = document.querySelector('img');
const btn = document.querySelector('.gif');
const container = document.querySelector('.container')


let image = document.createElement('img');





btn.addEventListener('click', () => {
    let search = document.querySelector('#gifName').value;

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=meX0Mr0eqPejNKslHigvWVTQz81fmVSX&s=${search}`, {
            mode: 'cors'
        })
        .then(response => {
            return response.json()
        })
        .then(response => {
            image.src = '';
            console.log(response.data.images.original.url)

            image.src = response.data.images.original.url

            container.appendChild(image)
        })
        .catch(err => { console.err('Error in image retrieval ' + err) })
})