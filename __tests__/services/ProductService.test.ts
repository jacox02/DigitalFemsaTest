import { ProductService } from "../../app/core/services/IProduct.service";

describe("Test the product service", () => {
  let productService: ProductService;
  beforeAll(() => {
    productService = new ProductService();
  });
  test("Get all movements", async () => {
    const movements = await productService.GetAllProducts();
    expect(Array.isArray(movements)).toBe(true);
    expect(movements.length).toBeGreaterThan(0);
    expect(movements[0]).toHaveProperty("product");
    expect(movements[0]).toHaveProperty("image");
    expect(movements[0]).toHaveProperty("points");
  });
});
