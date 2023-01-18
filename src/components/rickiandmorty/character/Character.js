import '../../style/Style.css'

const Character = ({character}) => {
    const {id, name, status, species, gender, image} = character
    return (
        <div className='post'>
            <h2>{id}. {name}</h2>
            <div className='inner'>
                <div>
                    <img src={image} alt={name}/>
                </div>
                <div>
                    <p>{status} <br/> {species} <br/>{gender}</p>
                </div>
            </div>

        </div>
    );
};

export {Character};