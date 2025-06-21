export const getItems = () => {
    const items = localStorage.getItem("items");
    return items ? JSON.parse(items) : [];
};

export const saveItems = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
};
  