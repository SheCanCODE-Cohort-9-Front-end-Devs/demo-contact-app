import { useEffect, useState } from "react"
import { FetchContactById } from "../apis/contacts";
import { useParams } from 'react-router-dom';

const ContactDetails = () => {
  const params = useParams();
  const [contact, setContact] = useState({});

  useEffect(() => {
    FetchContactById(params.contactId)
     .then((response) => {
        setContact(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{contact.fullName}</h1>
    </div>
  )
}

export default ContactDetails