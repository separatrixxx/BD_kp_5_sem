import axios, { AxiosResponse } from "axios";
import { CatalogInterface } from "interfaces/catalog.interface";


export async function getCatalog(setCatalog: (e: any) => void) {
    const { data: catalog }: AxiosResponse<CatalogInterface[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
        '/db/viewDb?dbName=film_disk_catalog');

        setCatalog(catalog);
};

export async function addCatalog(id: string, diskName: string, dateOfBatchArriving: string, dateOfBatchWriteOff: string,
    currentDiskQuantity: string, diskPrice: string, diskRating: string, setError: (e: any) => void) {
    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/db/addDb?dbName=film_disk_catalog', {
        id: id,
        diskName: diskName,
        dateOfBatchArriving: dateOfBatchArriving,
        dateOfBatchWriteOff: dateOfBatchWriteOff,
        currentDiskQuantity: currentDiskQuantity,
        diskPrice: diskPrice,
        diskRating: diskRating,
    })
        .then(function () {
            console.log('Каталог добавлен');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при добавлении каталога: " + error);
            
            if (error.response) {
                setError(error.response.errorMessage);
            } else {
                setError(error.message);
            }
        });
};

export async function deleteCatalog(id: string, setError: (e: any) => void) {
    await axios.delete(process.env.NEXT_PUBLIC_DOMAIN + '/db/deleteDb?dbName=film_disk_catalog?deleteId='+ id)
        .then(function () {
            console.log('Каталог удалён');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при удалении каталога: " + error);
            
            if (error.response) {
                setError(error.response.errorMessage);
            } else {
                setError(error.message);
            }
        });
};

export async function updateCatalog(columnName: string, newValue: string, id: string, setError: (e: any) => void) {
    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/db/updateDb?dbName=film_disk_catalog', {
        columnName: columnName,
        newValue: "'" + newValue + "'",
        id: id,
    })
        .then(function () {
            console.log('Каталог обновлён');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при обновлении каталога: " + error);
            
            if (error.response) {
                setError(error.response.errorMessage);
            } else {
                setError(error.message);
            }
        });
};
