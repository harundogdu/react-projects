import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
function Contacts() {
  const [contacts, setContacts] = useState([
    { full_name: "Person One", phone_number: "1234" },
    { full_name: "Person Two", phone_number: "567" },
    { full_name: "Person Three", phone_number: "890" },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <div id="box">
        <List contacts={contacts} />      
        <Form addContacts={setContacts} contacts={contacts} />
      </div>
      <div id="footer">
        <span>powered by <a href="https://harundogdu.com">Harun Doğdu</a></span>  
      </div>
    </div>
  );
}

export default Contacts;
