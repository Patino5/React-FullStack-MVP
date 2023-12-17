//import DeleteButton, EditButton, HomeButton
import HomeButton from "./HomeButton";

const SingleClub = ({singleClub, clearSingleClub}) => {

    console.log(singleClub.club_name);

    return (
        <>
            <HomeButton clearSingleClub={clearSingleClub} />
            <div className="singleCard">
                <h1>{singleClub.club_name}</h1>
                <h2>Type: {singleClub.club_type}</h2>
                <h2>Brand: {singleClub.brand}</h2>
            </div>
            <button>Edit Btn component</button><button>Delete Btn Component</button>
        </>
    )
}

export default SingleClub