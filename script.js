let closeIcon = document.querySelector('.close-icon')
let addBtn = document.querySelector('.btn')
let list = document.querySelector('.todoList')
let inputText = document.querySelector('input')
let inputDiv = document.querySelector('.input-task')
let deleteIcon = document.querySelector('.delete-icon')
let sortIcon = document.querySelector('.sort-icon')

addBtn.addEventListener('click', () => {
    list.style.display = 'block'
    const newDiv = document.createElement('div')
    list.appendChild(newDiv)
    newDiv.classList.add('task')
    newDiv.innerHTML = `<p>${inputText.value}</p>
    <div class="close-icon">
        <svg class="gray-close" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            viewBox="0 0 20 20" fill="none">
            <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4" />
            <path d="M6 6L14 14" stroke="#C4C4C4" />
            <path d="M6 14L14 6" stroke="#C4C4C4" />
        </svg>

        <svg class="purple" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            viewBox="0 0 20 20" fill="none">
            <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="#833AE0" stroke="#833AE0" />
            <path d="M6 6L14 14" stroke="white" />
            <path d="M6 14L14 6" stroke="white" />
        </svg>
    </div>`

    inputText.value = ''

    if(list.childElementCount ==5){
        inputDiv.style.display = 'none'
        addBtn.style.display = 'none'
      }


    function registerClickHandler(e) {
        let target = e.target;
        target.parentElement.remove()
        // console.log(list.childElementCount)

        // if(list.childElementCount <5){
        //     inputDiv.style.display = 'block'
        //     addBtn.style.display = 'block'
        //   }

        if (list.childElementCount === 0) {
            list.style.display = 'none'
          }
    }

    var closeIcon = document.querySelectorAll('.close-icon');

    for (var i = 0; i < closeIcon.length; i++) {
        closeIcon[i].addEventListener("click", registerClickHandler, false);   
    }

      


    sortIcon.addEventListener("click", function () {

        const tasks = [...document.querySelectorAll('.task')];
        console.log(tasks)
        tasks.sort((a, b) => {
            return parseInt(b.innerText) - parseInt(a.innerText);
        })
        console.log(tasks)
        list.replaceChildren(...list.children, ...tasks)



    })




})





deleteIcon.addEventListener('click', () => {
    inputText.value = ''
})

