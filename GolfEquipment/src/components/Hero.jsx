import AddButton from "./AddButton"

const Hero = ({onAddClub}) => {
    return (
        <div className="hero">
            <h1>Build Your Golf Bag</h1>
            <AddButton onAddClub={onAddClub} />
        </div>
    )
}
export default Hero