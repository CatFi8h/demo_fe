export default class Api {

    _apiPath = 'http://localhost:8080';
    _logUrl = '/api/log';

    getResource = async () => {
        const res = await fetch(`${this._apiPath}${this._logUrl}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._logUrl}` +
            `, received ${res.status}`)
        }
        return res.json();
    }

}