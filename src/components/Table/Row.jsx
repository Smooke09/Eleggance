export default ({ object }) =>
    <tr key={object.key ? object.key : object.id}>
        {Object.keys(object).map(key => getRow(object, key))}
    </tr>

const getRow = (object, key) => {
    if (key != "key" && key != "className") {
        const value = object[key];
        return value.type ? value : <td>{value}</td>
    }
}