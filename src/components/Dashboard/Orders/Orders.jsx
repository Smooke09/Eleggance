import { useFetch } from '../../../hooks/useFetch'

import Table from "../../Table/Table";
import Loading from '../../SpinerLoader';
import NoResults from '../../NoResults';

import '../Dashboard.scss';
import './Orders.scss';

export default () => {
    const headerColumns = ["Nome do produto", "Quantidade", "Valor", <th className="responsive-hide">Status pagamento</th>, <th className="responsive-hide">Status entrega</th>, "Código da venda"];
    const { data, loading } = useFetch('api/protected/admin/requests/');

    if (loading) return <div className="content"><Loading /></div>
    return data.length ?
        <div className="content">
            <Table headerColumnsArray={headerColumns} bodyObjectsArray={getRows(data)} />
        </div> : <NoResults message="Não existe nenhum pedido cadastrado." shouldShowBottomMessage={false} />
}

const getRows = (orders) => orders.map(order => {
    const status = order.status ?? "Pendente";
    const products = order.products ?? [];
    const sum = (accumulated, current) => (+accumulated || 0) + (+current || 0);

    return {
        products: getOrderProductsInfos(products),
        price: `R$${products.map(product => +product.value * +product.qt_product).reduce(sum, 0).toFixed(2)}`,
        status: getOrderStatus(status, status),
        id: order.id
    }
});

const getOrderProductsInfos = (products) =>
    <>
        <td>{products.map(product => <p className="product-name">{product.name}</p>)}</td>
        <td>{products.map(product => <p>{product.qt_product}</p>)}</td>
    </>

const getOrderStatus = (paymentStatus, deliveryStatus) => {
    const getClass = (status) => status === "Pendente" ? "pending" : "success";

    return (
        <>
            <td className={"responsive-hide"}>
                <p className={getClass(paymentStatus)}>{paymentStatus}</p>
            </td>
            <td className={"responsive-hide"}>
                <p className={getClass(deliveryStatus)}>{deliveryStatus}</p>
            </td>
        </>
    )
}