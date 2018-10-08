import React from "react";

const BaseTable = props => {
  return (
    <React.Fragment>
      <h6 style={{ fontSize: 8, fontWeight: "bold", padding: 0, margin: 0 }}>
        {props.chip}{" "}
        <span
          className="badge tiny"
          data-badge-caption="#"
          style={{ fontSize: 10, fontWeight: "bold", padding: 0, margin: 0 }}
        >
          {props.data.length}
        </span>
      </h6>
      <table
        style={{
          borderCollapse: "collapse",
          borderSpacing: "0",
          fontSize: 10,
          cellSpacing: 0,
          cellPadding: 0,
          overflow: "wrap",
          whiteSpace: "unset",
          padding: 0
        }}
      >
        <thead>
          <tr
            style={{
              lineHeight: "0px",
              padding: 0,
              margin: 0,
              whiteSpace: "unset",
              paddingLeft: "0px",
              width: "5px"
            }}
          >
            {props.headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {props.data.map(dataRow => (
            <tr
              key={dataRow.irbid}
              style={{
                lineHeight: "0px",
                padding: "0px",
                margin: "0px",
                paddingLeft: "0px"
              }}
            >
              <td>{dataRow.irbid}</td>
              <td>{dataRow.irbsekli}</td>
              <td>{dataRow.irbstatu}</td>
              <td>{dataRow.giris}</td>
              <td>{dataRow.kul}</td>
              <td>{dataRow.hareket}</td>
              <td>{dataRow.sinir}</td>
              <td>{dataRow.cikkul}</td>
              <td>{dataRow.cikis}</td>
              <td>{dataRow.refno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default BaseTable;
