import { useFetch } from '../../../hooks/useFetch'

import Table from "../../Table/Table";
import Loading from '../../SpinerLoader'

import '../Dashboard.scss';
import './Orders.scss';

export default () => {
    const headerColumns = ["Nome do produto", "Quantidade", "Valor", <th className="responsive-hide">Status pagamento</th>, <th className="responsive-hide">Status entrega</th>, "Código da venda"];
    const { data } = useFetch('api/protected/request/');

    return data.length ?
        <div className="content">
            <Table headerColumnsArray={headerColumns} bodyObjectsArray={getRows(data)} />
        </div> : <Loading />
}

const getRows = (orders) => orders.map(order => {
    const status = order.status ?? "Pendente";
    const products = order.products;

    return {
        products: getOrderProductsInfos(products),
        price: `R$${getOrderValue(products)}`,
        status: getOrderStatus(status, status),
        id: order.id
    }
});

const getOrderProductsInfos = (products) =>
    <>
        <td>{products.map(product => <li key={product.productId} className="product-name">{product.name}</li>)}</td>
        <td>{products.map(product => <p>{product.qt_product}</p>)}</td>
    </>

const getOrderValue = (products) => {
    let sum = 0;
    products.forEach(product => sum += +product.value);
    return sum;
}

const getOrderStatus = (paymentStatus, deliveryStatus) => {
    const getClass = (status) => status === "Pendente" ? "pending" : "success";

    return (
        <>
            <td className={`responsive-hide`}>
                <p className={getClass(paymentStatus)}>{paymentStatus}</p>
            </td>
            <td className={`responsive-hide`}>
                <p className={getClass(deliveryStatus)}>{deliveryStatus}</p>
            </td>
        </>
    )
}