import axios, { AxiosResponse } from "axios";
import { ContactsInterface } from "interfaces/contacts.interface";


export async function getContacts(setContacts: (e: any) => void) {
    const { data: contacts }: AxiosResponse<ContactsInterface[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
        '/db/viewDb?dbName=company_contacts');

        setContacts(contacts);
};

export async function addContacts(id: string, email: string, address: string, working_hours: string, setError: (e: any) => void) {
    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/db/addDb?dbName=company_contacts', {
        id: id,
        email: email,
        address: address,
        workingHours: working_hours,
    })
        .then(function () {
            console.log('Контакты добавлены');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при добавлении контактов: " + error);
            
            if (error.response) {
                setError(error.response.errorMessage);
            } else {
                setError(error.message);
            }
        });
};

export async function deleteContacts(id: string, setError: (e: any) => void) {
    await axios.delete(process.env.NEXT_PUBLIC_DOMAIN + '/db/deleteDb?dbName=company_contacts?deleteId='+ id)
        .then(function () {
            console.log('Контакты удалены');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при удалении контактов: " + error);
            
            if (error.response) {
                setError(error.response.errorMessage);
            } else {
                setError(error.message);
            }
        });
};

export async function updateContacts(columnName: string, newValue: string, id: string, setError: (e: any) => void) {
    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/db/updateDb?dbName=company_contacts', {
        columnName: columnName,
        newValue: "'" + newValue + "'",
        id: id,
    })
        .then(function () {
            console.log('Контакты обновлениы');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при обновлении контактов: " + error);
            
            if (error.response) {
                setError(error.response.errorMessage);
            } else {
                setError(error.message);
            }
        });
};
