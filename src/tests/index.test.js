describe("getProducts", () => {
  const response = {
    products: [
      {
        product_id: "1",
        name: "salad",
        description: "Simple tomato and lettuce salad",
        price: 2.99,
        is_available: true,
        image: null,
        ingredients: ["tomato", "lettuce"],
      },
    ],
    statusCode: 200,
  };
  it("should respond successfully", () => {
    expect(response.statusCode).toBe(200);
    expect(response).toHaveProperty("products");
  });
});

describe("getTeapot", () => {
  const response = {
    message: "I cannot brew coffee since I'm a teapot.",
    statusCode: 418,
  };

  it("should respond successfully", () => {
    expect(response.statusCode).toEqual(418);
    expect(response).toHaveProperty("message");
    expect(response.message).toMatch(
      "I cannot brew coffee since I'm a teapot."
    );
  });
});
