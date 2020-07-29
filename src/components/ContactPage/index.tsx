import React, { useEffect, useState } from "react";

import FilterBlock from "../FilterBlock";
import VirtualTable from "../VirtualTable";

import { rowHeight, viewportHeight } from "../../settings.json";
import { ContactProps } from "../../contactType";
import ContactForm from "../ContactForm";

const ContactPage: React.FC = () => {
  const [contacts, setContacts] = useState<ContactProps[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<ContactProps[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [activeContact, setActiveContact] = useState<ContactProps | null>(null);

  const filterCallback = (value: string): void => {
    setFilter(value);
  };

  const rowOperationCallback = (isEdit: boolean, index: number): void => {
    if (isEdit) {
      setActiveContact(filteredContacts[index]);
    } else {
      // logic for delete record
    }
  };

  const contactFormCallback = (data: ContactProps) => {
    console.log("contactFormCallback -> data", data);
    // logic for update/create contact

    // if has activeContact - where we can get index?
    // in the end - setActiveContact(null)
  };

  const buttonHandler = () => {
    console.log("Add Contact");
    // show empty form
  };

  return (
    <div className="contact_page">
      <div className="contact_page-container">
        <FilterBlock defaultValue={filter} callback={filterCallback} />
        <VirtualTable
          rowsData={filteredContacts}
          rowHeight={rowHeight}
          viewportHeight={viewportHeight}
          rowOperationCallback={rowOperationCallback}
        />
        <button
          type="button"
          className="contact_page-add_contact"
          onClick={buttonHandler}
        >
          Add Contact
        </button>
        <div className="contact_page-form_container">
          <ContactForm
            callback={contactFormCallback}
            contactData={activeContact}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
