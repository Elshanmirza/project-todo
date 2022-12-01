let closeIcon = document.querySelector('.close-icon')
let addBtn = document.querySelector('.btn')
let list = document.querySelector('.todoList')
let inputText = document.querySelector('input')
let inputDiv = document.querySelector('.input-task')
let deleteIcon = document.querySelector('.delete-icon')
let sortIcon = document.querySelector('.gray-sort-icon')
let upSort = document.querySelector('.up-icon')

addBtn.addEventListener('click', () => {
    list.style.display = 'block'
    const newDiv = document.createElement('div')
    list.appendChild(newDiv)
    newDiv.classList.add('task')
    newDiv.draggable = true
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

    if (list.childElementCount == 5) {
        inputDiv.style.display = 'none'
        addBtn.style.display = 'none'
    }


            // REMOVE FUNCTION

    function registerClickHandler(e) {
        let target = e.target;
        target.parentElement.remove()

        if (list.childElementCount === 0) {
            list.style.display = 'none'
            inputDiv.style.display = 'block'
            addBtn.style.display = 'block'
        }
    }

    var closeIcon = document.querySelectorAll('.close-icon');

    for (var i = 0; i < closeIcon.length; i++) {
        closeIcon[i].addEventListener("click", registerClickHandler, false);
    }


        // SORT FUNCTION

    sortIcon.addEventListener("click", function () {
        sortIcon.style.display = 'none'
        upSort.style.display = 'block'
        const tasks = [...document.querySelectorAll('.task')];

        tasks.sort((a, b) => {
            return parseInt(b.innerText) - parseInt(a.innerText);
        })

        list.replaceChildren(...list.children, ...tasks)
    })
    upSort.addEventListener('click', function () {
        upSort.style.display = 'none'
        sortIcon.style.display = 'block'
        const tasks = [...document.querySelectorAll('.task')];

        tasks.sort((a, b) => {
            return parseInt(a.innerText) - parseInt(b.innerText);
        })
        list.replaceChildren(...list.children, ...tasks)
    })


            // DRAG AND DROP


    function enableDragSort(divClass) {
        const sortableLists = document.getElementsByClassName(divClass);
        Array.prototype.map.call(sortableLists, (newDiv) => { enableDragList(newDiv) });
    }

    function enableDragList(newDiv) {
        Array.prototype.map.call(newDiv.children, (item) => { enableDragItem(item) });
    }

    function enableDragItem(item) {
        item.setAttribute('draggable', true)
        item.ondrag = handleDrag;
        item.ondragend = handleDrop;
    }

    function handleDrag(item) {
        const selectedItem = item.target,
            newDiv = selectedItem.parentNode,
            x = event.clientX,
            y = event.clientY;

        selectedItem.classList.add('drag-sort-active');
        let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);

        if (newDiv === swapItem.parentNode) {
            swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
            newDiv.insertBefore(selectedItem, swapItem);
        }
    }

    function handleDrop(item) {
        item.target.classList.remove('drag-sort-active');
    }

    (() => { enableDragSort('drag-sort-enable') })();
})





deleteIcon.addEventListener('click', () => {
    inputText.value = ''
})

