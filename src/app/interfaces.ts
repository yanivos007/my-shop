export interface User {
  _id: number;
  email: String;
  password: String;
  verifyPassword: String;
  firstName: String;
  lastName: String;
  city: String;
  adress: String;
  role: String;
}
export interface Product {
  _id: Number;
  name: String;
  price: Number;
  imageUrl: String;
  category: Array<String>;
  description: String;
}
export interface Order {
  products: Array<String>;
  user: Array<String>;
}
export interface Cart {
  _id: Number;
  userId: Number;
  date: String;
  cartProduct: Object;
}
