import React from 'react'

const FriendCard = ({ friend }) => {
    return (
        <div>
            <p>{friend.name.first}</p>
            <p>{friend.name.last}</p>
            <p>{friend.phone}</p>
            <p>{friend.email}</p>
        </div>
    )
}

export default FriendCard