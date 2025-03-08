export default function formModal({ isOpen }) {
  return (
    isOpen && (
      <div>
        <form action="">
          <div className="form-widget">
            <label htmlFor="topic">Topic</label>
            <input type="text" id="topic" />
          </div>
          <label htmlFor="url">Website Details</label>
          <div id="urldetails">
            <div className="form-widget">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" />
            </div>
            <div className="form-widget">
              <label htmlFor="type">Type</label>
              <input type="text" id="type" />
            </div>
            <div className="form-widget">
              <label htmlFor="category">Category</label>
              <input type="text" id="category" />
            </div>
            <div className="form-widget">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description"></textarea>
            </div>
            <div className="form-widget">
              <label htmlFor="url">URL</label>
              <input type="text" id="url" />
            </div>
          </div>
          <button type="submit">Add Node</button>
        </form>
      </div>
    )
  );
}
