const apiRouter = require("express").Router();
const productRepository = require("./products/productRepository");
// const orderRepository = require("./order/orderRepository");
// const cartRepository = require("./cart/cartRepository");
// const userRepository = require("./users/usersRepository");
const multerInstance = require("./multer");
apiRouter.post(
  "/",
  multerInstance.upload.single("image"),
  productRepository.createProduct
);
apiRouter.use("/users", require("./users/usersRouter"));
apiRouter.use("/products", require("./products/productRouter"));
// apiRouter.use("/admin", require("./admin"));
apiRouter.use("/cart", require("./cart/cartRouter"));
apiRouter.use("/order", require("./order/orderRouter"));

module.exports = apiRouter;
