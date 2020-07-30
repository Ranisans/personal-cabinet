import React from "react";

import ContactRow from "./index";
import { ContactProps } from "../../contactType";

export default {
  title: "Contact Row",
  component: ContactRow,
};

export const Base: React.FC = () => {
  const data: ContactProps = {
    id: "asd-asd-asdad",
    firstName: "Иван",
    lastName: "Рюрикович",
    address: "Хоромы",
    email: "челом бить",
    phone: "колокол",
  };

  const callback = (isEdit: boolean, id: string): void => {
    console.log(isEdit);
    console.log(id);
  };

  return <ContactRow contactData={data} callback={callback} />;
};
