import React from "react";
import rerender from "react-test-renderer";
import MoviePreview from "./js/MoviePreview";
import { mount, shallow } from "enzyme";
import { jest } from "@jest/globals";

describe("when MoviePreview", () => {

  const details = {
    "id": 399055,
    "title": "The Shape of Water",
    "tagline": "A Fairy Tale for Troubled Times",
    "vote_average": "7.3",
    "vote_count": 3200,
    "release_date": "2017-12-01",
    "poster_path": "https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg",
    "overview": "An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.",
    "budget": 19500000,
    "revenue": 185545281,
    "genres": ["Drama", "Fantasy", "Romance"],
    "runtime": 123
  };

  test("then snapshot created", () => {
    const component = rerender.create(<MoviePreview details={details} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('1', () => {
    const component = shallow(<MoviePreview details={details} />);
    const onClosePreview = jest.fn();
    expect(
      component.find('.close-preview-button').contains([
        <button className="close-preview-button"
                type="button"
                onClick={onClosePreview}
                onKeyDown={onClosePreview}>
          <img src="../public/images/search_42.png"
               className="close-preview"
               alt="close preview" />
        </button>
      ]),
    );
  });

  test('onClosePreview ', () => {
    const wrapper = mount(<MoviePreview details={details} />);
    expect(wrapper.find('.preview-wrapper')).toBeTruthy();
    const onClosePreview = jest.fn();
    expect(onClosePreview).toBeTruthy();
  });

});
