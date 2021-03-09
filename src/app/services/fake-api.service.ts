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
    }
  }

  createDb() {

    const fakeMock = [];

    for (let i = 0; i < 100; i++) {
      fakeMock.push(this.oneHost())
    }
    return { fakeMock };
  }


}
