module.exports = {
  default: {
    require: ['step-definitions/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress',
      'allure-cucumberjs/reporter'
    ]
  }
};
