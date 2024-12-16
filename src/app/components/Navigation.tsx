import Link from 'next/link'

export function Navigation() {
  return (
    <nav aria-label="Main Navigation">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/clean">Limpar Emails</Link></li>
        <li><Link href="/settings">Configurações</Link></li>
      </ul>
    </nav>
  )
}

