
import './App.css'
import Navber from './navber'
import Banner from './banner'
import Tickets from './customer-tickets'
import { Suspense } from 'react'

const fetchTickets = async () => {
  const res = await fetch("tickets.json")
  return res.json()
}

function App() {
  const ticketPromise = fetchTickets()
  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
      <Suspense fallback={<progress className="progress w-56"></progress>}>
        <Tickets ticketPromise={ticketPromise}></Tickets>
      </Suspense>
    </>
  )
}

export default App
