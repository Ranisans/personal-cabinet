import { ContactProps } from "../../contactType";

import { connectUrl } from "../../settings.json";

const cloneContacts = (contacts: ContactProps[]): ContactProps[] => {
  return contacts.map((contact) => ({ ...contact }));
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
  index: number
): ContactProps[] => {
  if (contacts.length >= index) {
    const clonedContacts = cloneContacts(contacts);
    clonedContacts.splice(index, 1);
    return clonedContacts;
  }
  return contacts;
};

const updateContact = (
  contacts: ContactProps[],
  record: ContactProps,
  index: number
): ContactProps[] => {
  const clonedContacts = cloneContacts(contacts);
  clonedContacts[index] = record;
  return clonedContacts;
};

export { loadContacts, filterContact, deleteContact, updateContact };
