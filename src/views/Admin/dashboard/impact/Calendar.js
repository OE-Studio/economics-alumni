import React, {useEffect, useState} from "react"
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const CalenderBookAppointment = ({value, setValue, calender, availableDays}) =>{
    const [selectMonth, setSelectMonth] = useState(value.format('MMMM'))
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    // const [available, setAvailable] = useState([])

    // console.log(availableDays)
    let trimmed = []
    if(availableDays){
      let newDays = availableDays.replace('and', ",")
      trimmed  = newDays.split(',').map(d=>d.trim().slice(0,2).toUpperCase()) 
    }

    let indexes=[]
  
    const setAppointmentDate = (day, checker) =>{
        if(checker || (checker === 0)){
          setValue(day)
        }
        else {
          setError('This counsellor is not available for the date')
          setTimeout(()=>{
            setError("")
          }, 3000)
        }
    }
  
    function currMonth(e) {
      e.stopPropagation()
      // console.log(e.target.textContent)
      setSelectMonth(e.target.textContent)
      setValue(value.clone().month(e.target.textContent))
      setShow(false)
    //   console.log(e.target.value)
    }
  
    const checkDay = (day) =>{
      if (isToday(day)) return "text-white bg-blue text-white rounded-full"
      if (!isThisMonth(day)) return "text-gray-400"
      else return ""
    }
    
    function isToday(day) {
        const val = value._d
        return day.isSame(val, 'day')
    }
    

    function isThisMonth(day) {
      return day.isSame(new Date(), 'month')
    }

    const showOptions= ()=>{
      console.log("testing")
      setShow(!show)
    }

    useEffect(()=>{
      window.addEventListener('click', (e)=>{
        let dateContainer = document.querySelector('.dateContainer')
        let options = document.querySelectorAll('.options')

        if(show){
          Array.from(options).map(m=>{
            if((e.target !== m) && e.target !== dateContainer){
              setShow(false)
            }
            return false
          })
        }
      })

      return ()=>window.removeEventListener('click', ()=>false)
    }, [show])

    let optionClass = "h-10 options w-full rounded-5px transparent hover:bg-blue hover:text-white flex items-center justify-start pl-2 cursor-pointer z-30"

    const months = "January,February,March,April,May,June,July,August,September,October,November,December".split(',')
  
    
      return (
          <div className="w-full h-auto">
            <div className="px-3 xl:pl-5 text-green bg-light_green text-sm py-3 rounded-5px flex items-center justify-start">
              <p>Icon</p>
              {/* <CalendarMonthIcon className="mr-3"/>  */}
              <p>Counselor’s Available days are clearly marked in blue</p>
            </div>

            <div className="w-full flex justify-between items-center mt-6">
              <p>Select date</p>

              <div className="w-28 xl:w-36 h-10 cursor-pointer hover:bg-blue_15 rounded-inputs flex items-center pl-2 relative dateContainer soft-shadow z-30" onClick={showOptions}>
                <div className="flex items-center pointer-events-none">{selectMonth}</div>
                {show && <div className="absolute top-11 left-0 w-full h-60 overflow-scroll transparent z-30 shadow-lg p-2 rounded-inputs">
                  {months.map(m=>{
                    return <div key={m} onClick={currMonth} className={optionClass}>{m}</div>
                  })}
                </div>}

                <span className="absolute sm:top-1 md:top-2 right-2 pointer-events-none text-light_text"><i className="ri-arrow-down-s-line"></i></span>
              </div>
            </div>

            <div className="h-6 relative z-10">{error && <p className="text-center text-red-500">{error}</p>}</div>
  
            <div className="w-full h-auto relative z-10">
              <div className="w-full flex bg-light_blue py-1 text-blue text-sm">
                {
                  ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map((d, index)=>{
                    let available = trimmed.find(t=>t===d)
                    if (available) {
                      indexes.push(index)
                    }
                    return <div key={d} className={`w-1/7 sm:py-1 flex items-center justify-center `}>
                      <p className={`${available && "bg-blue rounded-5px text-white p-0.5 px-1"}`}>{d}</p>
                    </div>
                  })
                }
              </div>
              {calender.map((week, index)=>{
                
                return <div className={`w-full h-auto `} key={index}>
                  {week.map((day, ind)=>{
                    let checker = indexes.find(i=>String(i) === String(ind))
                    let checkerClass = (checker || checker === 0)  ? "cursor-pointer" : "cursor-not-allowed text-light_text"
                    // console.log(checker)
                    return (
                      <div key={ind} onClick={()=>{setAppointmentDate(day, checker)}} className="relative inline-block w-1/7 text-center rounded-full">
                        <div className={`w-10 h-10 rounded-full relative mx-auto flex justify-center items-center hover:bg-blue hover:text-white 
                          ${checkerClass} ${checkDay(day)}`}>
                            <p className="">{day.format('D').toString()}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              })}
            </div>
          </div>
      )
}

export default CalenderBookAppointment
