import { navigation } from "../assets/data"

const Footer = () => {
  return (
    <footer className='bg-[#0D2436] pt-[100px] pb-5 flex justify-center px-6 xl:px-0 xl:pb-10'>
      <div className='flex flex-col-reverse items-center gap-12 xl:flex-row xl:justify-between xl:gap-10 max-w-[1100px] w-full'>
        <div className='xl:self-start flex flex-col xl:gap-5'>
          <h2 className='font-os font-semibold text-xl text-white text-center xl:text-4xl xl:text-start'>heya.</h2>
          <p className='font-os text-[#5A7184]'>Copyright © 2020. Crafted with love.</p>
        </div>
          <div className='w-full grid grid-cols-2 justify-between place-items-center items-start gap-12 lg:grid-cols-4	'>
              {
                navigation.map(item => (
                  <div className="w-[120px] flex flex-col">
                    <h3 className='text-[#5A7184] font-bold'>{item.title}</h3>
                    <ul className='mt-8 flex flex-col gap-6'>
                      {item.items.map(itemArr => (
                        <li className='text-[#959EAD]'><a href='#'>{itemArr}</a></li>
                      ))}
                    </ul>
                  </div>
                ))
              }
          </div>
        </div>
    </footer>
  )
}

export default Footer