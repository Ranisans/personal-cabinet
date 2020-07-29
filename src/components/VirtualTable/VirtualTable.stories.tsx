import React from "react";

import VirtualTable from ".";

import { contacts } from "../../db.json";

export default {
  title: "Virtual Table",
  component: VirtualTable,
};

export const Default: React.FC = () => {
  const rowHeight = 40;
  const viewportHeight = 500;

  const rowOperationCallback = (isEdit: boolean, index: number): void => {
    console.log(isEdit);
    console.log(index);
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
