import { ScaleLoader } from 'react-spinners'

export const Spinner = () => {
  return (
      <div className=' flex 
      flex-col 
      justify-center 
      items-center h-screen bg-white'
    >
      <ScaleLoader size={100} color='#031B4E' />
    </div>
  )
}
