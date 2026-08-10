import Image from 'next/image'
const page = () => {
  return (
    <div className='h-screen w-screen'>
      <Image src="/Premanadji.jpg" alt="Premanadji" width={500} height={500} />
    </div>
  )
}

export default page