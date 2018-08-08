
export const ErrorHelp = function(element, site) {

    let options = {};
    const content = element.textContent;
    if(content.length > 0) {
        options = JSON.parse(element.textContent);
        element.innerHTML = '';
    }

    element.style.display = 'inline-block';

    let form = document.createElement('form');
    element.appendChild(form);

    let input = document.createElement('input');
    input.type = "text";
    form.appendChild(input);

    let button = document.createElement('input');
    button.type = "submit";
    button.value = "Error Help";
    form.appendChild(button);

    let url = Site.root + '/cl/errorhelp';
    if(options.assign !== undefined) {
        url += '/' + options.assign;

        if(options.tag !== undefined) {
            url += '/' + options.tag;
        }
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const error = encodeURI(input.value.toUpperCase().trim());
        window.open(`${url}?e=${error}`, "Error Help", 'width=600, height=500, scrollbars=yes');
    })
}

ErrorHelp.install = function(site) {
    let elements = document.querySelectorAll('div.cl-error-help');
    for(let i=0; i<elements.length; i++) {
        new ErrorHelp(elements[i], site);
    }
}
