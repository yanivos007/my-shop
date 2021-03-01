const apiRouter = require("express").Router();
const productRepository = require("./products/productRepository");
const orderRepository = require("./order/orderRepository");
const cartRepository = require("./cart/cartRepository");
const userRepository = require("./users/userRepository");
const multerInstance = require("./multer");
apiRouter.post(
  "/",
  multerInstance.upload.single("image"),
  productController.createProduct
);
apiRouter.get("/products", productRepository.getProducts);
apiRouter.get("/products/:productId", productRepository.productById);
apiRouter.get("/orders", orderRepository.getOrder);
apiRouter.get("/order/:orderId", orderRepository.orderById);
apiRouter.get("/orders", cartRepository.getCarts);
apiRouter.get("/order/:orderId", cartRepository.cartById);
apiRouter.get("/user", userRepository.getCarts);
apiRouter.get("/user/:userId", userRepository.userById);
module.exports = apiRouter;
