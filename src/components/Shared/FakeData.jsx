import { faker } from "@faker-js/faker"

function createRandomCarList() {
    return {
        name: faker.vehicle.vehicle(),
        fuelType: faker.vehicle.fuel(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ufcdF9qpJ7GVuYkYRfX5Q6YhLObAcyIaV40fvsEm1VoEAiJE3fTmuic05YetUXk4_fw&usqp=CAU',
        miles: 1000,
        gearType: 'Automatic',
        price: faker.finance.amount({min:4000, max:20000})
    }
}

const carList = faker.helpers.multiple(createRandomCarList, {
    count: 10
})

export default carList; 