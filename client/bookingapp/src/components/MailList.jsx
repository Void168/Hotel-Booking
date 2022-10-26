const MailList = () => {
  return (
    <div className="bg-light-blue py-8 text-center">
      <h1 className="text-white font-bold text-4xl py-4">
        Save time, save money!
      </h1>
      <span className="text-white text-lg">
        Sign up and we'll send the best deals to you
      </span>
      <div className=" mt-4">
        <input
          type="text"
          placeholder="Your Email"
          className="rounded-md py-2 px-4"
        />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
