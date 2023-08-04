import React from 'react'
import Card from './card'

const ListItem = (props) => {
  const data = props.data

  const filterSort =  data.filter((a) => a.salarie > 50000)
  // .sort((a,b) => a.name > b.name ? 1:-1)
  .sort((a,b)  =>a.salarie - b.salarie)
  
  
  // const listItem = filterSort.map( (item) =>{
  //   return (
  //       <li>
  //           {item.id} {item.name} {item.salarie} {item.position}
  //       </li>
  //   )
  // })
  const listItem = filterSort.map( (item) =>{
    return (
        <Card 
        id = {item.id}
        img = {item.img}
        name={item.name} 
        position={item.position} 
        salarie = {item.salarie}
        bio = {item.bio}
        exp={item.exp}
        />
    )
  })
    return (
    <div className='list-item'>{listItem}</div>
  )
}

export default ListItem