import React from 'react'
import { Table, Spinner } from 'react-bootstrap'
import { Query } from 'react-apollo'
import { Stock } from '../../interfaces/stock'
import { GraphqlResponse } from '../../interfaces'

interface Props {
  query: any
  dataKey: string
}

export default function StocksTable({ query, dataKey }: Props) {
  const tableData = (stocks: [Stock]) => {
    return stocks.map((stock: Stock) => (
      <tr key={stock.code.toString()}>
        <td>{stock.code}</td>
        <td>{stock.price.actualValue.toLocaleString()}</td>
        <td>{stock.price.minValue.toLocaleString()}</td>
        <td>{stock.price.maxValue.toLocaleString()}</td>
        <td>{stock.price.dividend.toLocaleString()} %</td>
        <td>{stock.pl.toLocaleString()}</td>
        <td>{stock.roe.toLocaleString()} %</td>
        <td>{stock.lpa.toLocaleString()}</td>
      </tr>
    ))
  }

  return (
    <Query query={query}>
      {({ data, loading }: GraphqlResponse) => {
        if (loading) return <Spinner animation="border" variant="primary" />
        return (
          <Table bordered hover size="sm">
            <thead>
              <tr>
                <th>Papel</th>
                <th>Preço</th>
                <th>Min.</th>
                <th>Max.</th>
                <th title="Dividendos">Divs.</th>
                <th title="Patrimônio / Lucro">P/L</th>
                <th title="Return on Equity">ROE</th>
                <th title="Lucro por Ação">LPA</th>
              </tr>
            </thead>
            <tbody>{tableData(data[dataKey])}</tbody>
          </Table>
        )
      }}
    </Query>
  )
}
