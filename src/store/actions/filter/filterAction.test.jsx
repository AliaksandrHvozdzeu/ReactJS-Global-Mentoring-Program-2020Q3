import { changeOrder, filterByGenre } from "./filterAction";

describe("filterAction action", () => {

  test("resetForm Edit form", () => {
    const payload = true;
    expect(filterByGenre(payload)).toBeTruthy();
  });

  test("resetForm Edit form", () => {
    const payload = true;
    expect(changeOrder(payload)).toBeTruthy();
  });

});
