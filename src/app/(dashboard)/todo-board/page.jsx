import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import TodoCardComponent from '@/components/TodoCardComponent'
import React from 'react'

const TodoBoardPage = () => {
  return (
    <div className='w-[97%]'>
      <div className='mt-5 '>
        <ListBoardComponentHeader/>
        
      </div>
        
        <TodoCardComponent/>
    </div>
  )
}

export default TodoBoardPage