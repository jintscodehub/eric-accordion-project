import React, { useState, useEffect } from "react";
import AccordionData from "./api/AccordionData.json";

export default function Node1Form() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [isNewTopic, setIsNewTopic] = useState(false);
  const [newTopic, setNewTopic] = useState("");
  const [input, setInput] = useState({
    Topic: "",
    URL: "",
    Title: "",
    Type: "",
    Category: "",
    Description: "",
  });

  const [node, setNode] = useState([]);

  useEffect(() => {
    setNode(AccordionData);
  }, []);

  useEffect(() => {
    localStorage.setItem("nodeData", JSON.stringify(node));
  }, [node]);

  useEffect(() => {
    console.log("Input", input);
  }, [input]);

  const getInput = (e) => {
    const { name, value } = e.target;
    // The conditional statement is triggered when the select widget of the form is touched.
    if (name === "Topic") {
      if (value === "New Topic") {
        setSelectedTopic("New Topic");
        setIsNewTopic(true);
      } else {
        setIsNewTopic(false);
        setSelectedTopic(value);
        setInput((prev) => ({ ...prev, Topic: value })); // Update topic state
      }
    } else {
      setInput((prev) => ({ ...prev, [name]: value }));
    }
    // And this is triggered when the appeared input is touched
    if (name === "New Topic") {
      console.log("Name:", name, "Value:", value);
      setNewTopic(value);
      setInput((prev) => ({ ...prev, Topic: value }));
    }
  };

  const createNode = (e) => {
    e.preventDefault();
    console.log("Got called");
    const { Topic, URL, Title, Type, Category, Description } = input;
    setNode((initialInput) => {
      const updatedData = [...initialInput];
      const topicIndex = updatedData.findIndex((item) => item.topic === Topic);

      if (topicIndex !== -1) {
        // Update existing topic
        updatedData[topicIndex].listOfURL.push({
          URL,
          Title,
          Type,
          Category,
          Description,
        });
      } else {
        updatedData.push({
          topic: Topic,
          listOfURL: [{ URL, Title, Type, Category, Description }],
        });
      }
      return updatedData;
    });
  };

  return (
    <form action="#" className="" onSubmit={createNode}>
      <div className="flex flex-col gap-4 mb-4 sm:grid-cols-2 bg-gray-500 p-3 rounded-b-md">
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Topic
          </label>
          <div className="grid gap-4">
            <select
              onChange={getInput}
              name="Topic"
              id="topic"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg 
            focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value={selectedTopic}
            >
              <option value="Select An Existing Topic (Parent Topic)">
                Create a New Topic or Select to Update an Existing One
              </option>
              {node.map((item, index) => {
                return (
                  <option key={index} value={item.topic}>
                    {item.topic}
                  </option>
                );
              })}
              <option value="New Topic">New Topic</option>
            </select>
            {isNewTopic && (
              <>
                <input
                  onChange={getInput}
                  type="text"
                  name="New Topic"
                  id="NewTopic"
                  className="bg-gray-50 border border-gray-300 text-white 
            text-xl rounded-lg focus:ring-primary-600 focus:border-primary-600 
            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white  
            dark:focus:border-primary-500"
                  placeholder="What's the topic of your Node?"
                  required=""
                  value={newTopic}
                />
              </>
            )}
          </div>
        </div>
        <label htmlFor="URLDetails" className="text-white text-xl">
          Link Details:
        </label>
        <div id="URLDetails" className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="url"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            >
              URL
            </label>
            <input
              onChange={getInput}
              type="text"
              name="URL"
              id="url"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter the URL"
              required=""
              value={input.URL}
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              onChange={getInput}
              type="text"
              name="Title"
              id="title"
              className="bg-gray-50 border border-gray-300 text-white 
            text-xl rounded-lg focus:ring-primary-600 focus:border-primary-600 
            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white  
            dark:focus:border-primary-500"
              placeholder="Node Title"
              required=""
              value={input.Title}
            />
          </div>
          <div>
            <label
              htmlFor="Type"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            >
              Type
            </label>
            <input
              onChange={getInput}
              type="text"
              name="Type"
              id="type"
              className="bg-gray-50 border border-gray-300 text-white 
            text-xl rounded-lg focus:ring-primary-600 focus:border-primary-600 
            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white 
            dark:focus:border-cyan-500"
              placeholder="What type of Website? NGO, Social Media, etc?"
              required=""
              value={input.Type}
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              onChange={getInput}
              name="Category"
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg 
            focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              defaultValue={"Select Category"}
              value={input.Category}
            >
              <option value="Select Category">Select category</option>
              <option value="Home Page">Home Page</option>
              <option value="About Page">About page</option>
              <option value="Job Listing Page">Job Listing Page</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              onChange={getInput}
              name="Description"
              id="description"
              rows="4"
              className="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border 
            border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
            dark:focus:border-primary-500"
              placeholder="Write node description here"
              value={input.Description}
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className=" bg-cyan-800 text-white inline-flex items-center hover:bg-cyan-700 justify-center
        focus:ring-4 focus:outline-none focus:ring-cyan-500 font-medium rounded-lg text-xl 
        px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          <svg
            className="mr-1 -ml-1 w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          Add Node
        </button>
      </div>
    </form>
  );
}
