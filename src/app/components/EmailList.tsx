'use client'

import { useMemo, useCallback } from 'react'

interface Email {
  id: string
  subject: string
  from: string
  date: string
}

interface EmailListProps {
  emails: Email[]
  onSelectEmail: (id: string) => void
}

export function EmailList({ emails, onSelectEmail }: EmailListProps) {
  const sortedEmails = useMemo(() => {
    return [...emails].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }, [emails])

  const handleSelectEmail = useCallback((id: string) => {
    onSelectEmail(id)
  }, [onSelectEmail])

  return (
    <ul>
      {sortedEmails.map((email) => (
        <li key={email.id} onClick={() => handleSelectEmail(email.id)}>
          {email.subject} - {email.from}
        </li>
      ))}
    </ul>
  )
}

