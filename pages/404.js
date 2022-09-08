import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <div className='flex flex-col justify-center items-center h-full'><h1 className='font-semibold text-xl'>404 - Page Not Found</h1>
      <Link href="/">
        <a className='p-3 border border-gray-300 rounded-lg mt-4 underline underline-offset-2'>
          Go back home
        </a>
      </Link>
    </div>
  </>
}
