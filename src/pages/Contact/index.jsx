function Contact () {
    return (
        <>
            <main id="main" className="main-site left-sidebar">
                <div className="container">
                    <div className="wrap-breadcrumb">
                        <ul>
                            <li className="item-link"><a href="#" className="link">home</a></li>
                            <li className="item-link"><span>Contact us</span></li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className=" main-content-area">
                            <div className="wrap-contacts ">
                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="contact-box contact-form">
                                        <h2 className="box-title">Để lại lời nhắn</h2>
                                        <form action="#" method="get" name="frm-contact">
                                            <label htmlFor="name">Tên<span>*</span></label>
                                            <input type="text" defaultValue id="name" name="name" />
                                            <label htmlFor="email">Email<span>*</span></label>
                                            <input type="text" defaultValue id="email" name="email" />
                                            <label htmlFor="phone">Số điện thoại</label>
                                            <input type="text" defaultValue id="phone" name="phone" />
                                            <label htmlFor="comment">Bình luận</label>
                                            <textarea name="comment" id="comment" defaultValue={""} />
                                            <input type="submit" name="ok" defaultValue="Gửi" />
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="contact-box contact-info">
                                        <div className="wrap-map">
                                            <div className="mercado-google-maps" id="az-google-maps57341d9e51968" data-hue data-lightness={1} data-map-style={2} data-saturation={-100} data-modify-coloring="false" data-title_maps="Kute themes" data-phone="088-465 9965 02" data-email="kutethemes@gmail.com" data-address="Z115 TP. Thai Nguyen" data-longitude="-0.120850" data-latitude="51.508742" data-pin-icon data-zoom={16} data-map-type="ROADMAP" data-map-height={263}>
                                            </div>
                                        </div>
                                        <h2 className="box-title">Chi tiết liên hệ</h2>
                                        <div className="wrap-icon-box">
                                            <div className="icon-box-item">
                                                <i className="fa fa-envelope" aria-hidden="true" />
                                                <div className="right-info">
                                                    <b>Email</b>
                                                    <p>Support1@Mercado.com</p>
                                                </div>
                                            </div>
                                            <div className="icon-box-item">
                                                <i className="fa fa-phone" aria-hidden="true" />
                                                <div className="right-info">
                                                    <b>Phone</b>
                                                    <p>0898080179</p>
                                                </div>
                                            </div>
                                            <div className="icon-box-item">
                                                <i className="fa fa-map-marker" aria-hidden="true" />
                                                <div className="right-info">
                                                    <b>Mail Office</b>
                                                    <p>91 Lê Ấm, Phường Hoà Xuân, Quận Cẩm Lệ, Thành phố Đà Nẵng, Việt Nam</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/*end main products area*/}
                    </div>{/*end row*/}
                </div>{/*end container*/}
            </main>
        </>
    )
}

export default Contact