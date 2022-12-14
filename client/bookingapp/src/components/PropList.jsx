import useFetch from '../hooks/useFetch'

const PropList = () => {
  const { data, loading, error } = useFetch('/hotels')
  const type = [
    {
      name: 'Khách sạn',
      image:
        'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
    },
    {
      name: 'Căn hộ',
      image:
        'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg',
    },
    {
      name: 'Nhà cho thuê',
      image:
        'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg',
    },
    {
      name: 'Biệt thự',
      image:
        'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
    },
    {
      name: 'Nhà trệt',
      image:
        'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg',
    },
  ]
  return (
    <div className="mx-20">
      {loading ? (
        'Đang tải'
      ) : (
        <>
          <h1 className="text-3xl font-bold my-8">Browse by property type</h1>
          <div className="flex flex-row flex-wrap justify-between">
            {data &&
              type.map((img, i) => {
                return (
                  <div className="pListItem" key={i}>
                    <img src={type[i]?.image} alt="" className="pListImg" />
                    <div className="pListTitles">
                      <h1>{type[i]?.name}</h1>
                      <h2>
                        Số lượng{' '}
                        {
                          data.filter((item) => item.type === type[i]?.name)
                            .length
                        }
                      </h2>
                    </div>
                  </div>
                )
              })}
          </div>
        </>
      )}
    </div>
  )
}

export default PropList
