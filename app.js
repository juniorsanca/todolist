const title = document.createElement('h1')
title.textContent = 'My shopping list'
document.body.appendChild(title)

const div = document.createElement('div')
document.body.appendChild(div)

const ul = document.createElement('ul')
document.body.appendChild(ul)

const label = document.createElement('label')
label.textContent = 'Enter a new item: '
document.body.appendChild(label)
div.append(label)

const input = document.createElement('input')
document.body.appendChild(input)
input.setAttribute('type', 'text')
input.setAttribute('id', 'item')
input.setAttribute('name', 'item')
div.append(input)

const addBtn = document.createElement('button')
addBtn.textContent = 'Add item'
document.body.appendChild(addBtn)
div.append(addBtn)

const todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

todosArray.forEach(addTask);
function addTask(value){
  const li = document.createElement('li')
  const span = document.createElement('span')
  const delBtn = document.createElement('button')

  li.appendChild(span);
  span.textContent = value;
  li.appendChild(delBtn);
  delBtn.textContent ='Delete';
  ul.appendChild(li)

  delBtn.addEventListener('click', () => {
    localStorage.removeItem('todos');
    ul.removeChild(li);
  });
}

//---------[ add btn function ]--------//
addBtn.addEventListener('click', () => {
  const value = input.value
  if(value == ''){ preventDefault();}
  todosArray.push(value);
  localStorage.setItem('todos', JSON.stringify(todosArray));
  input.value = '';
  addTask(value)
  input.focus();
})
