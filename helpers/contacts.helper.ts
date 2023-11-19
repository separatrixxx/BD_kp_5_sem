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
        working_hours: working_hours,
    })
        .then(function () {
            console.log('Контакты добавлены');
        })
        .catch(function (error) {
            console.log("Ошибка при добавлении контактов: " + error);
            setError("Ошибка при добавлении контактов: " + error);
        });
};

export async function deleteContacts(columnName: string, value: string, setError: (e: any) => void) {
    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/db/deleteDb?dbName=company_contacts', {
        columnName: columnName,
        value: value,
    })
        .then(function () {
            console.log('Контакты удалены');
        })
        .catch(function (error) {
            console.log("Ошибка при удалении контактов: " + error);
            setError("Ошибка при добавлении контактов: " + error);
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
        })
        .catch(function (error) {
            console.log("Ошибка при обновлении контактов: " + error);
            setError("Ошибка при добавлении контактов: " + error);
        });
};
