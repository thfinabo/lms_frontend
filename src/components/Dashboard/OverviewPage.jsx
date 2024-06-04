import AddToCartCard from "../ReuseableCards/AddToCartCard"

const OverviewPage = () => {
  return (
    <div className='my-8 courses-container'>
        <AddToCartCard src={'/course1.png'} title={'zero to hero SQL bootcamp'} author={'Okhai Bona'}/>
        <AddToCartCard src={'/course3.png'} title={'zero to hero SQL bootcamp'} author={'Okhai Bona'}/>
        <AddToCartCard src={'/course2.png'} title={'zero to hero SQL bootcamp'} author={'Okhai Bona'}/>
        <AddToCartCard src={'/course1.png'} title={'zero to hero SQL bootcamp'} author={'Okhai Bona'}/>
        <AddToCartCard src={'/course3.png'} title={'zero to hero SQL bootcamp'} author={'Okhai Bona'}/>
        <AddToCartCard src={'/course1.png'} title={'zero to hero SQL bootcamp'} author={'Okhai Bona'}/>
        <AddToCartCard src={'/course2.png'} title={'zero to hero SQL bootcamp'} author={'Okhai Bona'}/>
        <AddToCartCard src={'/course1.png'} title={'zero to hero SQL bootcamp'} author={'Okhai Bona'}/>
        <AddToCartCard src={'/course2.png'} title={'zero to hero SQL bootcamp'} author={'Okhai Bona'}/>
    </div>
  )
}

export default OverviewPage