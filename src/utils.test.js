import { findMax, removeAttributes, loadUserName } from "./utils";

describe("findMax", () => {
    it("finds the maximum", () => {
        expect(findMax([3, 2, 1])).toEqual(3);
    });
});

describe("removeAttributes", () => {
    let testObj;

    beforeEach(() => {
        testObj = {
            bob: 1,
            alice: 2,
            dan: 3
        };
    });

    it("removes the passed keys", () => {
        removeAttributes(testObj, ["bob", "dan"]);

        expect(testObj).toEqual({ alice: 2});
    });

    it("returns the same object", () => {
        expect(removeAttributes(testObj, ["bob", "dan"])).toBe(testObj);
    });
});

describe("loadUserName", () => {
    it("loads the user name if the user is logged in", async () => {
        const name = await loadUserName({loggedIn: true});

        expect(name).toEqual("mary");
    });
});