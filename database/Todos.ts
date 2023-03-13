export interface todo {
  id: number
  name: string
  complete: boolean
}

export const Todos: todo[] = [
  {
    id: 1,
    name: 'Get up',
    complete: true
  },
  {
    id: 2,
    name: 'Exercise',
    complete: false
  },
  {
    id: 3,
    name: 'Programming',
    complete: false
  }
]
