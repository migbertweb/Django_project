import '../css/app.css';

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
console.log('Hello from app.js');