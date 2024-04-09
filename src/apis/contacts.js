import axios from "axios";
const API = import.meta.env.VITE_BASE_API;

/**
 * Fetches all contacts from the API.
 *
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of contact objects.
 * @throws {Error} If there's an error fetching the contacts.
 */
export const FetchContacts = () => {
    return axios.get(API + "/contact/list")
        .then((response) => {
            console.log(response.data.contacts);
            return response.data.contacts;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

export const FetchContactById = (id) => {
    return axios.get(API + "/contact/findById?id="+id)
        .then((response) => {
            console.log(response.data.contact);
            return response.data.contact;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

export const UpdateContact = () => {

};

export const DeleteContact = () => {

};