import React from 'react'

import { RiArrowDownSLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";



const Pagination = ({ list, setlistStart, setlistEnd }) => {
    const [listPerPage] = React.useState(10)
    const [currentPage, setCurrentPage] = React.useState(1)
    let listEnd = currentPage * listPerPage
    let listStart = listEnd - listPerPage
    let totalPages = Math.ceil(list.length / listPerPage)

    

    React.useEffect(() => {
        setlistStart(listStart)
        setlistEnd(listEnd)
        // eslint-disable-next-line
    }, [currentPage])



    const decreaseCounter = () => {
        if (currentPage === 1) {
            setCurrentPage(totalPages)
            return
        }
        setCurrentPage(currentPage - 1)
    }

    const increaseCounter = () => {
        if (currentPage === totalPages) {
            setCurrentPage(1)
            return
        }
        setCurrentPage(currentPage + 1)
    }

   let setPagination = list.length < listPerPage

    return (
        !setPagination &&        
        <div className="flex py-4 justify-between">
            <div className=" inline-flex items-center p-2 rounded-lg">
                {/* <p className="text-base">{currentPage} / {totalPages}</p> */}
                <RiArrowDownSLine className="text-xl" />
            </div>

            <div className="flex space-x-3 items-center">
                <div className="p-4 rounded-lg hover:bg-white cursor:pointer" onClick={decreaseCounter}>
                    <RiArrowLeftSLine className="text-xl" />
                </div>

                <div className="p-4  rounded-lg hover:bg-white cursor:pointer" onClick={increaseCounter}>
                    <RiArrowRightSLine className="text-xl" />
                </div>
                <p className="text-base">page  {currentPage} / {totalPages}</p>
            </div>
        </div>
    )
}

export default Pagination