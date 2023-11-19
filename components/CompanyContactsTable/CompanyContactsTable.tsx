import { CompanyContactsTableProps } from './CompanyContactsTable.props';
import styles from './CompanyContactsTable.module.css';
import { useState } from 'react';
import { Input } from 'components/Input/Input';
import { addContacts, deleteContacts, updateContacts } from 'helpers/contacts.helper';


export const CompanyContactsTable = ({ contacts, updateTable }: CompanyContactsTableProps): JSX.Element => {
    const [id1, setId1] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [workingHours, setWorkingHours] = useState<string>('');

    const [columnName1, setColumnName1] = useState<string>('');
    const [value, setValue] = useState<string>('');

    const [columnName2, setColumnName2] = useState<string>('');
    const [newValue, setNewValue] = useState<string>('');
    const [id2, setId2] = useState<string>('');

    const [error, setError] = useState<string>('');

    return (
        <div className={styles.wrapper}>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>address</th>
                        <th>working_hours</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.email}</td>
                            <td>{c.address}</td>
                            <td>{c.working_hours}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.addContacts}>
                <Input text='id' value={id1} onChange={(e) => setId1(e.target.value)} />
                <Input text='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input text='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                <Input text='working_hours' value={workingHours} onChange={(e) => setWorkingHours(e.target.value)} />
            </div>
            <button className={styles.button} onClick={() => {
                addContacts(id1, email, address, workingHours, setError);
                updateTable;
            }}>
                Добавить контакты
            </button>
            <div className={styles.deleteContacts}>
                <Input text='column_name' value={columnName1} onChange={(e) => setColumnName1(e.target.value)} />
                <Input text='value' value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <button className={styles.button} onClick={() => {
                deleteContacts(columnName1, value, setError);
                updateTable;
            }}>
                Удалить контакты
            </button>
            <div className={styles.updateContacts}>
                <Input text='column_name' value={columnName2} onChange={(e) => setColumnName2(e.target.value)} />
                <Input text='new_value' value={newValue} onChange={(e) => setNewValue(e.target.value)} />
                <Input text='id' value={id2} onChange={(e) => setId2(e.target.value)} />
            </div>
            <button className={styles.button} onClick={() => {
                updateContacts(columnName2, newValue, id2, setError);
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