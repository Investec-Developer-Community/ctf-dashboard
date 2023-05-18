import Dashboard from '@/components/Dashboard'
import Image from 'next/image'
import backgroundImage from '/public/images/techtopia.png'

export default function Home() {
  return (
    <main className="h-screen p-24">
      <div className="absolute top-0 right-0 bottom-0 left-0 object-cover bg-cover">
        <Image
          src={backgroundImage.src}
          alt="background image"
          fill
        />
      </div>
      <Dashboard />
    </main>
  )
}
