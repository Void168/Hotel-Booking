const SearchItem = () => {
  return (
    <div className="border-2 border-dark-light-yellow rounded-lg flex mb-4 flex-wrap">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg m-4 w-64 shadow-md"
      />
      <div className="siDesc m-4 flex flex-col">
        <h1 className="text-3xl font-semibold">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="bg-[#4787EE] w-5/12 text-center rounded-lg text-dark-light-yellow px-2 py-1">
          Free airport taxi
        </span>
        <span className="font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="font-bold" style={{ color: 'green' }}>
          Free cancellation{' '}
        </span>
        <span className="siCancelOpSubtitle" style={{ color: 'green' }}>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails m-4 flex flex-col flex-wrap justify-between">
        <div className="siRating flex justify-between">
          <span className="py-2">Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts flex flex-col">
          <span className="siPrice text-right">$112</span>
          <span className="siTaxOp text-right">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
