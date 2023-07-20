import { AutomaticClient } from ".";


const client = new AutomaticClient({company_id: "1", api_token: "1"})

client.get_accounts()