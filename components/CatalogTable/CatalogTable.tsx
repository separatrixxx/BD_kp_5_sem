import { CatalogTableProps } from './CatalogTable.props'
import styles from './CatalogTable.module.css';
import { useState } from 'react';
import { Input } from 'components/Input/Input';
import { addCatalog, deleteCatalog, updateCatalog } from 'helpers/catalog.helper';


export const CatalogTable = ({ catalog }: CatalogTableProps): JSX.Element => {
    const [id1, setId1] = useState<string>('');
    const [diskName, setDiskName] = useState<string>('');
    const [dateOfBatchArriving, setDateOfBatchArriving] = useState<string>('');
    const [dateOfBatchWriteOff, setDateOfBatchWriteOff] = useState<string>('');
    const [currentDiskQuantity, setCurrentDiskQuantity] = useState<string>('');
    const [diskPrice, setDiskPrice] = useState<string>('');
    const [diskRating, setDiskRating] = useState<string>('');

    const [id2, setId2] = useState<string>('');

    const [columnName2, setColumnName2] = useState<string>('');
    const [newValue, setNewValue] = useState<string>('');
    const [id3, setId3] = useState<string>('');

    const [error, setError] = useState<string>('');

    return (
        <div className={styles.wrapper}>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>disk_name</th>
                        <th>date_of_batch_arriving</th>
                        <th>date_of_batch_write_off</th>
                        <th>current_disk_quantity</th>
                        <th>disk_price</th>
                        <th>disk_rating</th>
                    </tr>
                </thead>
                <tbody>
                    {catalog.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.diskName}</td>
                            <td>{c.dateOfBatchArriving}</td>
                            <td>{c.dateOfBatchWriteOff}</td>
                            <td>{c.currentDiskQuantity}</td>
                            <td>{c.diskName}</td>
                            <td>{c.diskRating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.addCatalog}>
                <Input text='id' value={id1} onChange={(e) => setId1(e.target.value)} />
                <Input text='diskName' value={diskName} onChange={(e) => setDiskName(e.target.value)} />
                <Input text='dateOfBatchArriving' value={dateOfBatchArriving} onChange={(e) => setDateOfBatchArriving(e.target.value)} />
                <Input text='dateOfBatchWriteOff' value={dateOfBatchWriteOff} onChange={(e) => setDateOfBatchWriteOff(e.target.value)} />
                <Input text='currentDiskQuantity' value={currentDiskQuantity} onChange={(e) => setCurrentDiskQuantity(e.target.value)} />
                <Input text='diskPrice' value={diskPrice} onChange={(e) => setDiskPrice(e.target.value)} />
                <Input text='diskRating' value={diskRating} onChange={(e) => setDiskRating(e.target.value)} />
            </div>
            <button className={styles.button} onClick={() => {
                addCatalog(id1, diskName, dateOfBatchArriving, dateOfBatchWriteOff, currentDiskQuantity, diskPrice,
                    diskRating, setError);
            }}>
                Добавить каталог
            </button>
            <div className={styles.deleteCatalog}>
                <Input text='id' value={id2} onChange={(e) => setId2(e.target.value)} />
            </div>
            <button className={styles.button} onClick={() => {
                deleteCatalog(id2, setError);
            }}>
                Удалить каталог
            </button>
            <div className={styles.updateCatalog}>
                <Input text='column_name' value={columnName2} onChange={(e) => setColumnName2(e.target.value)} />
                <Input text='new_value' value={newValue} onChange={(e) => setNewValue(e.target.value)} />
                <Input text='id' value={id3} onChange={(e) => setId3(e.target.value)} />
            </div>
            <button className={styles.button} onClick={() => {
                updateCatalog(columnName2, newValue, id3, setError);
            }}>
                Обновить каталог
            </button>
            {
                error ?
                    <div className={styles.errorDiv}>
                        <h3>{error}</h3>
                    </div>
                :
                    <></>
            }
        </div>
    );
};