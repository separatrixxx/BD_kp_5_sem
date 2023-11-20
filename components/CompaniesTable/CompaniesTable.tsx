import { CompaniesTableProps } from './CompaniesTable.props'
import styles from './CompaniesTable.module.css';
import { useState } from 'react';
import { addCompany, deleteCompany, updateCompany } from 'helpers/companies.helper';
import { Input } from 'components/Input/Input';


export const CompaniesTable = ({ companies }: CompaniesTableProps): JSX.Element => {
    const [id1, setId1] = useState<string>('');
    const [companyName, setCompanyName] = useState<string>('');
    const [disruptedDelievers, setDisruptedDelievers] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [agreementPrice, setAgreementPrice] = useState<string>('');
    const [dateOfSigning, setDateOfSigning] = useState<string>('');
    const [dateOfTermination, setDateOfTermination] = useState<string>('');
    const [contactId, setContactId] = useState<string>('');

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
                        <th>company_name</th>
                        <th>disrupted_delievers</th>
                        <th>phone_number</th>
                        <th>agreement_price</th>
                        <th>date_of_signing</th>
                        <th>date_of_termination</th>
                        <th>contact_id</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.companyName}</td>
                            <td>{c.disruptedDelievers}</td>
                            <td>{c.phoneNumber}</td>
                            <td>{c.agreementPrice}</td>
                            <td>{c.dateOfSigning}</td>
                            <td>{c.dateOfTermination}</td>
                            <td>{c.contactId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.addCompanies}>
                <Input text='id' value={id1} onChange={(e) => setId1(e.target.value)} />
                <Input text='companyName' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                <Input text='disruptedDelievers' value={disruptedDelievers} onChange={(e) => setDisruptedDelievers(e.target.value)} />
                <Input text='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <Input text='agreementPrice' value={agreementPrice} onChange={(e) => setAgreementPrice(e.target.value)} />
                <Input text='dateOfSigning' value={dateOfSigning} onChange={(e) => setDateOfSigning(e.target.value)} />
                <Input text='dateOfTermination' value={dateOfTermination} onChange={(e) => setDateOfTermination(e.target.value)} />
                <Input text='contactId' value={contactId} onChange={(e) => setContactId(e.target.value)} />
            </div>
            <button className={styles.button} onClick={() => {
                addCompany(id1, companyName, disruptedDelievers, phoneNumber, agreementPrice, dateOfSigning,
                    dateOfTermination, contactId, setError);
            }}>
                Добавить компанию
            </button>
            <div className={styles.deleteCompanies}>
                <Input text='id' value={id2} onChange={(e) => setId2(e.target.value)} />
            </div>
            <button className={styles.button} onClick={() => {
                deleteCompany(id2, setError);
            }}>
                Удалить компанию
            </button>
            <div className={styles.updateCompanies}>
                <Input text='column_name' value={columnName2} onChange={(e) => setColumnName2(e.target.value)} />
                <Input text='new_value' value={newValue} onChange={(e) => setNewValue(e.target.value)} />
                <Input text='id' value={id3} onChange={(e) => setId3(e.target.value)} />
            </div>
            <button className={styles.button} onClick={() => {
                updateCompany(columnName2, newValue, id3, setError);
            }}>
                Обновить компанию
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