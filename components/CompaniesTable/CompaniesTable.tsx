import styles from './FilmDiskCompaniessTable.module.css';


export const CompaniesTable = (): JSX.Element => {
    return (
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
                <tr>
                    <td>1</td>
                    <td>9.1</td>
                    <td>Зелёная миля</td>
                    <td>1999</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>9.1</td>
                    <td>Побег из Шоушенка</td>
                    <td>1994</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>8.6</td>
                    <td>Властелин колец: Возвращение Короля</td>
                    <td>2003</td>
                </tr>
            </tbody>
        </table>
    );
};