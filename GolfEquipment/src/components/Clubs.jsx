import ClubItem from "./ClubItem"

const Clubs = ({clubs, getSingleClub}) => {
    return (
    <div className="club-container">
          {clubs.map((club) => (
            <div key={club.id}>
                <ClubItem club={club} getSingleClub={getSingleClub} />
    
            </div>
        ))}

    </div>

    )
}

export default Clubs
