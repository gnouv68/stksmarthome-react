import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";


function DefaultLayout({ children }) {
    return (
        <>
            <div>
                <div className="mercado-clone-wrap">
                    <div className="mercado-panels-actions-wrap">
                        <a className="mercado-close-btn mercado-close-panels" href="#">x</a>
                    </div>
                    <div className="mercado-panels"></div>
                </div>
                <Header/>

                {children}

                <Footer/>
            </div>
        </>
    )
}

export default DefaultLayout