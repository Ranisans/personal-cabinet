import React from "react";

import { ContactProps } from "../../contactType";

import "./ContactRow.scss";

export interface CRProps {
  contactData: ContactProps;
  index: number;
  callback: (isEdit: boolean, index: number) => void;
}

const ContactRow: React.FC<CRProps> = ({
  contactData,
  index,
  callback,
}: CRProps) => {
  const deleteHandler = () => {
    callback(false, index);
  };
  const editHandler = () => {
    callback(true, index);
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
        className="contact_row-delete"
        onClick={deleteHandler}
        onKeyDown={deleteHandler}
        role="button"
        tabIndex={0}
        aria-label="delete"
      />
      <div
        className="contact_row-edit"
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
