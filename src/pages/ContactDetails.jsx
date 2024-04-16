import { useEffect, useState } from "react"
import { DeleteContact, FetchContactById } from "../apis/contacts";
import { useParams, useNavigate } from 'react-router-dom';

const ContactDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

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
          type:'success',
          content: response
        });
        
        setTimeout(() => {
          // Vanilla JavaScript, it reloads the website
          window.location.replace('/contacts/');
          // Using react-router-dom
          // navigate('/');
          
        },2000)
      })
     .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Name: {contact.fullName}</h1>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>

      <button onClick={deleteContact} type="button">Delete</button>

      {message.type === 'success' && <p className="px-3 py-2 text-green-700 bg-green-200 rounded-sm">{message.content}</p>}
      {message.type === 'error' && <p className="px-3 py-2 text-red-700 bg-red-200 rounded-sm">{message.content}</p>}

    </div>
  )
}

export default ContactDetails