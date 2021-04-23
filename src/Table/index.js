import Table from "react-bootstrap/Table";

function TableView({ items }) {
  return (
    <div id="table-view">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Slot</th>
            <th>City</th>
            <th>Velocity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) =>
            item.slot && item.city && item.velocity ? (
              <tr key={i}>
                <td>{item.index}</td>
                <td> {item.slot}</td>
                <td>{item.city}</td>
                <td>{item.velocity}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default TableView;
