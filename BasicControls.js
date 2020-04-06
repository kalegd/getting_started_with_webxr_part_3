import { PointerLockControls } from './PointerLockControls.js';

export default class BasicControls {
    constructor(camera, container) {
        this._container = container;
        this._controls = new PointerLockControls(camera, this._container);
        container.addEventListener('click', () => { this._controls.lock(); });
        this._controls.addEventListener('lock', () => {
            this._container.classList.add("display-none");
        });
        this._controls.addEventListener('unlock', () => {
            this._container.classList.remove("display-none");
        });
    }
}
