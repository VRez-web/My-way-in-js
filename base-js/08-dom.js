// window.alert('1')
// window.prompt('ur name?')
// window.confirm('')

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]

const heading2 = document.querySelector('#sub-hello')

setTimeout(() => {
    addStylesTo(heading)
}, 1500)



function addStylesTo(node) {
    node.textContent = 'Changed From JavaScript'
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.background = 'pink'
    node.style.padding = '25px'
}