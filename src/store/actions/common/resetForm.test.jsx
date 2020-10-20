import { resetForm } from "./resetForm";

describe("reset form action", () => {

  test("resetForm Edit form", () => {
    expect(resetForm("EDIT")).toBeTruthy();
  });

  test("resetForm Edit form", () => {
    expect(resetForm("ADD")).toBeTruthy();
  });

});
