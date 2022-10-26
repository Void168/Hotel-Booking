const FeaturedProps = () => {
  return (
    <div className="mx-20">
      <h1 className="text-3xl font-bold my-8">Homes guests love</h1>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="h-96 w-full"
          />
          <span className="py-2 font-bold text-xl">
            Aparthotel Stare Miasto
          </span>
          <span className="py-2">Madrid</span>
          <span className="py-2 font-semibold">Starting from $120</span>
          <div className="py-2">
            <button className="-ml-1">8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
            alt=""
            className="h-96 w-96"
          />
          <span className="py-2 font-bold text-xl">Comfort Suites Airport</span>
          <span className="py-2 ">Austin</span>
          <span className="py-2 font-semibold">Starting from $140</span>
          <div className="py-2">
            <button className="-ml-1">9.3</button>
            <span>Exceptional</span>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
            alt=""
            className="h-96 w-96"
          />
          <span className="py-2 font-bold text-xl">Four Seasons Hotel</span>
          <span className="py-2">Lisbon</span>
          <span className="py-2 font-semibold">Starting from $99</span>
          <div className="py-2">
            <button className="-ml-1">8.8</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
            alt=""
            className="h-96 w-96"
          />
          <span className="py-2 font-bold text-xl">Hilton Garden Inn</span>
          <span className="py-2">Berlin</span>
          <span className="py-2 font-semibold">Starting from $105</span>
          <div className="py-2">
            <button className="-ml-1">8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProps
