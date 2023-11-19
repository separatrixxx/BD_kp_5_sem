import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ContactsInterface } from "interfaces/contacts.interface";


export interface CompanyContactsTableProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	contacts: ContactsInterface[],
	updateTable: (e: any) => void,
}