import React from "react";

import VirtualTable from ".";
import { ContactProps } from "../../contactType";
import { loadContacts } from "../ContactPage/contactLogic";

export default {
  title: "Virtual Table",
  component: VirtualTable,
};

export const Default: React.FC = () => {
  const [contacts, setContacts] = React.useState<ContactProps[]>([]);
  const rowHeight = 40;
  const viewportHeight = 500;

  React.useEffect(() => {
    const fetchContactData = async () => {
      const loadedContact = await loadContacts();
      setContacts(loadedContact);
    };

    fetchContactData();
  }, []);

  const rowOperationCallback = (isEdit: boolean, id: string): void => {
    console.log(isEdit);
    console.log(id);
  };

  return (
    <VirtualTable
      rowHeight={rowHeight}
      rowsData={contacts}
      viewportHeight={viewportHeight}
      rowOperationCallback={rowOperationCallback}
    />
  );
};
