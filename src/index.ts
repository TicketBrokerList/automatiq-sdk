
type AutomaticClientType = {
    company_id: string,
    api_token: string,
}

export class AutomaticClient {

    company_id: string;
    api_token: string;

    constructor(config: AutomaticClientType) {
        this.company_id = config.company_id;
        this.api_token = config.api_token;
    }

    async get_accounts() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
        // const movies = await response.json();
        // console.log(movies);
    }
}