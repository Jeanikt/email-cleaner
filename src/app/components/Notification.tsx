'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface NotificationProps {
  message: string
  type: 'success' | 'error' | 'info'
  duration?: number
}

export default function Notification({ message, type, duration = 5000 }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!isVisible) return null

  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-md shadow-md ${
      type === 'success' ? 'bg-green-500' :
      type === 'error' ? 'bg-red-500' :
      'bg-blue-500'
    } text-white`}>
      <div className="flex items-center">
        <span>{message}</span>
        <button 
          onClick={() => setIsVisible(false)} 
          className="ml-4"
          aria-label="Fechar notificação"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

