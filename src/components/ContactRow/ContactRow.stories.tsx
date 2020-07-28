import React from "react";

import ContactRow from "./index";
import { ContactProps } from "../../contactType";

export default {
  title: "Contact Row",
  component: ContactRow,
};

export const Base: React.FC = () => {
  const data: ContactProps = {
    firstName: "Иван",
    lastName: "Рюрикович",
    address: "Хоромы",
    email: "челом бить",
    phone: "колокол",
  };

  const rowIndex = 0;

  const callback = (isEdit: boolean, index: number): void => {
    console.log(isEdit);
    console.log(index);
  };

  return <ContactRow contactData={data} index={rowIndex} callback={callback} />;
};
