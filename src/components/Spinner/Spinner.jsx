import { ScaleLoader } from 'react-spinners'

export const Spinner = () => {
  return (
      <div className=' flex 
      flex-col 
      justify-center 
      items-center h-[70vh]'
    >
      <ScaleLoader size={100} color='lime' />
    </div>
  )
}
