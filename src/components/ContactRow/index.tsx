import React from "react";

import { ContactProps } from "../../contactType";

import "./ContactRow.scss";

export interface CRProps {
  contactData: ContactProps;
  callback: (isEdit: boolean, id: string) => void;
}

const ContactRow: React.FC<CRProps> = ({ contactData, callback }: CRProps) => {
  const deleteHandler = () => {
    callback(false, contactData.id);
  };
  const editHandler = () => {
    callback(true, contactData.id);
  };

  return (
    <div className="contact_row">
      <div className="contact_row-first_name contact_row-element">
        {contactData.firstName}
      </div>
      <div className="contact_row-last_name contact_row-element">
        {contactData.lastName}
      </div>
      <div className="contact_row-address contact_row-element">
        {contactData.address}
      </div>
      <div className="contact_row-email contact_row-element">
        {contactData.email}
      </div>
      <div className="contact_row-phone contact_row-element">
        {contactData.phone}
      </div>
      <div
        className="contact_row-delete contact_row-icon"
        onClick={deleteHandler}
        onKeyDown={deleteHandler}
        role="button"
        tabIndex={0}
        aria-label="delete"
      />
      <div
        className="contact_row-edit contact_row-icon"
        onClick={editHandler}
        onKeyDown={editHandler}
        role="button"
        tabIndex={0}
        aria-label="edit"
      />
    </div>
  );
};

export default ContactRow;
