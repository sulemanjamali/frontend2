import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <>
      {/* <p>{contact.fullName}</p>
      <p>{contact.address}</p>
      <p>{contact.phoneNumber}</p>
      <p>{contact.email}</p> */}
      <p>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
          style={{}}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </p>
    </>
  );
};

export default ReadOnlyRow;
