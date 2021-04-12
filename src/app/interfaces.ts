export interface IUser {
  email: String;
  password: String;
  verifyPassword: String;
  firstName: String;
  lastName: String;
  city: String;
  adress: String;
  role: String;
  id: String;
}
export interface User {
  email: string;
  password: string;
}
export interface ICurrentUser {
  email: String;
  passWord: String;
}
export interface IProduct {
  _id: Object;
  name: String;
  price: Number;
  imageUrl: String;
  categoryName: String;
  categoryId: Number;
  description: String;
}
export interface IOrder {
  products: Array<String>;
  user: Array<String>;
}
export interface ICart {
  _id: Number;
  userId: Number;
  product: {
    productId: String;
    quantity: Number;
    price: Number;
  };
  modifiedOn: Date;
}
