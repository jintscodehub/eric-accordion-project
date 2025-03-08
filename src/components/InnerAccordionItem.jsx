export default function InnerAccordionItem({
  innerItemData,
  isInnerItemOpen,
  onInnerItemClicked,
}) {
  const { Title, URL, Category, Type, Description } = innerItemData;

  return (
    <li
      onClick={(e) => {
        e.stopPropagation();
        onInnerItemClicked();
      }}
    >
      <div className="accordion-header">
        <h2 className="accordion-title">{Title}</h2>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onInnerItemClicked();
          }}
          className={isInnerItemOpen ? "active-btn" : ""}
        >
          {isInnerItemOpen ? "-" : "+"}
        </button>
      </div>
      <hr />
      {isInnerItemOpen && (
        <div
          style={{ padding: "1rem", backgroundColor: "#f7f9f8", margin: "5px" }}
        >
          <p>URL: {URL}</p>
          <p>Type: {Type}</p>
          <p>Category:{Category}</p>
          <p>Description: {Description}</p>
        </div>
      )}
    </li>
  );
}
