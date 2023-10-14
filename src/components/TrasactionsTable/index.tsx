import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>14/10/2023</td>
          </tr>
          <tr>
            <td>Alugel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>13/10/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}