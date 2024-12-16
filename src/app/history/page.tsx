import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function History() {
  const cleaningHistory = [
    { date: '2023-05-01', emailsCleaned: 500, success: true },
    { date: '2023-04-15', emailsCleaned: 300, success: true },
    { date: '2023-04-01', emailsCleaned: 200, success: false },
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-10">Histórico de Limpeza</h1>
      <Table>
        <TableCaption>Histórico de limpezas realizadas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Emails Limpos</TableHead>
            <TableHead>Sucesso</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cleaningHistory.map((cleaning, index) => (
            <TableRow key={index}>
              <TableCell>{cleaning.date}</TableCell>
              <TableCell>{cleaning.emailsCleaned}</TableCell>
              <TableCell>{cleaning.success ? 'Sim' : 'Não'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

