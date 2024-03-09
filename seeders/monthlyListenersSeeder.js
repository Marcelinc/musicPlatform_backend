const monthlyListeners = require('../data/monthlyListeners.json');
const MonthlyListenersCount = require('../models/MonthlyListenersCount');

const seedMonthlyListeners = async () => {
    result = await MonthlyListenersCount.insertMany(monthlyListeners);
}

module.exports = seedMonthlyListeners;