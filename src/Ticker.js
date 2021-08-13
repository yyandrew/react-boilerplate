import { useEffect, useState } from 'react'
import useClock from './useClock'
import ClockFace from './ClockFace'
import './Ticker.css'

function Ticker() {
  const [isMinutes, setIsMinutes] = useState(false)
  const [isTick, setIsTick] = useState(false)
  const [isTickDate, setIsTickDate] = useState(false)
  const [isTick3, setIsTick3] = useState(false)
  const time = useClock(isMinutes ? 'HH:mm' : 'HH:mm:ss')
  const date = useClock('MMMM DD, YYYY')
  const tickThreeSeconds = useClock(3000)

  useEffect(() => {
    setIsTick((t) => !t)
  }, [time])

  useEffect(() => {
    setIsTickDate((t) => !t)
  }, [date])

  useEffect(() => {
    setIsTick3((t) => !t)
  }, [tickThreeSeconds])

  return (
    <div className="Ticker">
      <div className="Ticker-clock">
        <h1>{isTick ? 'Tick!' : 'Tock!'}</h1>
        <button onClick={() => setIsMinutes((m) => !m)}>
          {isMinutes ? 'Show seconds' : 'Hide seconds'}
        </button>
        <br />
        {time}
        <br />
        <ClockFace time={time} />
      </div>

      <div className="Ticker-clock">
        <h1>Date {isTickDate ? 'Tick!' : 'Tock!'}</h1>
        {date}
      </div>

      <div className="Ticker-clock">
        <h1>{isTick3 ? 'Tick!' : 'Tock!'}</h1>
        {tickThreeSeconds}
      </div>
    </div>
  )
}

export default Ticker
