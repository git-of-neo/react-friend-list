import React from 'react'

const FriendCard = ({ friend }) => {
    return (
        <div className="card-container">
            <div className='card'>
                <p>{friend.name.first}</p>
                <p>{friend.name.last}</p>
                <p>{friend.phone}</p>
                <p>{friend.email}</p>
                {/* additional info */}
                <p>{friend.dob.date}</p>
                <p>{`${friend.location.street.number}, ${friend.location.street.name}, ${friend.location.city}, ${friend.location.state}, ${friend.location.country} `}</p>
            </div>
        </div>
    )
}

export default FriendCard