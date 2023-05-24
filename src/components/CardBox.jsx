import React from "react";
import ReadOnlyRow from "./Card_ReadOnlyRow2";
import EditableRow from "./Card_EditableRow2";
const CardBox = (props) => {
  const {contact,
    editContactId,
    editFormData,
    handleEditFormChange,
    handleCancelClick,
    handleEditClick,
    handleDeleteClick
  }=props
  return (
    <>
      {/* <h1>card box</h1> */}
      <div className="card p-4 m-2" id="contact_card">
        <h5 className="card-title">Id : {contact.id}</h5>
        <div className="card-body">
          <h6>Name: {contact.fullName}</h6>
          <h6>{contact.address}</h6>
          <h6>{contact.phoneNumber}</h6>
          <h6>{contact.email}</h6>
          {editContactId === contact.id ? (
            <EditableRow
              editFormData={editFormData}
              handleEditFormChange={handleEditFormChange}
              handleCancelClick={handleCancelClick}
            />
          ) : (
            <ReadOnlyRow
              contact={contact}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CardBox;
