import { randomBytes } from 'node:crypto';

class TestDataGenerator {
    generateUniqueEmail(prefix) {
        const timestamp = Date.now();
        const uniqueId = randomBytes(4).toString('hex');
        return `${prefix}${timestamp}${uniqueId}@testmail.com`;
    }

    pickRandomItem(itemList) {
        if (!Array.isArray(itemList) || itemList.length === 0) {
            throw new Error('Item list must be a non-empty array.');
        }
        const randomIndex = Math.floor(Math.random() * itemList.length);
        return itemList[randomIndex];
    }

    generateUserProfile() {
        const firstNames = ['Daniel', 'Michael', 'David', 'James', 'Samuel'];
        const lastNames = ['Brown', 'Smith', 'Johnson', 'Taylor', 'Wilson'];
        const countries = [
            'India', 'United States', 'Canada',
            'Australia', 'New Zealand', 'Singapore'
        ];

        const firstName = this.pickRandomItem(firstNames);
        const lastName = this.pickRandomItem(lastNames);

        return {
            name: `${firstName} ${lastName}`,
            email: this.generateUniqueEmail('shopsure'),
            password: `ShopSure${randomBytes(4).toString('hex')}!`,
            title: 'Mr',
            birthDay: '15',
            birthMonth: '6',
            birthYear: '1995',
            firstName,
            lastName,
            company: 'ShopSure Test Company',
            address: '15 Test Street',
            country: this.pickRandomItem(countries),
            state: 'California',
            city: 'Los Angeles',
            zipcode: '90001',
            mobileNumber: '08012345678'
        };
    }
}

export default TestDataGenerator;