const sendForm = () => {
    const form = document.querySelector('.modal');

    if(form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: new FormData(form),
        })

        let result = await response.json()
        if (response.status != '201') {
            alert('form')
        }

            console.log(result);
            form.reset();
        })
    }
}

sendForm()