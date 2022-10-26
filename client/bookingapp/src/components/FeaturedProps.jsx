import useFetch from '../hooks/useFetch'

const FeaturedProps = () => {
  const { data, loading, error } = useFetch('/hotels?featured=true&limit=4')
  return (
    <div className="mx-20">
      <h1 className="text-3xl font-bold my-8">Homes guests love</h1>
      {loading ? (
        'Đang tải'
      ) : (
        <>
          {data.map((item, i) => (
            <div className="flex justify-between" key={item._id}>
              <div className="flex flex-col">
                <img src={item.photo[0]} alt="" className="h-96 w-full" />
                <span className="py-2 font-bold text-xl">{item.name}</span>
                <span className="py-2">{item.city}</span>
                <span className="py-2 font-semibold">
                  Từ {item.cheapestPrice} vnđ
                </span>
                <div className="py-2">
                  <button className="-ml-1">{item.rating}</button>
                  <span>Excellent</span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default FeaturedProps
