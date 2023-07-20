import { BASE_URL } from "./config";

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
        try {
            const response = await fetch(`${BASE_URL}/sync/api/accounts`, {
                headers: {
                    "X-Company-Id": this.company_id,
                    "X-Api-Token": this.api_token,
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip, deflate, br"
                }
            })
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error)
            return error;
        }
    }
}