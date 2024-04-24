import React from 'react'

const WorkSpace = () => {
  return (
    <div>
        <div class="max-w-3xl mx-auto mt-5">
        <div class="flex gap-3 bg-yellow-200 rounded-xl overflow-hidden items-center justify-start">
            <div class="relative w-32 h-36 flex-shrink-0">
                <div class=" w-30 mt-5 h-28 bg-white rounded-lg ml-5" >
                    <div className='ml-6 pt-5'>
                        <span className='text-3xl font-bold text-red-600' >Wed</span>
                        <p className='text-3xl font-bold'>17</p>
                    </div>
                </div>

            </div>

            <div class="flex flex-col gap-2 py-2">
                <p class="text-xl font-bold"> Woring on Task</p>
                <p class="text-gray-500">
                String
                </p>
            </div>
            <div>
                <button className='bg-white h-8 rounded-lg w-24 mt-24 ml-72'>Todo</button>
            </div>

        </div>

    </div>
    </div>
  )
}

export default WorkSpace