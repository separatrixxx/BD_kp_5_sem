import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CompanyInterface } from "interfaces/company.interface";


export interface CompaniesTableProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	companies: CompanyInterface[],
	updateTable: (e: any) => void,
}