function Card(prop) {
    return (
        <div className="card">
            <img className="card-image" src={prop.sr} alt="cat" />
            <h1 className="card-title">{prop.hd}</h1>
            <p className="card-text">{prop.txt}</p>

        </div>

    );
}
export default Card