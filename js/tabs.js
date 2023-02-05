const tabsBtns = document.querySelectorAll('.tablinks');
const tabs = document.querySelectorAll('.tabcontent');


for (let i = 0; i < tabsBtns.length; i++) {
    tabsBtns[i].addEventListener('click', () => {
        tabsBtns.forEach((item, i) => {
            tabsBtns[i].classList.remove('tab-active');
            tabs[i].setAttribute('hidden', 'hidden');
        });
        tabsBtns[i].classList.add('tab-active');
        tabs[i].removeAttribute('hidden', 'hidden');
    });
}