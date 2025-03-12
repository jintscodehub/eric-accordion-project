import { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionData from "./api/AccordionData.json";
import FormModal from "./formModal";

export default function Accordion() {
  const [nodeData, setNodeData] = useState([]);
  const [data, setData] = useState([]);
  const [theClickedItemId, setTheClickedItemId] = useState(null);
  const [theFormModalClickedItemId, setTheFormModalClickedItemId] =
    useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setNodeData(JSON.parse(localStorage.getItem("nodeData")));
  }, [localStorage.getItem("nodeData")]);

  console.log("NodeData from localStorage", nodeData);

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

  const getTheFormModalClickedItemId = (itemId) => {
    setTheFormModalClickedItemId((currentId) =>
      currentId === itemId ? null : itemId
    );
  };

  function openModal() {
    setIsModalOpen(true);
    console.log("got clicked");
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="flex justify-end w-[60%] m-auto mt-9">
        <button
          onClick={openModal}
          className="btn block text-black bg-blue hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          type="button"
        >
          Create a New Node
        </button>
      </div>
      {/* <h1>List of Website</h1> */}
      <ul className="accordion-container">
        {nodeData
          ? nodeData?.map((itemData, index) => {
              const itemId = index;
              return (
                <AccordionItem
                  key={itemId}
                  dataContent={itemData}
                  onItemClicked={() => getTheClickedItemId(itemId)}
                  isClicked={theClickedItemId === itemId}
                />
              );
            })
          : "Create a Node Node To display Data"}
      </ul>

      <FormModal
        isModalItemClicked={(itmId) => theFormModalClickedItemId === itmId}
        onItemClicked={(itmId) => getTheFormModalClickedItemId(itmId)}
        isOpen={isModalOpen}
        onClose={() => {
          closeModal();
        }}
      />
    </>
  );
}
