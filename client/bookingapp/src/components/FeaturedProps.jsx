import useFetch from '../hooks/useFetch'

const FeaturedProps = () => {
  const { data, loading, error } = useFetch('/hotels')

  return (
    <div className="mx-20">
      <h1 className="text-3xl font-bold my-8">Homes guests love</h1>
      {loading ? (
        'Đang tải'
      ) : (
        <div className="flex flex-row flex-wrap">
          {data.map((item, i) => (
            <div className="flex flex-col w-96 mx-4 mb-6" key={item._id}>
              <img src={item.photos[0]} alt="" className="h-72 shadow-md" />
              <span className="py-2 font-bold text-xl">{item.name}</span>
              <span className="py-2">{item.city}</span>
              <span className="py-2 font-semibold">
                Từ {item.cheapestPrice} vnđ
              </span>
              <div className="py-2">
                <button className="-ml-1">{item.rating}</button>
                <span>Tốt</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FeaturedProps
