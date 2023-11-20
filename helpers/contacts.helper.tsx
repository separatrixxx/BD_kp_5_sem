import axios, { AxiosResponse } from "axios";
import { ContactsInterface } from "interfaces/contacts.interface";


export async function getContacts(setContacts: (e: any) => void) {
    const { data: contacts }: AxiosResponse<ContactsInterface[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
        '/db/viewDb?dbName=company_contacts');

        setContacts(contacts);
};

export async function addContacts(id: string, email: string, address: string, workingHours: string, setError: (e: any) => void) {
    let body: ContactsInterface = {};

    if (id) {
        body.id = +id;
    }
    if (email) {
        body.email = email;
    }
    if (address) {
        body.email = address;
    }
    if (workingHours) {
        body.workingHours = workingHours;
    }

    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/db/addDb?dbName=company_contacts', body)
        .then(function () {
            console.log('Контакты добавлены');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при добавлении контактов: " + error);
            
            setError(error.response.data.errorCode === 'VALIDATION_ERROR' ? 'Ошибка валидации: ' + error.response.data.errorMessage 
            : 'Ошибка Postgresql: ' + error.response.data.errorMessage);
        });
};

export async function deleteContacts(id: string, setError: (e: any) => void) {
    await axios.delete(process.env.NEXT_PUBLIC_DOMAIN + '/db/deleteDb?dbName=company_contacts&deleteId='+ id)
        .then(function () {
            console.log('Контакты удалены');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при удалении контактов: " + error);
            
            setError(error.response.data.errorCode === 'VALIDATION_ERROR' ? 'Ошибка валидации: ' + error.response.data.errorMessage 
                : 'Ошибка Postgresql: ' + error.response.data.errorMessage);
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
            
            setError(error.response.data.errorCode === 'VALIDATION_ERROR' ? 'Ошибка валидации: ' + error.response.data.errorMessage 
                : 'Ошибка Postgresql: ' + error.response.data.errorMessage);
        });
};
