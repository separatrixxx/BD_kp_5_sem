import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CatalogToCompaiesInterface } from "interfaces/catalog_to_companies.interface";


export interface CatalogToCompaniesTableProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	catalogToCompanies: CatalogToCompaiesInterface[],
	updateTable: (e: any) => void,
}