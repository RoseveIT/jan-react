import '../../style/Style.css'

const Simpson = ({simpson}) => {
    const {name, img, par} = simpson
    return (
        <div className='post'>
            <h2>{name}</h2>
            <div className='inner'>
                <div>
                    <img src={img} alt={name}/>
                </div>
                <div>
                    <p>{par}</p>
                </div>
            </div>

        </div>
    );
};

export {Simpson};