"use strict";

const tableName = "users";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(tableName, [
      {
        id: 1,
        name: "실버공급자",
        nickname: "실버공급자",
        email: "silver-test@test.com",
        phone: "01012341234",
        password: "1234",
      },
      {
        id: 2,
        name: "골드바이어",
        nickname: "골드바이어",
        email: "gold-test@test.com",
        phone: "01012341235",
        password: "1234",
      },
      {
        id: 3,
        name: "어드민유저",
        nickname: "어드민유저",
        email: "admin-test@test.com",
        phone: "01012341236",
        password: "1234",
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(tableName, null, {});
  },
};
