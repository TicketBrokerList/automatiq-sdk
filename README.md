# AutomatiqClient API Library

The **AutomatiqClient** is a JavaScript library designed to simplify interactions with the Automatiq API. This library offers a convenient way to make HTTP requests and handle responses, enabling you to seamlessly integrate Automatiq API calls into your projects.

## Installation

To utilize the **AutomatiqClient** library, follow these installation steps:

1. Install the library using npm or yarn:

   ```bash
   npm install automatiq-client
   ```

   or

   ```bash
   yarn add automatiq-client
   ```

2. Import the library into your project:

   ```javascript
   import { AutomatiqClient } from 'automatiq-client';
   ```

## Getting Started

Begin using the **AutomatiqClient** by creating an instance of the class with your API credentials:

```javascript
const automatiqClient = new AutomatiqClient({
  company_id: 'your_company_id',
  api_token: 'your_api_token'
});
```

## Accounts APIs

### Get Accounts

Retrieve a list of accounts, optionally applying filters.

```javascript
const accounts = await automatiqClient.get_accounts(params);
```

### Get Accounts with Pagination

Fetch a paginated list of accounts.

```javascript
const accounts = await automatiqClient.get_accounts_with_pagination(params);
```

### Get Account by ID

Retrieve an account using its ID.

```javascript
const account = await automatiqClient.get_account_by_id(accountId);
```

### Create Account

Create a new account.

```javascript
const newAccountData = {
  /* account data */
};
const createdAccount = await automatiqClient.create_account(newAccountData);
```

### Launch Account by ID

Initiate the launch of an account using its ID.

```javascript
const launchResult = await automatiqClient.launch_account_by_id(accountId);
```

### Update Account by ID

Update account details by its ID.

```javascript
const updatedAccountData = {
  /* updated account data */
};
const updatedAccount = await automatiqClient.update_account_by_id(accountId, updatedAccountData);
```

### Delete Account by ID

Delete an account using its ID.

```javascript
const deletionResult = await automatiqClient.delete_account_by_id(accountId);
```

## Orders APIs

### Get Orders

Retrieve a list of orders, potentially with filters.

```javascript
const orders = await automatiqClient.get_orders(params);
```

### Get Order by ID

Fetch a specific order by its ID.

```javascript
const order = await automatiqClient.get_orders_by_id(orderId);
```

### Recheck Order by ID

Recheck an order using its ID.

```javascript
const recheckResult = await automatiqClient.recheck_orders_by_id(orderId);
```

### Create Order

Create a new order.

```javascript
const newOrderData = {
  /* order data */
};
const createdOrder = await automatiqClient.create_order(newOrderData);
```

### Image Proof Order

Submit image proofs for an order.

```javascript
const imageProofResult = await automatiqClient.image_proof_order(orderId, imageProofData);
```

### Confirm Order

Confirm an order.

```javascript
const confirmationResult = await automatiqClient.confirm_order(orderId);
```

### Deliver Order

Deliver URLs for an order.

```javascript
const deliveryResult = await automatiqClient.deliver_order(orderId);
```

### Fulfill Order

Fulfill an order.

```javascript
const fulfillmentResult = await automatiqClient.fulfill_order(orderId);
```

### Delete Order Proofs

Delete proofs for an order.

```javascript
const deletionResult = await automatiqClient.delete_order_proofs(orderId, proofsData);
```

## Additional APIs

The **AutomatiqClient** library also provides methods for interacting with purchases, sites, tickets, transfers, and more. For detailed information on these APIs, consult the library's source code or documentation.

## Error Handling

When errors occur, the methods will return an error object. Ensure that you handle these errors properly within your application.

```javascript
try {
  const orders = await automatiqClient.get_orders();
} catch (error) {
  console.error('Error fetching orders:', error);
}
```

## Contributions

Contributions to this library are encouraged! Feel free to create issues and pull requests on the [GitHub repository](https://github.com/your-username/automatiq-client).

## License

This project is licensed under the [MIT License](LICENSE).

---

This README provides a comprehensive overview of the **AutomatiqClient** library and its usage. For detailed information on available methods and options, please refer to the library's source code and documentation.
