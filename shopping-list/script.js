const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function getItemsFromStorage() {
    let itemsFromStorage;
    if(localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;
}

function displayItemsFromStorage() {
    const itemsFromStorage = getItemsFromStorage();

    itemsFromStorage.forEach(item => {
        addItemToDOM(item);
    });
    checkUI();
    console.log(itemsFromStorage);
}

function onAddItemSubmit(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    if(newItem === '') {
        alert ('Please add an item');
        return;
    }

    addItemToDOM(newItem);
    addItemToStorage(newItem);
    checkUI();
    itemInput.value = '';
}

function addItemToDOM(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createdButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);
}

function addItemToStorage(item) {
    let itemsFromStorage = getItemsFromStorage();

    if(localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    itemsFromStorage.push(item);

    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
    console.log(itemsFromStorage);
}

function createdButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function onClickItem(e) { 
    if (e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement.parentElement);

       /*  removeItemFromStorage(e.target.parentElement.parentElement);
        checkUI(); */
    };
}

function removeItem(item) {
    if(confirm('Are you sure?')) {
        item.remove();
        removeItemFromStorage(item.textContent);
    checkUI();    
    }
}

function removeItemFromStorage(item) {
    let itemsFromStorage = getItemsFromStorage();

    console.log(itemsFromStorage);

    itemsFromStorage = itemsFromStorage.filter((itemFromStorage) => itemFromStorage !== item);

    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function clearItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    localStorage.removeItem('items');
    checkUI();

}



function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if(itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })
}

function checkUI() {
    const items = itemList.querySelectorAll('li');
    if(items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}

function init() {
    document.addEventListener('DOMContentLoaded', () =>{
        displayItemsFromStorage();
        itemForm.addEventListener('submit', onAddItemSubmit);
        itemList.addEventListener('click', onClickItem);
        clearBtn.addEventListener('click', clearItems);
        itemFilter.addEventListener('input', filterItems);
        checkUI();
    });
}

init();