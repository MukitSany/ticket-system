import { use } from "react"




export default function Tickets({ticketPromise}) {

    const ticketInfprmation = use(ticketPromise)
    console.log(ticketInfprmation);
    return (
        <div className="max-w-450 mx-auto">

            

            <div>
                <h1 className="font-extrabold text-3xl">Customer Tickets</h1>
                <div className="">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                ticketInfprmation.map(ticket=><div>
                    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-3xl">
        
        
        <div className="flex items-start justify-between">
          
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {ticket.title}
            </h2>

            <p className="text-gray-500 mt-2">
              {ticket.description}
            </p>
          </div>

          
          <span className="flex items-center gap-2 bg-green-100 text-green-700 
          px-4 py-1 rounded-full text-sm font-medium">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            {ticket.status}
          </span>
        </div>

        
        <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
          
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{ticket.id}</span>
            <span className="text-red-500 font-semibold">
              {ticket.priority}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span>{ticket.customer}</span>

            <div className="flex items-center gap-2">
              
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

              <span>{ticket.createdAt}</span>
            </div>
          </div>
        </div>

      </div>
                </div>)
            }
                    </div>

                {/* <div className="p-12">
                        <h1 className="font-extrabold">sdjkbvsdhbv</h1>
                    </div> */}



                </div>

                
            </div>
        </div>
    )
}