import SpinnerIcon from '@/src/shared/components/icons/SpinnerIcon'

const index = ({
  size = '100',
  color = '#fff',
}: {
  size?: string
  color?: string
}) => {
  return (
    <div className='main-spinner'>
      <SpinnerIcon
        size={size}
        color={color}
      />
    </div>
  )
}
export default index
