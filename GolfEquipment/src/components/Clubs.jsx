import ClubItem from "./ClubItem"

const Clubs = ({clubs, getSingleClub}) => {
    return clubs.map((club) => (
        <div className="container">
            <ClubItem club={club}
             key={club.id}
             getSingleClub={getSingleClub} />
             
        </div>
    )) 
}

export default Clubs