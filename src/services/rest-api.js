import axios from 'axios';

const GITHUB_API_HOST = 'https://api.github.com';

const baseConfig = {
    baseURL: GITHUB_API_HOST,
    // withCredentials: false,
};

export default class RestAPI {
    constructor(config = {}) {
        const mergedConfig = Object.assign({}, baseConfig, config);
        this.axios = axios.create(mergedConfig);

        this.catchError = this.catchError.bind(this);
    }


    catchError(error) {
        // throw new Error(error);
        return [];
    }

    get(url, params = {}) {
        return this.execute({
            method: 'get',
            url,
            params,
        });
    }

    post(url, data) {
        return this.execute({
            method: 'post',
            url,
            data,
        });
    }

    put(url, params) {
        return this.execute({
            method: 'put',
            url,
            params,
        });
    }

    delete(url, params) {
        return this.execute({
            method: 'delete',
            url,
            params,
        });
    }

    patch(url, params) {
        return this.execute({
            method: 'patch',
            url,
            params,
        });
    }

    execute({ method, url, ...rest }) {
        return this.axios({
            method,
            url,
            ...rest,
        })
            .then(({ data }) => data)
            .catch(this.catchError);
    }
}
