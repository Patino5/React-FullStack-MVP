const ClubItem = ({club, getSingleClub}) => {

    const handleClick = (e) => {
        console.log(e.currentTarget.id)
        getSingleClub(e.currentTarget.id)
    }

    return (
        <div className="clubCard" id={club.id} onClick={handleClick}>
            <h1>{club.club_type}</h1>
        </div>
    )
}

export default ClubItem