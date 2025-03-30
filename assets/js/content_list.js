document.addEventListener("DOMContentLoaded", () => {
    const moduleOrderUrl = document.getElementById("moduleOrderUrlInput").value
    const contentOrderUrl = document.getElementById("contentOrderUrlInput").value
    let options = {
        method: 'POST',
        mode: 'same-origin'
    }
    sortable('#modules', {
        forcePlaceholderSize: true,
        placeholderClass: 'placeholder'
    })[0].addEventListener('sortupdate', (e) => {
        let modulesOrder = {};
        let modules = document.querySelectorAll('#modules li');
        modules.forEach((module, index) => {
            modulesOrder[module.dataset.id] = index
            module.querySelector('.order').innerHTML = index + 1;
        })
        options['body'] = JSON.stringify(modulesOrder);
        fetch(moduleOrderUrl, options)
    })
    sortable('#moduleContents', {
        forcePlaceholderSize: true,
        placeholderClass: 'placeholder'
    })[0].addEventListener('sortupdate', (e) => {
        let contentOrder = {};
        let contents = document.querySelectorAll('#moduleContents div');
        contents.forEach((content, index) => {
            contentOrder[content.dataset.id] = index
        })
        options['body'] = JSON.stringify(contentOrder);
        fetch(contentOrderUrl, options)
    })
})