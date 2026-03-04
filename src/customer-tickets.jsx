



export default function Tickets() {
    return (
        <div className="max-w-450 mx-auto">
            <div>
                <h1 className="font-extrabold text-3xl">Customer Tickets</h1>
                <div>
                    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-3xl">
        
        {/* Top Section */}
        <div className="flex items-start justify-between">
          
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Login Issues - Can't Access Account
            </h2>

            <p className="text-gray-500 mt-2">
              Customer is unable to log in to their account. They've tried
              resetting their password multiple times but still...
            </p>
          </div>

          {/* Status Badge */}
          <span className="flex items-center gap-2 bg-green-100 text-green-700 
          px-4 py-1 rounded-full text-sm font-medium">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Open
          </span>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
          
          <div className="flex items-center gap-4">
            <span className="text-gray-600">#1001</span>
            <span className="text-red-500 font-semibold">
              HIGH PRIORITY
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span>John Smith</span>

            <div className="flex items-center gap-2">
              {/* Calendar Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>

              <span>1/15/2024</span>
            </div>
          </div>
        </div>

      </div>
                </div>
            </div>
        </div>
    )
}