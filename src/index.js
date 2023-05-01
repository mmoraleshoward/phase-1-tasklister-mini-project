document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("createtaskform").addEventListener('submit', (e) => {
    e.preventDefault();
    buildTasks(e.target.newtaskdescription.value);
  }
  )
})

function buildTasks (toDo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', removeButton)
  btn.textContent = 'X';
  p.textContent = `${toDo} `;
  p.appendChild(btn);
  console.log(p);
  document.querySelector('#tasks').appendChild(p);
}


function removeButton (e) {
  e.target.parentNode.remove();
}