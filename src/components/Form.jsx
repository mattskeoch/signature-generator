import { useState } from 'react'

export const Form = () => {
  const [signatureInfo, setSignatureInfo] = useState({
    name: '',
  })

  const handleChange = (event) => {
    setSignatureInfo({
      ...signatureInfo,
      [event.target.name]: event.target.value,
    })
    console.log(signatureInfo)
  }

  return (
    <div>
      <form className=" mt-16 px-8">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full  rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Jane Doe"
              autoComplete="name"
              value={signatureInfo.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="title"
            className="mt-5 block text-sm font-semibold leading-6 text-white"
          >
            Title
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="title"
              id="title"
              className="block w-full  rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Owner and Manager"
              value={signatureInfo.title}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="address"
            className="mt-5 block text-sm font-medium text-slate-200"
          >
            Studio Address
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="address"
              id="address"
              className="block w-full  rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="21 Tohma Pass, Sydney, NSW 2000"
              value={signatureInfo.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="mt-5 block text-sm font-semibold leading-6 text-white"
          >
            Studio Email Address
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full  rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="email@tribe41.com.au"
              autoComplete="email"
              value={signatureInfo.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mt-5 block text-sm font-semibold leading-6 text-white"
          >
            Studio Phone Number
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="phone"
              id="phone"
              className="block w-full  rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="1300 444 888"
              value={signatureInfo.phone}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  )
}
