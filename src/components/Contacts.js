import React from "react";

import "./Contacts.css";

const Contects = ({ users }) => {
  //console.log(users);
  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="contacts-container">
          <div className="contact-card">
            <p className="contact-name">{user.name}</p>
            <p className="contact-email">{user.email}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Contects;
