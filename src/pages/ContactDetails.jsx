import { useEffect, useState } from "react"
import { DeleteContact, FetchContactById } from "../apis/contacts";
import { useParams } from 'react-router-dom';
import ResponseMessage from "../components/ResponseMessage";

const ContactDetails = () => {
  const params = useParams();

  const [contact, setContact] = useState({});
  const [message, setMessage] = useState({
    type: '',
    content: ''
  });

  useEffect(() => {
    FetchContactById(params.contactId)
      .then((response) => {
        setContact(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteContact = (event) => {
    event.preventDefault();

    DeleteContact(params.contactId)
      .then((response) => {
        setMessage({
          type: 'success',
          content: response
        });

        setTimeout(() => {
          window.location.replace('/contacts/');
        }, 2000)
      })
      .catch((error) => {
        if (error.response.status === 500) {
          setMessage({
            type: 'error',
            content: "Unable to delete contact"
          })
        }
      })
      .finally(() => {
        setTimeout(() => {
          setMessage({
            type: "",
            content: ""
          });
        }, 3000);
      })
  }

  return (
    <div>
      <h1>Name: {contact.fullName}</h1>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>

      <button onClick={deleteContact} type="button">Delete</button>

      <ResponseMessage type={message.type} content={message.content} />

    </div>
  )
}

export default ContactDetails