import styles from './CatalogTable.module.css';


export const CatalogTable = (): JSX.Element => {
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>disk_name</th>
                    <th>date_of_batch_arriving</th>
                    <th>date_of_batch_write_off</th>
                    <th>current_disk_quantity</th>
                    <th>disk_price</th>
                    <th>disk_rating</th>
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