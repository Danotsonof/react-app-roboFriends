import React from 'react'
import Card from './Card'

const CardList = ({ info }) => {
    return (
        <div>
            {
                info.map((user, index) => {
                    return <Card
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email} />
                })
            }
        </div>
    )
}

export default CardList;
