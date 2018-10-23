
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');


function rubToUsd() {
    let promise = new Promise(function(resolve, reject) {

        let request = new XMLHttpRequest();

        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
            } else if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);
                resolve(inputRub.value / data.usd);
            } else {
                reject("Что-то пошло не так!");
            }
        });

    });
    return promise;
}

inputRub.addEventListener('input', () => {

    rubToUsd()
        .then((value) => {
            inputUsd.value = value;
        })
        .catch((value) => {
            inputUsd.value = value;
        });

});