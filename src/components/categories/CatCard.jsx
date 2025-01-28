import React from 'react'

const CatCard = ({category}) => {
    return (
      <div className="rounded-lg p-6 flex flex-col gap-4 items-center justify-center cursor-pointer"
           style={{
             background: `linear-gradient(to bottom, ${category.firstColor}, ${category.secondColor
             })`
           }}>
        <img src={category.image} alt={category.title} />
        <h3 className='font-semibold'>{category.title}</h3>
      </div>
    )
  }

export default CatCard