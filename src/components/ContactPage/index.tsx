import React, { useEffect, useState } from "react";

import FilterBlock from "../FilterBlock";
import VirtualTable from "../VirtualTable";

import { rowHeight, viewportHeight } from "../../settings.json";
import { ContactProps } from "../../contactType";
import ContactForm from "../ContactForm";

import {
  loadContacts,
  filterContact,
  deleteContact,
  updateContact,
  findContactIndex,
  addContact,
} from "./contactLogic";

import "./ContactsPage.scss";

const ContactPage: React.FC = () => {
  const [contacts, setContacts] = useState<ContactProps[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<ContactProps[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [activeContact, setActiveContact] = useState<ContactProps | null>(null);
  const [error, setError] = useState(false);

  const formRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const loadedContact = await loadContacts();
        setContacts(loadedContact);
        setFilteredContacts(loadedContact);
      } catch (err) {
        setError(true);
      }
    };

    fetchContactData();
  }, []);

  const filterFunc = (contactsArr: ContactProps[], value: string): void => {
    setFilteredContacts(filterContact(contactsArr, value));
  };

  const filterCallback = (value: string): void => {
    if (value !== "") {
      setFilter(value);
      filterFunc(contacts, value);
    } else {
      setFilter("");
      setFilteredContacts(contacts);
    }
  };

  const rowOperationCallback = (isEdit: boolean, id: string): void => {
    if (isEdit) {
      const index = findContactIndex(contacts, id);
      if (index !== null) {
        setActiveContact(contacts[index]);
      }
    } else {
      const result = deleteContact(contacts, id);
      setContacts(result);
      if (filter) {
        filterFunc(result, filter);
      } else {
        setFilteredContacts(result);
      }
    }
  };

  const showContactForm = () => {
    formRef.current?.classList.remove("contact_page-form_container--hidden");
  };

  const hideForm = () => {
    formRef.current?.classList.add("contact_page-form_container--hidden");
    setActiveContact(null);
  };

  const contactFormCallback = (record: ContactProps) => {
    let result;
    if (activeContact) {
      result = updateContact(contacts, record);
    } else result = addContact(contacts, record);
    hideForm();
    setContacts(result);
    if (filter) {
      filterFunc(result, filter);
    } else {
      setFilteredContacts(result);
    }
  };

  useEffect(() => {
    if (activeContact) {
      showContactForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeContact]);

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
          onClick={showContactForm}
        >
          Add Contact
        </button>
        {error ? (
          <div className="contact_page-error">
            <p>Something went wrong, please try again later</p>
          </div>
        ) : null}
      </div>
      <div
        ref={formRef}
        className="contact_page-form_container contact_page-form_container--hidden"
      >
        <div
          className="close"
          onClick={hideForm}
          onKeyDown={hideForm}
          role="button"
          tabIndex={0}
          aria-label="close"
        />
        <ContactForm
          callback={contactFormCallback}
          contactData={activeContact}
        />
      </div>
    </div>
  );
};

export default ContactPage;
