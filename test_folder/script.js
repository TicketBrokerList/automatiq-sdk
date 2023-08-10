const { AutomaticClient } = require('automatiq-sdk');

const client = new AutomaticClient({
  company_id: '1209',
  api_token: 'GacZr8xvdynGEcXUM7IMreAo23bIKQaW6MXhKquotLZSyYQ-a2EQVOc9OSBPuf9d8RTB'
});

// console.log(client.get_accounts());
const nice2 = async () => {
  // console.log(await client.get_accounts());
  console.log(await client.get_account_by_id(1849382));
  console.log(await client.get_purchases());
};
nice2();
