import React from "react";

import ContactForm from "./index";
import { ContactProps } from "../../contactType";

import "./ContactForm.scss";

export default {
  title: "Contact Form",
  component: ContactForm,
};

export const AddNewRecord: React.FC = () => {
  const callback = (data: ContactProps): void => {
    console.log(data);
  };

  return <ContactForm callback={callback} contactData={null} />;
};

export const UpdateRecord: React.FC = () => {
  const callback = (data: ContactProps): void => {
    console.log(data);
  };

  const data: ContactProps = {
    firstName: "Иван",
    lastName: "Рюрикович",
    address: "Хоромы",
    email: "челом бить",
    phone: "колокол",
  };

  return <ContactForm callback={callback} contactData={data} />;
};
