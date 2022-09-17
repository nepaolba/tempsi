const toggle = document.getElementsByClassName('toggle')
const tBottom = document.getElementsByClassName('bottom')
const tTop = document.getElementsByClassName('top')
toggle[0].addEventListener('mouseover', function()
{
  tTop[0].children[0].style.marginRight='-15px';
  tBottom[0].children[1].style.marginLeft='-15px';
  tTop[0].children[1].style.borderColor="rgb(250, 0, 0)"
  tTop[0].children[0].style.borderColor="#ff9800"
  tBottom[0].children[0].style.borderColor="rgb(250, 0, 0)"
  tBottom[0].children[1].style.borderColor="#ff9800"
})

toggle[0].addEventListener('mouseout', function()
{
  tTop[0].children[0].style.marginRight='1px';
  tBottom[0].children[1].style.marginLeft='1px';
  tTop[0].children[1].style.borderColor="#d8d8d8"
  tTop[0].children[0].style.borderColor="#d8d8d8"
  tBottom[0].children[0].style.borderColor="#d8d8d8"
  tBottom[0].children[1].style.borderColor="#d8d8d8"
})



const menu =  document.getElementsByClassName('line')
const hover = document.getElementsByClassName('menu-link')
for (let i = 0; i < hover.length; i++) {
  hover[i].addEventListener('mouseover', function()
  {
    menu[i].style.strokeWidth='3px'
    menu[i].style.stroke='#ed2324'
  })
  hover[i].addEventListener('mouseout', function()
  {
    menu[i].style.strokeWidth='2px'
    menu[i].style.stroke='#d8d8d8'
  })
  console.log(hover[i])
}

const togglebtn = document.getElementById('toggle')
const sidebar = document.getElementsByClassName('side')
togglebtn.addEventListener('click', function(){
//  console.log(sidebar[0].classList.add('side-active'))
console.log(sidebar[0].classList.toggle('side-active'))
})
const listright = document.getElementsByClassName('list-right')
const boxlogout = document.getElementsByClassName('box-logout')
listright[0].addEventListener('click', function(){
  boxlogout[0].classList.toggle('box-logout-active')
})