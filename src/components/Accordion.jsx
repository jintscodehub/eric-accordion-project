import { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionData from "./api/AccordionData.json";
import formModal from "./formModal";

export default function Accordion() {
  const [data, setData] = useState([]);
  const [theClickedItemId, setTheClickedItemId] = useState(null);

  useEffect(() => {
    setData(AccordionData);
  }, []);

  const getTheClickedItemId = (itemId) => {
    setTheClickedItemId((currentId) => (currentId === itemId ? null : itemId));
    //The expression above says: is the currentId in the state variable
    // equals to the id of the clicked item? If so, then remove it from
    //from the state so that the item gets closed, and if not, then set
    //it to the id of the clicked item, so that the item gets open.
  };

  return (
    <>
      {/* <h1>List of Website</h1> */}
      <ul className="accordion-container">
        {data.map((itemData, index) => {
          const itemId = index;
          return (
            <AccordionItem
              key={itemId}
              dataContent={itemData}
              onItemClicked={() => getTheClickedItemId(itemId)}
              isClicked={theClickedItemId === itemId}
            />
          );
        })}
      </ul>
      <formModal />
    </>
  );
}
