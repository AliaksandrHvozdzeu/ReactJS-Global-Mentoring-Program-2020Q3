import useDefaultPoster from "./useDefaultPoster";
import { shallow } from "enzyme";
import React from "react";
import { jest } from "@jest/globals";

describe("when useDefaultPoster", () => {

  test("when image catch error", () => {

    const src = "";
    const alt = "";
    const className = "";
    const fallback = "";
    const onClick = jest.fn();
    const onKeyDown = jest.fn();
    const replaceToFallPoster = jest.fn();

    const useDefaultPosterHook = shallow(<useDefaultPoster src={src}
                                                           alt={alt}
                                                           className={className}
                                                           fallback={fallback}
                                                           onClick={onClick}
                                                           onError={replaceToFallPoster}
                                                           onKeyDown={onKeyDown} />);

    expect(useDefaultPosterHook.src).toEqual(undefined);
  });

});
