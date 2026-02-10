import type { NoteDataType } from '@/types'
import { createContext, type Dispatch, type SetStateAction } from 'react'

type NotesContextType = {
  notes: NoteDataType[]
  setNotes: Dispatch<SetStateAction<NoteDataType[]>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

export const NotesContext = createContext({
  notes: [],
  setNotes: () => {},
  loading: false,
  setLoading: () => {},
} as NotesContextType)
