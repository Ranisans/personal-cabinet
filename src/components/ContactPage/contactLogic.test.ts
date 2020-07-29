import { filterContact, deleteContact } from "./contactLogic";

import { contacts } from "../../db.json";

const testData = contacts.slice(0, 3);

describe("filter logic", () => {
  it("return array of contacts with filter value", () => {
    const filter = "Olson";
    const result = filterContact(testData, filter);
    expect(result.length).toEqual(1);
  });
  it("return array of contacts with filter value, with uppercase symbols", () => {
    const filter = "OLson";
    const result = filterContact(testData, filter);
    expect(result.length).toEqual(1);
  });
  it("return array of contacts with filter value, if find number", () => {
    const filter = "272";
    const result = filterContact(testData, filter);
    expect(result.length).toEqual(1);
  });
});

describe("delete logic", () => {
  it("return new array without element", () => {
    const index = 1;
    const element = testData[index];
    const result = deleteContact(testData, index);
    expect(result.length).toBeLessThan(testData.length);
    expect(result).not.toContain(element);
  });
  it("return original array if index great than array length", () => {
    const index = 10;
    const result = deleteContact(testData, index);
    expect(result).toEqual(testData);
  });
});
