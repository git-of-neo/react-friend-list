import React from 'react'

const FriendCard = ({ friend }) => {
    const openModal = () => {
        const modal = document.getElementById(`model-${friend.idx}`);
        modal.showModal();
    }
    const closeModal = () => {
        const modal = document.getElementById(`model-${friend.idx}`);
        modal.close();
    }
    let dob = friend.dob.date.substring(0,10);
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
                <span className='model__exit' onClick={()=>{closeModal()}}>&#10539;</span>
                <img src={friend.picture.large}></img>
                <div className="model__content">
                    <h2>{friend.name.first} {friend.name.last}</h2>
                    <p>{friend.phone}</p>
                    <p>{friend.email}</p>
                    {/* additional info */}
                    <p>{dob}</p>
                    <p>{`${friend.location.street.number}, ${friend.location.street.name}, ${friend.location.city}, ${friend.location.state}, ${friend.location.country} `}</p>
                </div>
            </div>
        </dialog>
        </>
    )
}

export default FriendCard