import axios, { AxiosResponse } from "axios";
import { CatalogInterface } from "interfaces/catalog.interface";


export async function getCatalog(setCatalog: (e: any) => void) {
    const { data: catalog }: AxiosResponse<CatalogInterface[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
        '/db/viewDb?dbName=film_disk_catalog');

        setCatalog(catalog);
};

export async function addCatalog(id: string, diskName: string, dateOfBatchArriving: string, dateOfBatchWriteOff: string,
    currentDiskQuantity: string, diskPrice: string, diskRating: string, setError: (e: any) => void) {
    let body: CatalogInterface = {};

    if (id) {
        body.id = +id;
    }
    if (diskName) {
        body.diskName = diskName;
    }
    if (dateOfBatchArriving) {
        body.dateOfBatchArriving = dateOfBatchArriving;
    }
    if (dateOfBatchWriteOff) {
        body.dateOfBatchWriteOff = dateOfBatchWriteOff;
    }
    if (currentDiskQuantity) {
        body.currentDiskQuantity = +currentDiskQuantity;
    }
    if (diskPrice) {
        body.diskPrice = +diskPrice;
    }
    if (diskRating) {
        body.diskRating = +diskRating;
    }

    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/db/addDb?dbName=film_disk_catalog', body)
        .then(function () {
            console.log('Каталог добавлен');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при добавлении каталога: " + error);
            
            setError(error.response.data.errorCode === 'VALIDATION_ERROR' ? 'Ошибка валидации: ' + error.response.data.errorMessage 
                : 'Ошибка Postgresql: ' + error.response.data.errorMessage);
        });
};

export async function deleteCatalog(id: string, setError: (e: any) => void) {
    await axios.delete(process.env.NEXT_PUBLIC_DOMAIN + '/db/deleteDb?dbName=film_disk_catalog&deleteId='+ id)
        .then(function () {
            console.log('Каталог удалён');

            setError('');
        })
        .catch(function (error) {
            console.log("Ошибка при удалении каталога: " + error);
            
            setError(error.response.data.errorCode === 'VALIDATION_ERROR' ? 'Ошибка валидации: ' + error.response.data.errorMessage 
                : 'Ошибка Postgresql: ' + error.response.data.errorMessage);
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
            
            setError(error.response.data.errorCode === 'VALIDATION_ERROR' ? 'Ошибка валидации: ' + error.response.data.errorMessage 
                : 'Ошибка Postgresql: ' + error.response.data.errorMessage);
        });
};
