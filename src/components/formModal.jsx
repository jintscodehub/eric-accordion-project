import React, { useRef } from "react";
import Node1Form from "./Node1Form";
import Draggable from "react-draggable";

export default function FormModal(props) {
  const nodeRef = useRef(null); // Create a ref for Draggable
  // const isDragging = useRef(false);

  return (
    props?.isOpen && (
      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
        <Draggable handle=".handleDrag" nodeRef={nodeRef}>
          <div
            ref={nodeRef}
            className="relative p-4 w-full h-full md:h-auto max-w-2xl m-auto"
          >
            {/* Modal content */}
            <div className="relative p-4 bg-blue-100 rounded-lg shadow sm:p-5">
              {/* dark:bg-gray-800 */}
              {/* Modal header */}
              <div
                className={`handleDrag hover:cursor-move flex justify-between items-center 
                  pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600`}
              >
                <h3 className="text-3xl font-semibold text-gray-900 ">
                  {/* dark:text-white */}
                  Add New Node
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={props?.onClose}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close</span>
                </button>
              </div>
              {/* Modal body */}
              <h2 className="text-black mb-1.5 text-2xl">Select a Node Type</h2>
              <ul className="flex flex-col justify-center w-full ">
                <li className="mb-2">
                  <div className="accordion-header flex justify-between bg-cyan-800 rounded-t-md">
                    <h2
                      onClick={() => {
                        props?.isModalItemClicked(1);
                        props?.onItemClicked(1);
                      }}
                      className="absolute font-bold font-serif pl-4 text-amber-50"
                    >
                      Website Node
                    </h2>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        props?.onItemClicked(1);
                      }}
                      className={
                        props?.isModalItemClicked(1) ? "active-btn" : "btn"
                      }
                      style={{ marginLeft: "auto", marginRight: "10px" }}
                    >
                      {props?.isModalItemClicked(1) ? "-" : "+"}
                    </button>
                  </div>
                  {props?.isModalItemClicked(1) && <Node1Form />}
                </li>
                <li className="mb-2">
                  <div className="accordion-header flex justify-between  bg-cyan-800">
                    <h2
                      onClick={() => {
                        props?.isModalItemClicked(2);
                        props?.onItemClicked(2);
                      }}
                      className="absolute font-bold font-serif pl-4 text-amber-50"
                    >
                      Event Node
                    </h2>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        props?.onItemClicked(2);
                      }}
                      className={
                        props?.isModalItemClicked(2) ? "active-btn" : "btn"
                      }
                      style={{ marginLeft: "auto", marginRight: "10px" }}
                    >
                      {props?.isModalItemClicked(2) ? "-" : "+"}
                    </button>
                  </div>
                  {props?.isModalItemClicked(2) && <Node1Form />}
                </li>
                <li className="mb-2">
                  <div className="accordion-header flex justify-between  bg-cyan-800 rounded-b-md">
                    <h2
                      onClick={() => {
                        props?.isModalItemClicked(3);
                        props?.onItemClicked(3);
                      }}
                      className="absolute font-bold font-serif pl-4 text-amber-50"
                    >
                      List
                    </h2>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        props?.onItemClicked(3);
                      }}
                      className={
                        props?.isModalItemClicked(3) ? "active-btn" : "btn"
                      }
                      style={{ marginLeft: "auto", marginRight: "10px" }}
                    >
                      {props?.isModalItemClicked(3) ? "-" : "+"}
                    </button>
                  </div>
                  {props?.isModalItemClicked(3) && <Node1Form />}
                </li>
              </ul>
            </div>
          </div>
        </Draggable>
      </div>
    )
  );
}
