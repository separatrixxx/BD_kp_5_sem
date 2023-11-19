import { CatalogTable } from 'components/CatalogTable/CatalogTable';
import styles from './HomePage.module.css';
import { CompaniesTable } from 'components/CompaniesTable/CompaniesTable';
import { CompanyContactsTable } from 'components/CompanyContactsTable/CompanyContactsTable';
import { CatalogToCompaniesTable } from 'components/CatalogToCompaniesTable/CatalogToCompaniesTable';
import { useEffect, useState } from 'react';
import { ContactsInterface } from 'interfaces/contacts.interface';
import { getContacts } from 'helpers/contacts.helper';


export const HomePage = (): JSX.Element => {
    const [contacts, setContacts] = useState<ContactsInterface[]>([]);

    useEffect(() => {
        getContacts(setContacts);
    }, []);

    return (
        <div className={styles.wrapper}>
            <CompanyContactsTable contacts={contacts} updateTable={() => getContacts(setContacts)} />
            <CompaniesTable />
            <CatalogTable />
            <CatalogToCompaniesTable />
        </div>
    );
};