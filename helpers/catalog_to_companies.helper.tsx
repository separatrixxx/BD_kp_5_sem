import axios, { AxiosResponse } from "axios";
import { CatalogToCompaiesInterface } from "interfaces/catalog_to_companies.interface";


export async function getCatalogToCompanies(setCatalogToCOmpanies: (e: any) => void) {
    const { data: catalogToCompanies }: AxiosResponse<CatalogToCompaiesInterface[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
        '/db/viewDb?dbName=catalog_to_companies');

        setCatalogToCOmpanies(catalogToCompanies);
};

export async function addCatalogToCompanies(companyId: string, diskId: string, setError: (e: any) => void) {
    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/db/addDb?dbName=catalog_to_companies', {
        companyId: companyId,
        diskId: diskId,
    })
        .then(function () {
            console.log('Связующая таблица добавлена');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при добавлении связующей таблицы: " + error);
            
            if (error.response) {
                setError(error.response.errorMessage);
            } else {
                setError(error.message);
            }
        });
};

export async function deleteCatalogToCompanies(id: string, setError: (e: any) => void) {
    await axios.delete(process.env.NEXT_PUBLIC_DOMAIN + '/db/deleteDb?dbName=catalog_to_companies?deleteId='+ id)
        .then(function () {
            console.log('Связующая таблица удалена');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при удалении связующей таблицы: " + error);
            
            if (error.response) {
                setError(error.response.errorMessage);
            } else {
                setError(error.message);
            }
        });
};

export async function updateCatalogToCompanies(columnName: string, newValue: string, id: string, setError: (e: any) => void) {
    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/db/updateDb?dbName=catalog_to_companies', {
        columnName: columnName,
        newValue: "'" + newValue + "'",
        id: id,
    })
        .then(function () {
            console.log('Связующая таблица обновлена');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при обновлении связующей таблицы: " + error);
            
            if (error.response) {
                setError(error.response.errorMessage);
            } else {
                setError(error.message);
            }
        });
};
