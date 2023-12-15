const ClubItem = ({club, getSingleClub}) => {

    const handleClick = (e) => {
        console.log(e.currentTarget.id)
        getSingleClub(e.currentTarget.id)
    }

    return (
        <div className="clubCard" id={club.id} onClick={handleClick}>
            <h1>Club Name</h1>
            <h2>Name: {club.clubName}</h2>
            <p>Type: {club.clubType}</p>
            <p>Brand: {club.brandName}</p>
        </div>
    )
}

export default ClubItem