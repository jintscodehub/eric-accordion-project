import { useState } from "react";
import InnerAccordionItem from "./InnerAccordionItem";

export default function AccordionItem({
  dataContent,
  isClicked,
  onItemClicked,
}) {
  const [theClickedInnerItemId, setTheClickedInnerItemId] = useState(null);
  const { topic, listOfURL } = dataContent;

  const getTheClickedInnerItemId = (innerItemId) => {
    setTheClickedInnerItemId((currentInnerItemId) =>
      currentInnerItemId === innerItemId ? null : innerItemId
    );
  };

  return (
    <>
      <li onClick={onItemClicked}>
        <div className="accordion-header">
          <h2 className="accordion-title">{topic}</h2>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onItemClicked();
            }}
            className={isClicked ? "active-btn" : ""}
          >
            {isClicked ? "-" : "+"}
          </button>
        </div>
        <hr />
        {isClicked && (
          <ul className="accordion-content-wrapper">
            {listOfURL.map((itemData, index) => {
              const innerItemId = index;
              return (
                <InnerAccordionItem
                  key={index}
                  innerItemData={itemData}
                  isInnerItemOpen={theClickedInnerItemId === innerItemId}
                  onInnerItemClicked={() =>
                    getTheClickedInnerItemId(innerItemId)
                  }
                />
              );
            })}
          </ul>
        )}
      </li>
    </>
  );
}
