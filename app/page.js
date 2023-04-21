export default function Home() {
  return (
    <div className="m-8">
      <h2 className="text-lg font-semibold text-slate-900">Color shades</h2>
      <div className="mt-2 flex flex-wrap gap-6">
        <div
          className="inline-flex overflow-hidden rounded-md"
          data-theme="base"
        >
          <div className="bg-primary-50 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            50
          </div>
          <div className="bg-primary-100 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            100
          </div>
          <div className="bg-primary-200 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            200
          </div>
          <div className="bg-primary-300 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            300
          </div>
          <div className="bg-primary-400 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            400
          </div>
          <div className="bg-primary-500 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            500
          </div>
          <div className="bg-primary-600 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            600
          </div>
          <div className="bg-primary-700 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            700
          </div>
          <div className="bg-primary-800 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            800
          </div>
          <div className="bg-primary-900 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            900
          </div>
        </div>
        <div
          className="inline-flex overflow-hidden rounded-md"
          data-theme="rainforest"
        >
          <div className="bg-primary-50 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            50
          </div>
          <div className="bg-primary-100 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            100
          </div>
          <div className="bg-primary-200 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            200
          </div>
          <div className="bg-primary-300 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            300
          </div>
          <div className="bg-primary-400 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            400
          </div>
          <div className="bg-primary-500 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            500
          </div>
          <div className="bg-primary-600 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            600
          </div>
          <div className="bg-primary-700 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            700
          </div>
          <div className="bg-primary-800 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            800
          </div>
          <div className="bg-primary-900 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            900
          </div>
        </div>
        <div
          className="inline-flex overflow-hidden rounded-md"
          data-theme="candy"
        >
          <div className="bg-primary-50 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            50
          </div>
          <div className="bg-primary-100 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            100
          </div>
          <div className="bg-primary-200 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            200
          </div>
          <div className="bg-primary-300 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            300
          </div>
          <div className="bg-primary-400 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            400
          </div>
          <div className="bg-primary-500 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            500
          </div>
          <div className="bg-primary-600 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            600
          </div>
          <div className="bg-primary-700 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            700
          </div>
          <div className="bg-primary-800 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            800
          </div>
          <div className="bg-primary-900 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            900
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-lg font-semibold text-slate-900">Color opacity</h2>
        <div className="mt-2 grid gap-6">
          <div className="flex gap-4" data-theme="rose">
            <div className="bg-primary-600 text-primary-50 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              100%
            </div>
            <div className="bg-primary-600 text-primary-50 grid h-16 w-16 place-items-end rounded-md bg-opacity-70 p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              70%
            </div>
            <div className="bg-primary-600/50 text-primary-900 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              50%
            </div>
            <div className="bg-primary-600 text-primary-900 grid h-16 w-16 place-items-end rounded-md bg-opacity-30 p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              30%
            </div>
            <div className="bg-primary-600/[0.1] text-primary-900 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              10%
            </div>
          </div>
          <div className="flex gap-4" data-theme="rainforest">
            <div className="bg-primary-600 text-primary-50 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              100%
            </div>
            <div className="bg-primary-600 text-primary-50 grid h-16 w-16 place-items-end rounded-md bg-opacity-70 p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              70%
            </div>
            <div className="bg-primary-600/50 text-primary-900 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              50%
            </div>
            <div className="bg-primary-600 text-primary-900 grid h-16 w-16 place-items-end rounded-md bg-opacity-30 p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              30%
            </div>
            <div className="bg-primary-600/[0.1] text-primary-900 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              10%
            </div>
          </div>
          <div className="flex gap-4" data-theme="candy">
            <div className="bg-primary-600 text-primary-50 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              100%
            </div>
            <div className="bg-primary-600 text-primary-50 grid h-16 w-16 place-items-end rounded-md bg-opacity-70 p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              70%
            </div>
            <div className="bg-primary-600/50 text-primary-900 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              50%
            </div>
            <div className="bg-primary-600 text-primary-900 grid h-16 w-16 place-items-end rounded-md bg-opacity-30 p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              30%
            </div>
            <div className="bg-primary-600/[0.1] text-primary-900 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              10%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
