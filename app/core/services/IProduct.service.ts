import { IProductService } from "../contracts/IProduct.service";
import { Movement } from "../types/Movement.type";
import axios from "axios";

export class ProductService implements IProductService {
  public async GetAllProducts(): Promise<Movement[]> {
    let dataObtained: Movement[] = [];
    await axios
      .get<Movement[]>(
        "https://6222994f666291106a29f999.mockapi.io/api/v1/products"
      )
      .then((response) => {
        dataObtained = response.data;
      });
    return dataObtained;
  }
}
