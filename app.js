const title = document.createElement('h1')
title.textContent = 'My shopping list'
document.body.appendChild(title)

const label = document.createElement('label')
label.textContent = 'Enter a new item: '
document.body.appendChild(label)

const input = document.createElement('input')
document.body.appendChild(input)
input.setAttribute('type', 'text')
input.setAttribute('id', 'item')
input.setAttribute('name', 'item')

const addBtn = document.createElement('button')
addBtn.textContent = 'Add item'
document.body.appendChild(addBtn)

addBtn.addEventListener('click', function (){
  const value = input.value;
  span.textContent = value;


  delBtn.textContent = 'Delete';
  document.getElementById('item').value = ''

  console.log(value)
})

const ul = document.createElement('ul')
document.body.appendChild(ul)
const li = document.createElement('li')
ul.appendChild(li)
const span = document.createElement('span')
li.appendChild(span)
const delBtn = document.createElement('button')
li.appendChild(delBtn)
delBtn.addEventListener('click', function(){
  li.remove()
})