import { useState } from "react";
import { getItems, saveItems } from "../utils/localStorage";

export default function AddItem() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [images, setImages] = useState("");
  const [success, setSuccess] = useState(false);

  const handleAdd = () => {
    if (!name || !type || !description || !coverImage) {
      alert("Please fill in all required fields.");
      return;
    }

    const newItem = {
      name,
      type,
      description,
      coverImage,
      images: images
        .split(",")
        .map((url) => url.trim())
        .filter(Boolean),
    };

    const allItems = getItems();
    saveItems([...allItems, newItem]);
    setSuccess(true);

    setName("");
    setType("");
    setDescription("");
    setCoverImage("");
    setImages("");
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="add-form">
      <h2>Add New Item</h2>
      <input
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Item Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <textarea
        placeholder="Item Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        placeholder="Cover Image URL"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
      />
      {coverImage && (
        <img src={coverImage} alt="preview" className="preview-img" />
      )}
      <input
        placeholder="Additional Images (comma-separated URLs)"
        value={images}
        onChange={(e) => setImages(e.target.value)}
      />
      <button onClick={handleAdd}>Add Item</button>
      {success && <p className="success-msg">✅ Item successfully added!</p>}
    </div>
  );
}
