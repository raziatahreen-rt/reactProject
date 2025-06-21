export default function ItemModal({ item, onClose }) {
  return (
    <div className="modal-bg">
      <div className="modal-content">
        <button onClick={onClose} style={{ float: "right" }}>
          X
        </button>
        <h2>{item.name}</h2>
        <p>
          <strong>Type:</strong> {item.type}
        </p>
        <p>{item.description}</p>
        <div className="carousel">
          {item.images.map((img, i) => (
            <img key={i} src={img} alt={`extra-${i}`} />
          ))}
        </div>
        <button onClick={() => alert("Enquiry email sent!")}>Enquire</button>
      </div>
    </div>
  );
}
