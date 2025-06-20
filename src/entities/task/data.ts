import { Task } from './type'

export const InitialTasks: Task[] = [
  {
    id: 1,
    content: 'Сдать отчет',
    status: 'Работа',
    category: 'Запланировать',
    created_at: '2023-10-01',
    task: undefined
  },
  {
    id: 2,
    content: 'Поездка в магазин',
    status: 'Семья',
    category: 'В процессе',
    created_at: '2023-10-02',
    task: undefined
  },
  {
    id: 3,
    content: 'Купить спининг',
    status: 'Хобби',
    category: 'Выполнены',
    created_at: '2023-10-03',
    task: undefined
  },
  {
    id: 4,
    content: 'Пройти ТО',
    status: 'Автомобиль',
    category: 'Не выполнено',
    created_at: '2023-10-04',
    task: undefined
  }
]
