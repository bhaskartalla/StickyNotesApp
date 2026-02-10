import Trash from '../icons/Trash'
import { db } from '../apppwrite/databases'
import { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'

type DeleteButtonProps = {
  noteId: string
}

const DeleteButton = ({ noteId }: DeleteButtonProps) => {
  const { setNotes } = useContext(NotesContext)

  const handleDelete = async () => {
    try {
      await db.notes.deleteRow(noteId)
      setNotes((prev) => prev.filter(({ $id }) => $id !== noteId))
    } catch (error) {
      console.error('🚀 ~ handleDelete ~ error:', error)
    }
  }

  return (
    <div onClick={handleDelete}>
      <Trash />
    </div>
  )
}
export default DeleteButton
