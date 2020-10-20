import { loader } from "./loaderAction";

describe("loader action", () => {

  test("loader", () => {
    const payload = true;
    expect(loader(payload)).toBeTruthy();
  });

});
