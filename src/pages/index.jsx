import Head from 'next/head'
import { useState } from 'react'

import { Toaster } from '../components/ui/toaster'
import { Preview } from '../components/Preview'
import { HelpLinks } from '../components/HelpLinks'

const userData = {
  name: '',
  title: '',
  address: '',
  email: '',
  phone: '',
}

export default function Home() {
  const [signatureInfo, setSignatureInfo] = useState(userData)

  const handleChange = (event) => {
    setSignatureInfo({
      ...signatureInfo,
      [event.target.name]: event.target.value,
    })
    console.log(signatureInfo)
  }

  return (
    <>
      <Head>
        <title>Tribe41 Signature Generator</title>
        <meta name="" content="" />
      </Head>

      <main>
        <div className="relative isolate pt-14">
          <svg
            className="absolute inset-0 -z-10 block h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] "
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
                width={200}
                height={200}
                x="50%"
                y={0}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-50">
              <path
                d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
            />
          </svg>

          <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
            <svg
              viewBox="0 0 1313 771"
              aria-hidden="true"
              className="ml-[max(50%,38rem)] w-[82.0625rem]"
            >
              <path
                id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
                fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
                d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"
              />
              <defs>
                <linearGradient
                  id="85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3"
                  x1="1313.17"
                  x2="-88.881"
                  y1=".201"
                  y2="539.417"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#93c5fd" />
                  <stop offset={1} stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end">
            <svg
              viewBox="0 0 1313 771"
              aria-hidden="true"
              className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            >
              <use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc" />
            </svg>
          </div>

          <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-8">
            <h1 className="text-6xl font-bold tracking-tight text-teal-800">
              Tribe41 Signature Generator
            </h1>
            <p className=" mt-4 max-w-2xl text-center text-gray-900">
              Create your personalized Tribe41 email signatures in just a few
              clicks. Simply enter your details below and then hit the Copy
              Signature HTML button. If you need help you will find three useful
              links at the bottom page.
            </p>
          </div>

          <form className="mx-auto max-w-4xl ">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600"
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
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-slate-200  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600"
                    placeholder="Owner and Manager"
                    value={signatureInfo.title}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Studio Email Address
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-slate-200  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600"
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
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Studio Phone Number
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600"
                    placeholder="1300 444 888"
                    autoComplete="phone"
                    value={signatureInfo.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Studio Address
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-slate-200  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600"
                    placeholder="21 Tohma Pass, Sydney, NSW 2000"
                    value={signatureInfo.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center">
            <Preview data={signatureInfo} />

            <HelpLinks />
          </div>
        </div>
      </main>
      <Toaster />
    </>
  )
}
