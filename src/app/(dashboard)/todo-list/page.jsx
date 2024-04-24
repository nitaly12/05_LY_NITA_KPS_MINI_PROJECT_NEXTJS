import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import MonthlyStatisticsComponent from '@/components/MonthlyStatisticsComponent'
import React from 'react'
import Card from './workspace/page'
import WorkSpace from './workspace/page'

const TodoListpage = () => {
  return (
    <div className='flex mt-5 justify-start'>
        <div className='w-[50%]'>
          <ListBoardComponentHeader/>
          <WorkSpace/>
        </div>
        
        <div className='w-[30%] ml-10'>
          <MonthlyStatisticsComponent/>
        </div>
    </div>
  )
}

export default TodoListpage



// import NavbarComponent from '@/components/NavbarComponent'
// import SidebarComponent from '@/components/SidebarComponent'
// import TodoCardComponent from '@/components/TodoCardComponent'
// import { getAlllistService } from '@/service/todo-list.service'
// import React from 'react'

// const page = async () => {
//   const todoList = await getAlllistService();
  
//   return (
//     <div className='flex'>
//         <div className=' w-80'><SidebarComponent/></div>
//         <div className='w-full pl-10'><NavbarComponent/></div>
//     </div>
//   )
// }

// export default page
