import React, { useState, useEffect } from "react";

import InputBlock from "../InputBlock";
import { ContactProps } from "../../contactType";

export interface CFProps {
  callback: (data: ContactProps) => void;
  contactData: ContactProps | null;
}

const ContactForm: React.FC<CFProps> = ({ callback, contactData }: CFProps) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    if (contactData) {
      setFirstName(contactData.firstName);
      setLastName(contactData.lastName);
      setAddress(contactData.address);
      setEmail(contactData.email);
      setPhone(contactData.phone);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendData = (e: React.FormEvent<HTMLButtonElement>): void => {
    if (firstName && lastName && address && email && phone) {
      e.preventDefault();
      callback({ firstName, lastName, address, email, phone });
    }
  };

  return (
    <form className="contact_form">
      <div className="contact_form-input_container">
        <InputBlock
          className="contact_form-first_name"
          label="first name"
          value={firstName}
          placeholder="Ivan"
          callback={setFirstName}
        />
        <InputBlock
          className="contact_form-last_name"
          label="last name"
          value={lastName}
          placeholder="Ivanov"
          callback={setLastName}
        />
        <InputBlock
          className="contact_form-address"
          label="address"
          value={address}
          placeholder="Moscow, Staraya Basmannaya Str"
          callback={setAddress}
        />
        <InputBlock
          className="contact_form-email"
          label="email"
          value={email}
          placeholder="abc@example.com"
          callback={setEmail}
        />
        <InputBlock
          className="contact_form-phone"
          label="phone"
          value={phone}
          placeholder="8-800-555-35-35"
          callback={setPhone}
        />
      </div>
      <button type="submit" className="contact_form-submit" onClick={sendData}>
        {contactData ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default ContactForm;
