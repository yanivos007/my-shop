const apiRouter = require("express").Router();
const productRepository = require("./products/productRepository");
// const orderRepository = require("./order/orderRepository");
// const cartRepository = require("./cart/cartRepository");
// const userRepository = require("./users/userRepository");
const multerInstance = require("./multer");
apiRouter.post(
  "/",
  multerInstance.upload.single("image"),
  productRepository.createProduct
);
apiRouter.use("/users", require("./users/usersRouter"));
apiRouter.use("/products", require("./products/productRouter"));
apiRouter.use("/cart", require("./cart/cartRouter"));
apiRouter.use("/order", require("./order/orderRouter"));

// apiRouter.get("/products", productRepository.getProducts);
// apiRouter.get("/products/:productId", productRepository.productById);
// apiRouter.get("/orders", orderRepository.getOrder);
// apiRouter.get("/order/:orderId", orderRepository.orderById);
// apiRouter.get("/cart", cartRepository.getCarts);
// apiRouter.get("/cart/:cartId", cartRepository.cartById);
// apiRouter.get("/user", userRepository.getCarts);
// apiRouter.get("/user/:userId", userRepository.userById);

module.exports = apiRouter;
