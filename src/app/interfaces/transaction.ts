export interface Transaction {
  relUser: number,
  transactions: {
    accountName: string,
    account: string,
    amount: number,
    transactionType: string,
    dateTransaction: string
  }
}
