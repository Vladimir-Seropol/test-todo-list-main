/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Task {
  [x: string]: any
  task: any
  id: number
  content: string
  status: 'Работа' | 'Семья' | 'Хобби' | 'Автомобиль'
  category: string
  created_at: string
}
