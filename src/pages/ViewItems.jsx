import { useEffect, useState } from "react";
import { getItems, saveItems } from "../utils/localStorage";

export default function ViewItems() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const loadedItems = getItems();
    console.log("Items from localStorage:", loadedItems);
    setItems(loadedItems);
  }, []);

  const handleDelete = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    saveItems(updated);
    setItems(updated);
  };

  return (
    <div className="view-container">
      <h2>All Items</h2>
      <div className="item-grid">
        {items && items.length > 0 ? (
          items.map((item, idx) => (
            <div key={idx} className="item-card">
              <div onClick={() => setSelectedItem(item)}>
                <img
                  src={item.coverImage}
                  alt={item.name}
                  className="item-img"
                />
                <h3>{item.name}</h3>
                <p>{item.type}</p>
              </div>
              <button className="delete-btn" onClick={() => handleDelete(idx)}>
                🗑️ Delete
              </button>
            </div>
          ))
        ) : (
          <p>No items to display</p>
        )}
      </div>
      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedItem.name}</h2>
            <img
              src={selectedItem.coverImage}
              alt={selectedItem.name}
              style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
            />
            <p>{selectedItem.description}</p>
            {selectedItem.images && selectedItem.images.length > 0 && (
              <div className="carousel">
                {selectedItem.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`img-${i}`}
                    style={{ width: "100px", marginRight: "10px" }}
                  />
                ))}
              </div>
            )}
            <button onClick={() => alert("Enquiry sent!")}>Enquire</button>
            <button
              onClick={() => setSelectedItem(null)}
              style={{ marginLeft: "10px" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
