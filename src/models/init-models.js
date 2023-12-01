var DataTypes = require("sequelize").DataTypes;
var _order = require("./order");
var _order_detail = require("./order_detail");
var _product = require("./product");
var _product_image = require("./product_image");
var _user = require("./user");

function initModels(sequelize) {
  var order = _order(sequelize, DataTypes);
  var order_detail = _order_detail(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var product_image = _product_image(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  order_detail.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(order_detail, { as: "order_details", foreignKey: "order_id"});
  order_detail.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(order_detail, { as: "order_details", foreignKey: "product_id"});
  product_image.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_image, { as: "product_images", foreignKey: "product_id"});
  order.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(order, { as: "orders", foreignKey: "user_id"});

  return {
    order,
    order_detail,
    product,
    product_image,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
