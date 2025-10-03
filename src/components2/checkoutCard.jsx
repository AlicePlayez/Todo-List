export const CheckoutCard = ({name, price, image, onRemove, id}) => {
    return(
        <div className="card p-3 mb-2">
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-3">
                    <img className="rounded" width={80} height={80} src={image} />
                    <div>
                        <h5>{name}</h5>
                        <p>Price: ${price}</p>
                    </div>
                </div>
                <button className="btn btn-danger" style={{ width:"fit-content", height: "fit-content" }} onClick={() => onRemove(id)}>Remove</button>
            </div>
        </div>
    )
}