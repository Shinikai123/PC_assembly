const accordeon = () => {
    const contents = document.querySelectorAll('.program-line__content');

contents.forEach ((elem) => {
    const title = elem.querySelector('.program-line__title');

    title.addEventListener('click', () =>{

        contents.forEach((descr) => {
            const $descr = descr.querySelector('.program-line__descr');
            if(descr === elem) {
                $descr.classList.toggle('active');
            } else {
                $descr.classList.remove('active');
            }
        })
    })
})
}

accordeon()