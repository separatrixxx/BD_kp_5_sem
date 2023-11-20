import axios, { AxiosResponse } from "axios";
import { CompanyInterface } from "interfaces/company.interface";


export async function getCompanies(setCompanies: (e: any) => void) {
    const { data: companies }: AxiosResponse<CompanyInterface[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
        '/db/viewDb?dbName=film_disk_companies');

        setCompanies(companies);
};

export async function addCompany(id: string, companyName: string, disruptedDelievers: string, phoneNumber: string,
    agreementPrice: string, dateOfSigning: string, dateOfTermination: string, contactId: string, setError: (e: any) => void) {
    let body: CompanyInterface = {};

    if (id) {
        body.id = +id;
    }
    if (companyName) {
        body.companyName = companyName;
    }
    if (disruptedDelievers) {
        body.disruptedDelievers = +disruptedDelievers;
    }
    if (phoneNumber) {
        body.phoneNumber = phoneNumber as string;
    }
    if (agreementPrice) {
        body.agreementPrice = +agreementPrice;
    }
    if (dateOfSigning) {
        body.dateOfSigning = dateOfSigning;
    }
    if (dateOfTermination) {
        body.dateOfTermination = dateOfTermination;
    }
    if (contactId) {
        body.contactId = +contactId;
    }

    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/db/addDb?dbName=film_disk_companies', body)
        .then(function () {
            console.log('Компания добавлена');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при добавлении компании: " + error);
            
            setError(error.response.data.errorCode === 'VALIDATION_ERROR' ? 'Ошибка валидации: ' + error.response.data.errorMessage 
                : 'Ошибка Postgresql: ' + error.response.data.errorMessage);
        });
};

export async function deleteCompany(id: string, setError: (e: any) => void) {
    await axios.delete(process.env.NEXT_PUBLIC_DOMAIN + '/db/deleteDb?dbName=film_disk_companies&deleteId='+ id)
        .then(function () {
            console.log('Компания удалена');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при удалении компании: " + error);
            
            setError(error.response.data.errorCode === 'VALIDATION_ERROR' ? 'Ошибка валидации: ' + error.response.data.errorMessage 
                : 'Ошибка Postgresql: ' + error.response.data.errorMessage);
        });
};

export async function updateCompany(columnName: string, newValue: string, id: string, setError: (e: any) => void) {
    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/db/updateDb?dbName=film_disk_companies', {
        columnName: columnName,
        newValue: "'" + newValue + "'",
        id: id,
    })
        .then(function () {
            console.log('Компания обновлена');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при обновлении компании: " + error);
            
            setError(error.response.data.errorCode === 'VALIDATION_ERROR' ? 'Ошибка валидации: ' + error.response.data.errorMessage 
                : 'Ошибка Postgresql: ' + error.response.data.errorMessage);
        });
};
