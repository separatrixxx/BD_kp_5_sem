import { CatalogTable } from 'components/CatalogTable/CatalogTable';
import styles from './HomePage.module.css';
import { CompaniesTable } from 'components/CompaniesTable/CompaniesTable';
import { CompanyContactsTable } from 'components/CompanyContactsTable/CompanyContactsTable';
import { CatalogToCompaniesTable } from 'components/CatalogToCompaniesTable/CatalogToCompaniesTable';
import { useEffect, useState } from 'react';
import { ContactsInterface } from 'interfaces/contacts.interface';
import { getContacts } from 'helpers/contacts.helper';
import { CompanyInterface } from 'interfaces/company.interface';
import { getCompanies } from 'helpers/companies.helper';
import { CatalogToCompaiesInterface } from 'interfaces/catalog_to_companies.interface';
import { getCatalogToCompanies } from 'helpers/catalog_to_companies.helper';
import { CatalogInterface } from 'interfaces/catalog.interface';
import { getCatalog } from 'helpers/catalog.helper';


export const HomePage = (): JSX.Element => {
    const [contacts, setContacts] = useState<ContactsInterface[]>([]);
    const [companies, setCompanies] = useState<CompanyInterface[]>([]);
    const [catalog, setCatalog] = useState<CatalogInterface[]>([]);
    const [catalogToCompanies, setCatalogToCompanies] = useState<CatalogToCompaiesInterface[]>([]);

    useEffect(() => {
        getContacts(setContacts);
        getCompanies(setCompanies);
        getCatalog(setCatalog);
        getCatalogToCompanies(setCatalogToCompanies);
    }, []);

    return (
        <div className={styles.wrapper}>
            <CompanyContactsTable contacts={contacts} />
            <CompaniesTable companies={companies} />
            <CatalogTable catalog={catalog} />
            <CatalogToCompaniesTable catalogToCompanies={catalogToCompanies} />
        </div>
    );
};