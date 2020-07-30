import {
  loadContacts,
  filterContact,
  deleteContact,
  updateContact,
  addContact,
} from "./contactLogic";

import { contacts } from "../../../db.json";
import { ContactProps } from "../../contactType";

const testData = contacts.slice(0, 3);

describe("load content", () => {
  it("load contact data without error", async () => {
    const result = await loadContacts();
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].firstName).toEqual("Kaleigh");
  });
});

describe("filter logic", () => {
  it("return array of contacts with filter value", () => {
    const filter = "Tatyana";
    const result = filterContact(testData, filter);
    expect(result.length).toEqual(1);
  });
  it("return array of contacts with filter value, with uppercase symbols", () => {
    const filter = "TatYana";
    const result = filterContact(testData, filter);
    expect(result.length).toEqual(1);
  });
});

describe("delete logic", () => {
  it("return new array without element", () => {
    const index = 1;
    const element = testData[index];
    const { id } = element;
    const result = deleteContact(testData, id);
    expect(result.length).toBeLessThan(testData.length);
    expect(result).not.toContain(element);
  });
  it("return original array if record id doesn't exist", () => {
    const id = "asdasd-dasdasd-asdasd";
    const result = deleteContact(testData, id);
    expect(result).toEqual(testData);
  });
});

describe("update record logic", () => {
  it("return updated array with record on true position", () => {
    const index = 1;
    const editedRecord = { ...testData[index] };
    editedRecord.firstName = "Jhon";
    editedRecord.lastName = "Malkovich";
    const result = updateContact(testData, editedRecord);
    expect(editedRecord).toEqual(result[index]);
    expect(testData[index]).not.toEqual(result[index]);
    expect(testData).not.toContain(result[index]);
  });
  it("return original array if id doesn't exist", () => {
    const index = 1;
    const editedRecord = { ...testData[index] };
    editedRecord.id = "asdasd-asdasd-asdasd";
    editedRecord.firstName = "Jhon";
    editedRecord.lastName = "Malkovich";
    const result = updateContact(testData, editedRecord);
    expect(editedRecord).not.toEqual(result[index]);
    expect(result).not.toContain(editedRecord);
  });
});

describe("add contact", () => {
  it("add new contact to end of contacts array", () => {
    const newContact: ContactProps = {
      id: "",
      firstName: "John",
      lastName: "First",
      address: "Santa Carolina",
      email: "",
      phone: "",
    };
    const result = addContact(testData, newContact);
    expect(result[result.length - 1]).toEqual(newContact);
    expect(testData.length).toBeLessThan(result.length);
  });
});
