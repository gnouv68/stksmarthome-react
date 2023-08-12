import {Link} from "react-router-dom";
import {useState} from "react";
import data from "../../datas/category.js";

import productData from '../../datas/products.js'
import bannerMain from '../../assets/imgs/banner/banner-main-01.jpg'
import ProductItem from "../../components/Product/ProductItem.jsx";

function getRandomProducts(count) {
    const shuffledProducts = [...productData].sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, count);
}


function Home () {

    const [category , setCategory] = useState('Smart Home')

    const [banner , setBanner] = useState(bannerMain)

    const [products , setProducts] = useState('')
    const randomProducts = getRandomProducts(4);


    const handleTitle = (cat_name , imgBanner) => {
        setCategory(cat_name)
        setBanner(imgBanner)
    }
    return (
        <>
            <main id="main" className="main-site left-sidebar">
                <div className="container">
                    <div className="wrap-breadcrumb">
                        <ul>
                            <li className="item-link"><Link href="/" className="link">Trang chủ</Link></li>
                            <li className="item-link"><span>{category}</span></li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12 main-content-area">
                            <div className="banner-shop">
                                <Link href="#" className="banner-link">
                                    <figure><img src={banner} alt="" style={{ height: '300px' ,width: '100%' }}/></figure>
                                    {/*<figure><video src={} /></figure>*/}
                                </Link>
                            </div>
                            <div className="wrap-shop-control">
                                <h1 className="shop-title">{category}</h1>
                                <div className="wrap-right">
                                    {/*<div className="sort-item orderby ">*/}
                                    {/*    <select name="orderby" className="use-chosen">*/}
                                    {/*        <option value="menu_order" selected="selected">Default sorting</option>*/}
                                    {/*        <option value="popularity">Sort by popularity</option>*/}
                                    {/*        <option value="rating">Sort by average rating</option>*/}
                                    {/*        <option value="date">Sort by newness</option>*/}
                                    {/*        <option value="price">Sort by price: low to high</option>*/}
                                    {/*        <option value="price-desc">Sort by price: high to low</option>*/}
                                    {/*    </select>*/}
                                    {/*</div>*/}

                                    {/*<div className="change-display-mode">*/}
                                    {/*    <a href="#" className="grid-mode display-mode active"><i className="fa fa-th" />Grid</a>*/}
                                    {/*    <a href="list.html" className="list-mode display-mode"><i className="fa fa-th-list" />List</a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>{/*end wrap shop control*/}
                            <div className="row">
                                <ul className="product-list grid-products equal-container">
                                    {productData.map(item => (
                                        <ProductItem key={item.id} name={item.name} image={item.img} id={item.id}  />
                                        // <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 " key={item.id}>
                                        //     <div className="product product-style-3 equal-elem ">
                                        //         <div className="product-thumnail">
                                        //             <Link to={`/product/${item.id}`} title={item.name}>
                                        //                 <figure><img src={item.img} alt={item.name} style={{ height: '364px' ,width: '364%' }} /></figure>
                                        //             </Link>
                                        //         </div>
                                        //         <div className="product-info">
                                        //             <a href="#" className="product-name"><span>{item.name}</span></a>
                                        //             <div className="wrap-price"><span className="product-price">Liên hệ</span></div>
                                        //             {/*<a href="#" className="btn add-to-cart">Add To Cart</a>*/}
                                        //         </div>
                                        //     </div>
                                        // </li>
                                    ))}
                                </ul>
                            </div>
                            {/*<div className="wrap-pagination-info">*/}
                            {/*    <ul className="page-numbers">*/}
                            {/*        <li><span className="page-number-item current">1</span></li>*/}
                            {/*        <li><a className="page-number-item" href="#">2</a></li>*/}
                            {/*        <li><a className="page-number-item" href="#">3</a></li>*/}
                            {/*        <li><a className="page-number-item next-link" href="#">Next</a></li>*/}
                            {/*    </ul>*/}
                            {/*    <p className="result-count">Showing 1-8 of 12 result</p>*/}
                            {/*</div>*/}
                        </div>{/*end main products area*/}
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 sitebar">
                            <div className="widget mercado-widget categories-widget">
                                <h2 className="widget-title">Danh mục sản phẩm</h2>
                                <div className="widget-content">
                                    <ul className="list-category">
                                        {/*<li className="category-item has-child-cate">*/}
                                        {/*    <a href="#" className="cate-link">Fashion &amp; Accessories</a>*/}
                                        {/*    <span className="toggle-control">+</span>*/}
                                        {/*    <ul className="sub-cate">*/}
                                        {/*        <li className="category-item"><a href="#" className="cate-link">Batteries (22)</a></li>*/}
                                        {/*        <li className="category-item"><a href="#" className="cate-link">Headsets (16)</a></li>*/}
                                        {/*        <li className="category-item"><a href="#" className="cate-link">Screen (28)</a></li>*/}
                                        {/*    </ul>*/}
                                        {/*</li>*/}
                                        {/*<li className="category-item">*/}
                                        {/*    <a href="#" className="cate-link">Tools &amp; Equipments</a>*/}
                                        {/*</li>*/}
                                        {/*<li className="category-item">*/}
                                        {/*    <a href="#" className="cate-link">Kid’s Toys</a>*/}
                                        {/*</li>*/}
                                        {/*<li className="category-item">*/}
                                        {/*    <a href="#" className="cate-link">Organics &amp; Spa</a>*/}
                                        {/*</li>*/}

                                        {data.map(item => (
                                            <li className="category-item" key={item.id}>
                                                <Link onClick={()=> handleTitle(item.name , item.img)} href="#" className="cate-link">{item.name} </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>{/* Categories widget*/}




                            <div className="widget mercado-widget widget-product">
                                <h2 className="widget-title">Sản phẩm phổ biến</h2>
                                <div className="widget-content">
                                    <ul className="products">
                                        {randomProducts.map(product_p_h => (
                                            <li className="product-item" key={product_p_h.id}>
                                                <div className="product product-widget-style">
                                                    <div className="thumbnnail">
                                                        <a href="detail.html" title={product_p_h.name}>
                                                            <figure><img src={product_p_h.img} alt="" /></figure>
                                                        </a>
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#" className="product-name"><span>{product_p_h.name}</span></a>
                                                        <div className="wrap-price"><span className="product-price">liên hệ giá</span></div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}


                                    </ul>
                                </div>
                            </div>{/* brand widget*/}
                        </div>{/*end sitebar*/}
                    </div>{/*end row*/}
                </div>{/*end container*/}
            </main>
        </>
    )

}

export default Home