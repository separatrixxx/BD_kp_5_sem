import { CatalogToCompaniesTableProps } from './CatalogToCompaniesTable.props';
import styles from './CatalogToCompaniesTable.module.css';
import { useState } from 'react';
import { Input } from 'components/Input/Input';
import { addCatalogToCompanies, deleteCatalogToCompanies, updateCatalogToCompanies } from 'helpers/catalog_to_companies.helper';


export const CatalogToCompaniesTable = ({ catalogToCompanies, updateTable }: CatalogToCompaniesTableProps): JSX.Element => {
    const [companyId, setCompanyId] = useState<string>('');
    const [diskId, setDiskId] = useState<string>('');

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
                        <th>company_id</th>
                        <th>disk_id</th>
                    </tr>
                </thead>
                <tbody>
                    {catalogToCompanies.map(c => (
                        <tr key={c.company_id}>
                            <td>{c.company_id}</td>
                            <td>{c.disk_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.addCatalogToCompanies}>
                <Input text='companyId' value={companyId} onChange={(e) => setCompanyId(e.target.value)} />
                <Input text='diskId' value={diskId} onChange={(e) => setDiskId(e.target.value)} />
            </div>
            <button className={styles.button} onClick={() => {
                addCatalogToCompanies(companyId, diskId, setError);
                updateTable;
            }}>
                Добавить контакты
            </button>
            <div className={styles.deleteCatalogToCompanies}>
                <Input text='id' value={id2} onChange={(e) => setId2(e.target.value)} />
            </div>
            <button className={styles.button} onClick={() => {
                deleteCatalogToCompanies(id2, setError);
                updateTable;
            }}>
                Удалить контакты
            </button>
            <div className={styles.updateCatalogToCompanies}>
                <Input text='column_name' value={columnName2} onChange={(e) => setColumnName2(e.target.value)} />
                <Input text='new_value' value={newValue} onChange={(e) => setNewValue(e.target.value)} />
                <Input text='id' value={id3} onChange={(e) => setId3(e.target.value)} />
            </div>
            <button className={styles.button} onClick={() => {
                updateCatalogToCompanies(columnName2, newValue, id3, setError);
                updateTable;
            }}>
                Обновить контакты
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