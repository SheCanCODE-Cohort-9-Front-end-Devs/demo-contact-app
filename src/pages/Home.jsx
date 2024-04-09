import { useState, useEffect } from "react"
import { FetchContacts } from "../apis/contacts"
import Contact from "../components/Contact";

const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    FetchContacts()
      .then((response) => {
        setContacts(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div>
      <h1>Contacts</h1>
      <div className="flex">
        {contacts.map((contact) => (
          <Contact key={contact._id} contact={contact} />
        ))}
      </div>
    </div>
  )
}

export default Home