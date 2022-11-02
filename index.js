let posts = [
    {
        text: 'neki text 1',
        postImg: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
        likes: 3,
        comments: ['com1', 'com2']
    },
    {
        text: 'neki textv 2',
        postImg: 'https://purepng.com/public/uploads/large/purepng.com-mariomariofictional-charactervideo-gamefranchisenintendodesigner-1701528634653vywuz.png',
        likes: 0,
        comments: []
    },
    {
        text: 'neki text 3',
        postImg: 'https://i.stack.imgur.com/ILTQq.png',
        likes: 10,
        comments: []
    }
]


const renderComment = (arr, app) => {
    app.textContent = ''
    arr.sort((a,b) => b.likes - a.likes)
    arr.forEach(el => {

        const divPost = document.createElement('div')
        divPost.classList.add('post')
    
        const divPostName = document.createElement('div')
        const pPostName = document.createElement('p')
        pPostName.textContent = el.text
        divPostName.appendChild(pPostName)
    
        const divImg = document.createElement('div')
        const img = document.createElement('img')
        img.src = el.postImg
        divImg.appendChild(img)

        const divLikes = document.createElement('div')
        const pLikes = document.createElement('p')
        pLikes.textContent = el.likes
        const buttonLike = document.createElement('button')
        buttonLike.textContent = 'Like'
        buttonLike.addEventListener('click', () => {
            el.likes++
            renderComment(posts, app)
        })
        divLikes.append(pLikes, buttonLike)

        const divComm = document.createElement('div')
        const pComm = document.createElement('p')
        let str = ''
        el.comments.forEach(com => {
            str += com + ', '
        })
        pComm.textContent = str
        const inputcomm = document.createElement('input')
        inputcomm.addEventListener('keypress', (event) => {
            if(event.target.value == ''){
                return
            }
            if(event.key == 'Enter'){
                el.comments.push(inputcomm.value)
                renderComment(posts, app)
            }
        })
        divComm.append(pComm, inputcomm)
        divPost.append(divPostName, divImg, divLikes, divComm)
        app.appendChild(divPost)

    })

}
const app = document.querySelector('.app')
renderComment(posts, app)