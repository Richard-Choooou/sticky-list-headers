import StickyListHeaders from '../src'

let stickyListHeaders = new StickyListHeaders({
    outerContainer: 'outer-container',
    innerContainer: 'inner-container',
    headers: ['header1', 'header2', 'header3', 'header4', 'header5', 'header6']
})

document.getElementById('header2').addEventListener('click', function() {
    alert(1)
})

console.log(stickyListHeaders)