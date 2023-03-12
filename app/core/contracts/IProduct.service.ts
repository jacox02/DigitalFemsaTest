import { Movement } from "./../types/Movement.type";

export interface IProductService {
  GetAllProducts(): Promise<Movement[]>;
}
