import React from 'react'
import { Table, Container } from 'react-bootstrap'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

interface Price {
  actualValue: Number
  minValue: Number
  maxValue: Number
  dividend: Number
}

interface Stock {
  code: Number
  price: Price
  pl: Number
  pVp: Number
  roe: Number
  roa: Number
  lpa: Number
  roic: Number
  netMargin: Number
  dlPl: Number
  evEbit: Number
  cagrRevenue: Number
  currentLiquidity: Number
  cagrProfits: Number
  dlEbit: Number
  dailyLiquidity: Number
}

interface GraphqlResponse {
  data: any
  loading: Boolean
}

export default function GoodCheap() {
  return (
    <div className="goodCheap">
      <Container fluid>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>Papel</th>
              <th>Preço</th>
              <th>ROE</th>
            </tr>
          </thead>
          <tbody>
            <Query query={GET_GOOD_CHEAP}>
              {({ data, loading }: GraphqlResponse) => {
                if (loading) return 'Loading...'
                return (
                  data &&
                  data.goodAndCheap &&
                  data.goodAndCheap.map((stock: Stock) => (
                    <tr>
                      <td>{stock.code}</td>
                      <td>{stock.price.actualValue.toLocaleString()}</td>
                      <td>{stock.roe.toLocaleString()} %</td>
                    </tr>
                  ))
                )
              }}
            </Query>
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

const GET_GOOD_CHEAP = gql`
  {
    goodAndCheap {
      code
      price {
        actualValue
        minValue
        maxValue
        dividend
      }
      pl
      pVp
      roe
      roa
      lpa
      roic
      netMargin
      dlPl
      evEbit
      cagrRevenue
      currentLiquidity
      cagrProfits
      dlEbit
      dailyLiquidity
    }
  }
`
