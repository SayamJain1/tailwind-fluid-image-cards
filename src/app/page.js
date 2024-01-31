import Image from 'next/image'

export default function Home() {
  const imageIds = [
    "1500462918059-b1a0cb512f1d",
    "1531581147762-5961e6e2e6b1",
    "1626204327506-0d3ee11d7752",
    "1549068106-b024baf5062d",
  ];
  return (<div className="grid min-h-screen place-items-center border border-purple-800">
    <ul className="flex gap-4 w-full max-w-6xl">
      {
        [...Array(4).keys()].map((_, i) => (

          <li className="group flex-1 hover:grow-[1.25] transition-all relative bg-rose-300 rounded-2xl w-full h-[500px] overflow-hidden">
            <Image src={`https://images.unsplash.com/photo-${imageIds[i]}?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlicmFudHxlbnwwfHwwfHx8MA%3D%3D`} height={400} width={400} className='absolute inset-0 h-full w-full object-cover' alt='fluid' />

            <div className='absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 from-30%'>
              <div className='w-48'>
                <h2 className='text-2xl leading-tight text-white font-medium'>The card title is here.</h2>
                <div className='grid transition-all grid-rows-[0fr] group-hover:grid-rows-[1fr]'>
                  <p className='text-white/70 mt-2 overflow-hidden opacity-0 transition group-hover:opacity-100 duration-300'>Some random text that soes not matter to the project or images, haha!</p>
                </div>
              </div>
            </div>
          </li>

        ))
      }
    </ul>
  </div>);
} 