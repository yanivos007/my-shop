export interface IUser {
  email: string;
  password: string;
  verifyPassword: string;
  firstName: string;
  lastName: string;
  city: string;
  adress: string;
  role: string;
  id: string;
}
export interface User {
  email: string;
  password: string;
}
export interface ICurrentUser {
  email: string;
  passWord: string;
}
export interface IProduct {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  categoryName: string;
  categoryId: number;
  description: string;
}
export interface IOrder {
  products: Array<string>;
  user: Array<string>;
}
export interface ICart {
  _id: string;
  userId: string;
  products: {
    product: IProduct;
    quantity: number;
  }[];
  modifiedOn: Date;
}
