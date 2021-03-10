import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker/locale/es'

@Injectable({
  providedIn: 'root'
})
export class FakeApiService implements InMemoryDbService {

  oneHost = () => {
    return {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      date: faker.date.past(),
      gender: faker.name.gender(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      zipCode: faker.address.zipCode(),
      state: faker.address.state(),
      imageUrl: faker.image.image(),
      desc: faker.lorem.paragraphs(),
      jobTitle: faker.name.jobTitle(),
      company: faker.company.companyName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      vehicle: faker.vehicle.vehicle(),
      imageProfile: faker.image.people(),
      relTransaction: faker.random.number()
    }
  }

  anotherHost() {
    return {

      accountName: faker.finance.accountName(),
      account: faker.finance.account(),
      amount: faker.finance.amount(),
      transactionType: faker.finance.transactionType(),
      dateTransaction: faker.date.past(),


    }
  }
  createDb() {

    const fakeMock = [];
    const fakeMock2 = [];
    let transactions = []
    for (let i = 0; i < 50; i++) {
      transactions = [];
      fakeMock.push(this.oneHost());
      for (let a = 0; a < 10; a++) {
        transactions.push(this.anotherHost());
      }
      fakeMock2.push({ id: fakeMock[i].relTransaction, transactions: transactions });
    }

    return { fakeMock, fakeMock2 };
  }


}
