import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CatalogInterface } from "interfaces/catalog.interface";


export interface CatalogTableProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	catalog: CatalogInterface[],
	updateTable: (e: any) => void,
}
