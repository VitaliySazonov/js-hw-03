// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],
  /*
   * Метод создает и возвращает объект транзакции. +
   * Принимает сумму и тип транзакции. +
   */
  createTransaction: (amount, type) => ({amount, type}),
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции. +
   * Вызывает createTransaction для создания объекта транзакции +
   * после чего добавляет его в историю транзакций +
   */
  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT))
    this.balance += amount
    // console.log(`DEPOSIT ${amount}`, 'Balance = ', this.balance, this.transactions)
  },
  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции. +
   * Вызывает createTransaction для создания объекта транзакции +
   * после чего добавляет его в историю транзакций. +
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств. +
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Недостаточно средств')
    } else {
      this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW))
      this.balance -= amount
      // console.log(`WITHDRAW = ${amount}`, 'Balance = ', this.balance, this.transactions)
    }
  },
  /*
   * Метод возвращает текущий баланс +
   */
  getBalance() {
    return this.balance
  },
  /*
   * Метод ищет и возвращает объект транзации по id +
   */
  getTransactionDetails(id) {
    return this.transactions[id]
  },
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0
    for(let el of this.transactions) {
      if (type === el.type){
        total += el.amount
      }
    }
    return total
  },
};
