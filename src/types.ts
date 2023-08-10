export type AutomaticClientType = {
    company_id: string,
    api_token: string,
}

export type AccountType = {
    vendor_id: string,
    username: string,
    site_id: number,
    reset_password_enabled: boolean,
    password: string,
    exclude_default_notes: boolean,
    do_not_barcode: boolean,
    disable_sapi: boolean,
    axs_authorized: boolean,
    auto_po: boolean,
    active: boolean
}

export type AccountsType = AccountType[]

export interface AccountParamsType {
    bad_creds: boolean,
    search_term: string,
    vendor_id: number,
    password_auto_updated_at: string,
    inserted_at: string,
    auto_created: boolean,
    tags: string
}

export interface AccountParamsWithPaginationType extends AccountParamsType {
    page: number,
    limit: number
}