// Write your code here!
document.querySelector('main').remove()

const newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = "Ashley is the champion"
document.body.append(newHeader)