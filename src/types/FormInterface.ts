export type FormValues = {
  name: string;
  price: number;
  brand: string;
  category: string;
  quantity: number;
  description: string;
  image: FileList;
};

export type TOrder = {
  name: string;
  email: string;
  number: string;
  address: string;
}