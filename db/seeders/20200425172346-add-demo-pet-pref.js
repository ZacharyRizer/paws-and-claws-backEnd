'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("UserPetPreferences", [
      {
        userId: 1,
        breedId: 22,
        age: 2,
        sex: 1,
        size: 3,
        isOkayPets: true,
        isOkayKids: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("UserPetPreferences", null, {});
  }
};
