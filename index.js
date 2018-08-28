function init() {
    const shopIp = document.querySelector('.shop_ip');
    

    shopIp.addEventListener('click', () => ajaxGet('ip.php'));
}

function ajaxGet(url) {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        const myIP = document.querySelector('.myIP');

        if(request.readystate == 4 && request.status == 200) {
            myIP.textContent = request.responseText;
        }
    }

    request.open('GET', url);
    request.send();
}

window.addEventListener('load', init);