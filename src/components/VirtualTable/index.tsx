import React, { useState } from "react";

import ContactRow from "../ContactRow";

import "./VirtualTable.scss";

import { ContactProps } from "../../contactType";

export interface VTProp {
  rowsData: ContactProps[];
  rowHeight: number;
  viewportHeight: number;
  rowOperationCallback: (isEdit: boolean, id: string) => void;
}

const VirtualTable: React.FC<VTProp> = ({
  rowsData,
  rowHeight,
  viewportHeight,
  rowOperationCallback,
}: VTProp) => {
  const [scrollTop, setScrollTop] = useState(0);

  const rowsCount = rowsData.length;
  const totalHeight = rowsCount * rowHeight;
  const renderAhead = 10;

  let startNode = Math.floor(scrollTop / rowHeight) - renderAhead;
  startNode = Math.max(0, startNode);

  let visibleNodesCount =
    // 2 - because rows in buffer above and below
    Math.ceil(viewportHeight / rowHeight) + 2 * renderAhead;
  visibleNodesCount = Math.min(rowsCount - startNode, visibleNodesCount);

  const onScroll = (e: React.UIEvent<HTMLElement>): void => {
    e.stopPropagation();
    setScrollTop(e.currentTarget.scrollTop);
  };

  const offsetY = startNode * rowHeight;

  const visibleRows = rowsData.slice(startNode, startNode + visibleNodesCount);

  return (
    <div className="table" onScroll={onScroll}>
      <div className="viewport" style={{ height: totalHeight }}>
        <div
          style={{
            willChange: "transform",
            transform: `translateY(${offsetY}px)`,
          }}
        >
          {visibleRows.map((contactData) => (
            <ContactRow
              contactData={contactData}
              callback={rowOperationCallback}
              key={`${contactData.firstName}-${contactData.lastName}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualTable;
