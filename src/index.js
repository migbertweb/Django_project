import './style.css'; //importo las clases de tailwind css
/*
Script de prueba javascript
*/
function component() {
    const element =
        document.createElement('div');
    element.innerHTML = 'Hello webpack';
    return element;
}
document.body.appendChild(component());