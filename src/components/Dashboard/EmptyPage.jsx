import Button from "../ReusableButton/Button"

const EmptyPage = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:justify-between mt-8 pt-4 min-h-[60vh]'>
        <div className='w-full md:w-[58%]'>
          <img src='/empty_dashboard.png' alt='empty dashboard' className='w-full'/>
        </div>
        <div className='max-w-[550px] w-full md:w-[45%] mt-5 md:mt-0'>
          <p className='font-bold'>Study a course now!</p>
          <p className="lg:text-xl">Whether it's acquiring a new language, mastering a software program, or learning a practical skill like woodworking, learning equips us with the tools we need to navigate life's challenges and pursue our goals. .</p>
          <Button type={'button'} name={'Get Started'} className="bg-primaryGreen text-white w-[60%] py-2 mt-3 mb-5 rounded-md font-semibold"/>
        </div>
    </div>
  )
}

export default EmptyPage