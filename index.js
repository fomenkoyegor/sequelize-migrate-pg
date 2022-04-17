const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://user:password@localhost:5432/sequelize-miagrate-pg"
);
const Category = sequelize.define("category", {
  name: String,
});

const fn = async () => {
  try {
    await sequelize.authenticate();
    // const cats = await Category.findAll();
    // console.log(cats);
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

fn();
