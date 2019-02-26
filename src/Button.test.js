import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";
import toJSON from "enzyme-to-json";

describe("render", () => {
    it("renders the given text", () => {
        const wrapper = shallow(<Button text="Jump" />);

        expect(wrapper.text()).toEqual("Jump");
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
