import React from 'react'

const FriendCard = ({ friend }) => {
    const modal = document.getElementById(`model-${friend.idx}`);
    const openModal = () => {
        modal.showModal();
    }
    return (
        <>
        <div className="card-container" onClick={()=>{openModal()}}>
            <div className='card'>
                <img src={friend.picture.medium}></img>
                <div className="card__content">
                    <h2>{friend.name.first} {friend.name.last}</h2>
                    <p>{friend.phone}</p>
                    <p>{friend.email}</p>
                </div>
            </div>
        </div>
        <dialog id={`model-${friend.idx}`} className="model-container">
            <div className="model">
                <img src={friend.picture.medium}></img>
                <div className="model__content">
                    <h2>{friend.name.first} {friend.name.last}</h2>
                    <p>{friend.phone}</p>
                    <p>{friend.email}</p>
                    {/* additional info */}
                    <p>{friend.dob.date}</p>
                    <p>{`${friend.location.street.number}, ${friend.location.street.name}, ${friend.location.city}, ${friend.location.state}, ${friend.location.country} `}</p>
                </div>
            </div>
        </dialog>
        </>
    )
}

export default FriendCard