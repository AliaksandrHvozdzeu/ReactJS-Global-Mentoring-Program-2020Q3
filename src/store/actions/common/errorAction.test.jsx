import { error } from "./errorAction";

describe("error actions", () => {
  test("error", () => {
    const err = {
        message: "ERROR MESSAGE",
        config: {
          method: "GET"
        }
    };
    const errResult = {
      type: 'common/error',
      payload: 'ERROR MESSAGE',
      modalWindow: 'error',
      methodType: 'GET',
      showMessage: true,
      redirect: true
    };
    expect(error(err)).toBeTruthy();
    expect(error(err)).toEqual(errResult);
  });
});
