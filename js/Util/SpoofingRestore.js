
export const SpoofingRestore = function(element, site) {

    let p = document.createElement('P');
    element.appendChild(p);
    p.classList.add('cl-home-control');

    let button = document.createElement('button');
    button.textContent = 'restore';
    p.appendChild(button);

    button.onclick = () => {
        site.api.post('/api/course/members/spoof', {restore: true})
            .then((response) => {
                if (!response.hasError()) {
                    window.location = site.root + '/';
                } else {
                    Site.toast(this, response);
                }

            })
            .catch((error) => {
                Site.toast(this, error);
            });
    }

    // let options = {};
    // const content = element.textContent;
    // if(content.length > 0) {
    //     options = JSON.parse(element.textContent);
    //     element.innerHTML = '';
    // }
    //
    // element.style.display = 'inline-block';
    //
    // let form = document.createElement('form');
    // element.appendChild(form);
    //
    // let input = document.createElement('input');
    // input.type = "text";
    // form.appendChild(input);
    //
    // let button = document.createElement('input');
    // button.type = "submit";
    // button.value = "Error Help";
    // form.appendChild(button);
    //
    // let url = Site.root + '/cl/errorhelp';
    // if(options.assign !== undefined) {
    //     url += '/' + options.assign;
    //
    //     if(options.tag !== undefined) {
    //         url += '/' + options.tag;
    //     }
    // }
    //
    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //
    //     const error = encodeURI(input.value.toUpperCase().trim());
    //     window.open(`${url}?e=${error}`, "Error Help", 'width=600, height=500, scrollbars=yes');
    // })
}

SpoofingRestore.install = function(site) {
    let elements = document.querySelectorAll('div.cl-spoofing-restore');
    for(let i=0; i<elements.length; i++) {
        new SpoofingRestore(elements[i], site);
    }
}
