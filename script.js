let addButton = document.querySelector('.search-add button');
let addBG = document.querySelector('.add-bg');
let addBox = document.querySelector('.add-box');

let addShow = () => {
    addBG.style.height = '100%';
    addBox.style.display = 'flex';
    setTimeout(() => {
        addBox.style.opacity = '1';
        addBox.style.marginTop = '0';
    }, 100);
};

let addBtn = document.querySelector('.add-box button');
let addinput = document.querySelector('.add-box input');
let addAlert = document.querySelector('.add-box p');
let listBox = document.querySelector('.list-box');

addBtn.addEventListener('click', () => {
    if (addinput.value == '') {
        addAlert.style.display = 'block';
        addinput.style.border = '1px solid #C64444';
    } else {
        listBox.querySelector('.t-l').style.display = 'none';
        listBox.querySelector('h6').style.display = 'none';
        let inputValue = addinput.value;
        setTimeout(() => {
            addBox.style.opacity = '0';
            addBox.style.marginTop = '';
        }, 250);
        setTimeout(() => {
            addBox.style.display = 'none';
            addBG.style.height = '0';
        }, 650);
        setTimeout(() => {
            listBox.innerHTML += `
            <div class="list">
                <div class="list-bg"></div>
                <div class="content">
                    <p>${inputValue}</p>
                    <div class="btns">
                        <button class="done-btn">Done</button>
                        <button class="remove-btn">Remove</button>
                    </div>
                </div>
            </div>`;
            addinput.value = '';
            document.querySelectorAll('.done-btn').forEach(button => {
                button.addEventListener('mouseover', function () { listBgShow(this); });
                button.addEventListener('mouseout', function () { listBgHide(this); });
                button.addEventListener('click', function () { disableList(this); });
            });
            document.querySelectorAll('.remove-btn').forEach(button => {
                button.addEventListener('mouseover', function () { listBgShow(this); });
                button.addEventListener('mouseout', function () { listBgHide(this); });
                button.addEventListener('click', function () { deleteList(this); });
            });
        }, 1100);
    };
});

addinput.addEventListener('keyup', () => {
    addAlert.style.display = 'none';
    addinput.style.border = '';
});

let listBgShow = (e) => {
    let bg = e.closest('.list').querySelector('.list-bg');
    bg.style.width = '100%';
};

let listBgHide = (e) => {
    let bg = e.closest('.list').querySelector('.list-bg');
    bg.style.width = '';
};

let deleteList = (e) => {
    let list = e.closest('.list');
    list.style.opacity = '0';
    setTimeout(() => {
        list.remove();
    }, 700);
};

let disableList = (e) => {
    let list = e.closest('.list');
    let bg = list.querySelector('.list-bg');
    let p = list.querySelector('p');
    let btns = e;
    list.style.backgroundColor = 'rgba(55, 55, 55, 0.7)';
    bg.style.display = 'none';
    p.classList.add('disabled-p');
    btns.style.pointerEvents = 'none';
    btns.style.opacity = '0.3';
};

let searchInput = document.querySelector('.searchInput');

searchInput.addEventListener('input', function () {
    let filter = this.value.toLowerCase();
    let tasks = document.querySelectorAll('.list .content p');
    tasks.forEach(task => {
        if (task.textContent.toLowerCase().includes(filter)) {
            task.closest('.list').style.display = '';
        } else {
            task.closest('.list').style.display = 'none';
        }
    });
});

searchInput.addEventListener('focus', () => {
    let searchBox = searchInput.parentNode;
    let searchIcon = searchInput.parentNode.childNodes[1];
    searchBox.style.border = '2px solid #BABABA';
    searchIcon.src = 'img/search-active.png';
})

searchInput.addEventListener('blur', () => {
    let searchBox = searchInput.parentNode;
    let searchIcon = searchInput.parentNode.childNodes[1];
    searchBox.style.border = '';
    searchIcon.src = 'img/search.png';
})