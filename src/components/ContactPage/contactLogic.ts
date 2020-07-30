import { v4 as uuid } from "uuid";

import { ContactProps } from "../../contactType";

import { connectUrl } from "../../settings.json";

const cloneContacts = (contacts: ContactProps[]): ContactProps[] => {
  return contacts.map((contact) => ({ ...contact }));
};

const findContactIndex = (
  contacts: ContactProps[],
  id: string
): number | null => {
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index >= 0) {
    return index;
  }
  return null;
};

const loadContacts = async (): Promise<ContactProps[]> => {
  try {
    const result = await fetch(`${connectUrl}/contacts`);
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error();
  }
};

const filterFunc = (contact: ContactProps, filter: string): boolean => {
  const values = Object.values(contact);
  const result = values.filter((value) =>
    value.toString().toLowerCase().includes(filter)
  );
  return result.length > 0;
};

const filterContact = (
  contacts: ContactProps[],
  filter: string
): ContactProps[] => {
  const lowercaseFilter = filter.toLowerCase();
  const clonedContacts = cloneContacts(contacts);
  return clonedContacts.filter((contact) =>
    filterFunc(contact, lowercaseFilter)
  );
};

const deleteContact = (
  contacts: ContactProps[],
  id: string
): ContactProps[] => {
  const index = findContactIndex(contacts, id);
  if (index) {
    const clonedContacts = cloneContacts(contacts);
    clonedContacts.splice(index, 1);
    return clonedContacts;
  }
  return contacts;
};

const updateContact = (
  contacts: ContactProps[],
  record: ContactProps
): ContactProps[] => {
  const { id } = record;
  const index = findContactIndex(contacts, id);
  if (index) {
    const clonedContacts = cloneContacts(contacts);
    clonedContacts[index] = record;
    return clonedContacts;
  }
  return contacts;
};

const addContact = (
  contacts: ContactProps[],
  contact: ContactProps
): ContactProps[] => {
  // eslint-disable-next-line no-param-reassign
  contact.id = uuid();
  const clonedContacts = cloneContacts(contacts);
  clonedContacts.push(contact);
  return clonedContacts;
};

export {
  loadContacts,
  filterContact,
  deleteContact,
  updateContact,
  addContact,
};
