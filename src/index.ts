import { BASE_URL } from "./config";
import { AccountParamsType, AccountParamsWithPaginationType, AccountType, AutomatiqClientType, OrderParamsType } from "./types";

export class AutomatiqClient {

    company_id: string;
    api_token: string;

    constructor(config: AutomatiqClientType) {
        this.company_id = config.company_id;
        this.api_token = config.api_token;
    }

    // accounts apis
    async get_accounts(params?: AccountParamsType) {

        let BASE_URL_UPDATED = `${BASE_URL}/sync/api/accounts`
        if (params) {
            const paramsUpdate: any = params
            const paramsString = new URLSearchParams(paramsUpdate).toString();
            BASE_URL_UPDATED = `${BASE_URL}/sync/api/accounts?${paramsString}`
        }

        try {
            const response = await fetch(BASE_URL_UPDATED, {
                method: "GET",
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
            return error;
        }
    }
    async get_accounts_with_pagination(params?: AccountParamsWithPaginationType) {

        let BASE_URL_UPDATED = `${BASE_URL}/sync/api/accounts`
        if (params) {
            const paramsUpdate: any = params
            const paramsString = new URLSearchParams(paramsUpdate).toString();
            BASE_URL_UPDATED = `${BASE_URL}/sync/api/accounts?${paramsString}`
        }

        try {
            const response = await fetch(BASE_URL_UPDATED, {
                method: "GET",
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
            return error;
        }
    }

    async get_account_by_id(id: number | string) {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/accounts/${id}`, {
                method: "GET",
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
            return error;
        }
    }

    async create_account(data: AccountType) {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/accounts`, {
                method: "POST",
                headers: {
                    "X-Company-Id": this.company_id,
                    "X-Api-Token": this.api_token,
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip, deflate, br"
                },
                body: JSON.stringify(data)
            })
            const json = await response.json();
            return json;
        } catch (error) {
            return error;
        }
    }

    async launch_account_by_id(id: number | string) {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/accounts/${id}/launch`, {
                method: "POST",
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

    async update_account_by_id(id: number | string, data: AccountType) {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/accounts/${id}`, {
                method: "PUT",
                headers: {
                    "X-Company-Id": this.company_id,
                    "X-Api-Token": this.api_token,
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip, deflate, br"
                },
                body: JSON.stringify(data)
            })
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error)
            return error;
        }
    }
    async delete_account_by_id(id: number | string) {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/accounts/${id}`, {
                method: "DELETE",
                headers: {
                    "X-Company-Id": this.company_id,
                    "X-Api-Token": this.api_token,
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip, deflate, br"
                },
            })
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error)
            return error;
        }
    }

    // orders apis

    async get_orders(params?: OrderParamsType) {
        let BASE_URL_UPDATED = `${BASE_URL}/sync/api/orders`
        if (params) {
            const paramsUpdate: any = params
            const paramsString = new URLSearchParams(paramsUpdate).toString();
            BASE_URL_UPDATED = `${BASE_URL}/sync/api/orders?${paramsString}`
        }
        try {
            const response = await fetch(BASE_URL_UPDATED, {
                method: "GET",
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

    async get_orders_by_id(id: number | string) {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/orders/${id}`, {
                method: "GET",
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
            return error;
        }
    }

    async recheck_orders_by_id(order_id: number | string) {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/orders/${order_id}/recheck`, {
                method: "GET",
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
            return error;
        }
    }

    async create_order(data: AccountType) {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/orders`, {
                method: "POST",
                headers: {
                    "X-Company-Id": this.company_id,
                    "X-Api-Token": this.api_token,
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip, deflate, br"
                },
                body: JSON.stringify(data)
            })
            const json = await response.json();
            return json;
        } catch (error) {
            return error;
        }
    }

    async image_proof_order(data: AccountType) {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/orders`, {
                method: "POST",
                headers: {
                    "X-Company-Id": this.company_id,
                    "X-Api-Token": this.api_token,
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip, deflate, br"
                },
                body: JSON.stringify(data)
            })
            const json = await response.json();
            return json;
        } catch (error) {
            return error;
        }
    }
    async confirm_order(order_id: string | number) {
        try {
            const response = await fetch(`${BASE_URL}sync/api/orders/${order_id}/confirm`, {
                method: "PATCH",
                headers: {
                    "X-Company-Id": this.company_id,
                    "X-Api-Token": this.api_token,
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip, deflate, br"
                },
            })
            const json = await response.json();
            return json;
        } catch (error) {
            return error;
        }
    }
    async deliver_order(order_id: string | number) {
        try {
            const response = await fetch(`${BASE_URL}sync/api/orders/${order_id}/deliver_urls`, {
                method: "PATCH",
                headers: {
                    "X-Company-Id": this.company_id,
                    "X-Api-Token": this.api_token,
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip, deflate, br"
                },
            })
            const json = await response.json();
            return json;
        } catch (error) {
            return error;
        }
    }
    async fulfill_order(order_id: string | number) {
        try {
            const response = await fetch(`${BASE_URL}sync/api/orders/${order_id}/fulfill`, {
                method: "PATCH",
                headers: {
                    "X-Company-Id": this.company_id,
                    "X-Api-Token": this.api_token,
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip, deflate, br"
                },
            })
            const json = await response.json();
            return json;
        } catch (error) {
            return error;
        }
    }
    async delete_order_proofs(order_id: string | number, data?: object) {
        try {
            const response = await fetch(`${BASE_URL}sync/api/orders/${order_id}/proofs`, {
                method: "DELETE",
                headers: {
                    "X-Company-Id": this.company_id,
                    "X-Api-Token": this.api_token,
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip, deflate, br"
                },
                body: JSON.stringify(data ? data : null)
            })
            const json = await response.json();
            return json;
        } catch (error) {
            return error;
        }
    }


    // get all purchases
    async get_purchases() {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/purchases`, {
                method: "GET",
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

    // get all sites
    async get_sites() {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/sites`, {
                method: "GET",
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

    // get all tickets
    async get_tickets() {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/tickets`, {
                method: "GET",
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

    async get_transfers() {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/transfers`, {
                method: "GET",
                headers: {
                    "X-Company-Id": this.company_id,
                    "X-Api-Token": this.api_token,
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip, deflate, br"
                },
            })
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error)
            return error;
        }
    }

    async get_transfers_by_id(id: string | number) {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/transfers/${id}`, {
                method: "GET",
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

    async create_transfers(data: any) {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/transfers`, {
                method: "POST",
                headers: {
                    "X-Company-Id": this.company_id,
                    "X-Api-Token": this.api_token,
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip, deflate, br"
                },
                body: JSON.stringify(data)
            })
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error)
            return error;
        }
    }
    async delete_transfer(id: string | number) {
        try {
            const response = await fetch(`${BASE_URL}/sync/api/transfers/${id}`, {
                method: "DELETE",
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