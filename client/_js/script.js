import App from './global/App';

const app = new App();
document.addEventListener('DOMContentLoaded', () => {
    app.ready();
});
window.addEventListener('load', () => {
    app.load();
});
