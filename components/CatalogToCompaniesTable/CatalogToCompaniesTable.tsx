import styles from './CatalogToCompaniesTable.module.css';


export const CatalogToCompaniesTable = (): JSX.Element => {
    return (
        <table>
            <thead>
                <tr>
                    <th>company_id</th>
                    <th>disk_id</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>9.1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>9.1</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>8.6</td>
                </tr>
            </tbody>
        </table>
    );
};