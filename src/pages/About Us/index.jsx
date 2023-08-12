import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import {useState} from "react";

import img1 from '../../assets/imgs/cong-trinh/drive-download-20230812T093504Z-001/z3989165594662_a7b90a36802783da2b24e1303a9c3a37.jpg'
import img2 from '../../assets/imgs/cong-trinh/drive-download-20230812T093504Z-001/z3989165601112_1d8f4441e2ed8022daf9829ff5614875.jpg'
import img3 from '../../assets/imgs/cong-trinh/drive-download-20230812T093504Z-001/z3989165604678_5b830cc733450c6a94f9e5026d607d4a.jpg'
import img4 from '../../assets/imgs/cong-trinh/drive-download-20230812T093504Z-001/z3989165610668_3352bb111786f1a2630d9d7d0c23f321.jpg'
import img5 from '../../assets/imgs/cong-trinh/drive-download-20230812T093504Z-001/z3989165612667_4ea4ede4fe6fa0b5efa6820ef78ac91a.jpg'
import img6 from '../../assets/imgs/cong-trinh/drive-download-20230812T093504Z-001/z3989165616702_71961b538f6eed766283bd049c5db2fc.jpg'
import img7 from '../../assets/imgs/cong-trinh/drive-download-20230812T093504Z-001/z3989165625585_a54d682123ad9fc7a93338b1ed631e35.jpg'

const images = [
    {
        label: 'Đà Nẵng',
        imgPath:img1,
    },
    {
        label: 'Đà Nẵng',
        imgPath:img2,
    },
    {
        label: 'Đà Nẵng',
        imgPath:img3,
    },
    {
        label: 'Đà Nẵng',
        imgPath: img4,
    },
    {
        label: 'Đà Nẵng',
        imgPath:img5,
    },
    {
        label: 'Đà Nẵng',
        imgPath:img6,
    },
    {
        label: 'Đà Nẵng',
        imgPath:img7,
    },
];
function AboutUs() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <>
            <main id="main" className="main-site">
                <div className="container">
                    <div className="wrap-breadcrumb">
                        <ul>
                            <li className="item-link"><a href="#" className="link">home</a></li>
                            <li className="item-link"><span>Contact us</span></li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    {/* <div class="main-content-area"> */}
                    <div className="aboutus-info style-center">
                        <b className="box-title">Về chúng tôi</b>
                        <p className="txt-content">Chào mừng bạn đến với STK Smart Home - nơi cung cấp các giải pháp và sản phẩm thông minh hàng đầu cho ngôi nhà của bạn. Chúng tôi tận tâm phục vụ để giúp bạn tận hưởng cuộc sống hiện đại và thuận tiện hơn thông qua các thiết bị và công nghệ tiên tiến.</p>
                    </div>
                    <div className="row equal-container">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="aboutus-box-score equal-elem ">
                                <b className="box-score-title">500</b>
                                <span className="sub-title">sản phẩm tại cửa hàng</span>
                                <p className="desc">Chúng tôi luôn có sẵn 500 sản phẩm thông minh tại cửa hàng</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="aboutus-box-score equal-elem ">
                                <b className="box-score-title">90%</b>
                                <span className="sub-title">Khách hàng của chúng tôi trở lại</span>
                                <p className="desc">STK SmartHome xin chân thành cảm ơn sự tin tưởng và ủng hộ từ phía khách hàng trong suốt thời gian qua. Hãy cùng chúng tôi trải nghiệm tương lai thông minh tại ngôi nhà của bạn.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="aboutus-box-score equal-elem ">
                                <b className="box-score-title">500,000</b>
                                <span className="sub-title">Người dùng của trang web</span>
                                <p className="desc">500,000 Người dùng</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="aboutus-info style-small-left">
                                <b className="box-title">Sứ Mệnh Của Chúng Tôi</b>
                                <p className="txt-content">Tại STK SmartHome, sứ mệnh của chúng tôi là mang đến những sản phẩm và giải pháp thông minh vượt trội, giúp bạn kiểm soát và tối ưu hóa không gian sống của mình. Chúng tôi tin rằng việc áp dụng công nghệ vào cuộc sống hàng ngày không chỉ mang lại sự tiện lợi mà còn giúp tiết kiệm năng lượng và nâng cao chất lượng cuộc sống.</p>
                            </div>
                            <div className="aboutus-info style-small-left">
                                <b className="box-title">Dịch Vụ Của Chúng Tôi</b>
                                <p className="txt-content">Chúng tôi cung cấp một loạt các sản phẩm thông minh đa dạng bao gồm công tắc thông minh, cảm biến chuyển động, ổ cắm điện thông minh và nhiều thiết bị khác. Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn trong việc lựa chọn sản phẩm phù hợp với nhu cầu và mong muốn của bạn.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="aboutus-info style-small-left">
                                <b className="box-title">Chất Lượng Đỉnh Cao</b>
                                <p className="txt-content">Chúng tôi cam kết cung cấp các sản phẩm chất lượng cao và được thử nghiệm kỹ lưỡng trước khi đến tay bạn.</p>
                            </div>
                            <div className="aboutus-info style-small-left">
                                <b className="box-title">Sự Đổi Mới</b>
                                <p className="txt-content">Chúng tôi luôn nắm bắt những xu hướng mới nhất trong ngành công nghệ thông minh để đem đến cho bạn những sản phẩm hàng đầu.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="aboutus-info style-small-left">
                                <b className="box-title">HỢP TÁC VỚI CHÚNG TÔI!</b>
                                <div className="list-showups">
                                    <label>
                                        <input type="radio" className="hidden" name="showup" id="shoup1" defaultValue="shoup1" defaultChecked="checked" />
                                        <span className="check-box" />
                                        <span className="function-name">Support 24/7</span>
                                        <span className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
                                    </label>
                                    <label>
                                        <input type="radio" className="hidden" name="showup" id="shoup2" defaultValue="shoup2" />
                                        <span className="check-box" />
                                        <span className="function-name">Best Quanlity</span>
                                        <span className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
                                    </label>
                                    <label>
                                        <input type="radio" className="hidden" name="showup" id="shoup3" defaultValue="shoup3" />
                                        <span className="check-box" />
                                        <span className="function-name">Fastest Delivery</span>
                                        <span className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
                                    </label>
                                    <label>
                                        <input type="radio" className="hidden" name="showup" id="shoup4" defaultValue="shoup4" />
                                        <span className="check-box" />
                                        <span className="function-name">Customer Care</span>
                                        <span className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="our-team-info">
                        <h4 className="title-box">Công trình đã làm</h4>
                        <Box sx={{ maxWidth: 1150, flexGrow: 1 }}>
                            <Paper
                                square
                                elevation={0}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: 100,
                                    pl: 2,
                                    bgcolor: 'background.default',
                                }}
                            >
                                <Typography>{images[activeStep].label}</Typography>
                            </Paper>
                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {images.map((step, index) => (
                                    <div key={step.label}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <Box
                                                component="img"
                                                sx={{
                                                    height: 800,
                                                    display: 'block',
                                                    maxWidth: 1150,
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                }}
                                                src={step.imgPath}
                                                alt={step.label}
                                            />
                                        ) : null}
                                    </div>
                                ))}
                            </AutoPlaySwipeableViews>
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === maxSteps - 1}
                                    >
                                        Next
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        Back
                                    </Button>
                                }
                            />
                        </Box>
                    </div>
                    {/* </div> */}
                </div>{/*end container*/}
            </main>
        </>
    )
}

export default AboutUs