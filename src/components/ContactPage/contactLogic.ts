import { ContactProps } from "../../contactType";

import { connectUrl } from "../../settings.json";

const loadContacts = async (): Promise<ContactProps[]> => {
  try {
    const result = await fetch(`${connectUrl}/contacts`);
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error();
  }
};
export default { loadContacts };
