import React from 'react'

function Pcard(props) {
    return (
        
        <>
            

            <div class="max-w-sm  border  rounded-lg shadow bg-gray-800 border-gray-700">
                <a href="#" className='flex'>
                    <img class="rounded-t-lg  w-full " src={props.img} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">{props.title}</h5>
                    </a>
                    <p class="mb-3 font-normal  text-gray-400">{props.des}</p>
                    <a href={props.url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                        Link to  project
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Pcard
