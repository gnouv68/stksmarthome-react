import {Link} from "react-router-dom";


function ProductItem (props) {
    // console.log(props.image)
    return (
        <>
            <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 " >
                <div className="product product-style-3 equal-elem ">
                    <div className="product-thumnail">
                        <Link to={`/product/${props.id}`} title={props.name}>
                            <figure><img src={props.image} alt={props.name} style={{ height: '364px' ,width: '364%' }} /></figure>
                        </Link>
                    </div>
                    <div className="product-info">
                        <a href="#" className="product-name"><span>{props.name}</span></a>
                        <div className="wrap-price"><span className="product-price">Liên hệ</span></div>
                        {/*<a href="#" className="btn add-to-cart">Add To Cart</a>*/}
                    </div>
                </div>
            </li>
        </>
    )
}

export default ProductItem