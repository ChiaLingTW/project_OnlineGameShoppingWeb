import React, { Component } from 'react';
import Axios from 'axios';                              // 串連 NodeJS

// 近期活動
import hotGamePhoto_1 from './joyImage/hotGamePhoto_2.jpg';     // 強打遊戲縮圖
import hotGamePhoto_2 from './joyImage/hotGamePhoto_1.jpg';     // 強打遊戲縮圖
import hotGameVideo from './joyVideo/homeHotGame.mp4';                   // 強打遊戲影片
import LiveHost_1 from './joyImage/background/LiveStreamShow_01.png';     // 統神
import LiveHost_2 from './joyImage/background/LiveStreamShow_02.png';     // 貝莉莓
import LiveStreamBG from './joyImage/background/LiveStreamShow_03.png';     // 實況日曆圖
import hotStream_1 from './joyVideo/hotStream_01.png';     // 精選實況
import hotStream_2 from './joyVideo/hotStream_02.png';     // 精選實況
import hotStream_3 from './joyVideo/hotStream_03.png';     // 精選實況

// 最新消息縮圖 / JS效果
// import newsPhoto from './joyImage/demo600x400_01.jpg';   // 最新消息縮圖
import { Swiper, SwiperSlide } from "swiper/react";         // Import Swiper React components 套件
import "swiper/css";                                        // Import Swiper styles
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";       // import required modules

// 進入各頁面的 background / icon 縮圖
import enterGameInfo from './joyImage/icon_game.png';           // 周邊遊戲 icon
import enterLiveSteam from './joyImage/icon_liveSteam.png';                 // 論壇 icon
import enterForum from './joyImage/icon_forum.png';                 // 論壇 icon

// 合作夥伴bar
import partnerBG from './joyImage/background/LoginBG_01.png';
import logo_01 from './joyImage/logo_01.png';
import logo_02 from './joyImage/logo_02.png';
import logo_03 from './joyImage/logo_03.png';
import logo_04 from './joyImage/logo_04.png';
import logo_05 from './joyImage/logo_05.png';


class myHome extends Component {

    state = {
        data: [{}]
    }

    componentDidMount = async () => {
        var result = await Axios.get("http://localhost:8000/homeNEWS");
        this.state.data = result.data;
        this.setState({})
        console.log(result);
    }




    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {/* 大標：：近期活動 Amusement */}
                        {/* <h1 style={{ backgroundColor: "darkgray" }}>近期活動 Amusement</h1> */}
                        {/* <h3>強打遊戲</h3> */}
                        {/* 強打遊戲縮圖及連結 */}
                        <div className="hotGameCardArea">
                            {/* 強打遊戲宣傳影片 */}
                            <div className="hotGame_Main">
                                <video src={hotGameVideo} autoPlay loop muted ></video>
                            </div>
                            <div className="d-flex flex-wrap hotGameCard">
                                <div className="col-6 col-sm-3 hotGameCard">
                                    <img src={hotGamePhoto_1} style={{ width: "100%" }} alt="" />
                                </div>
                                <div className="col-6 col-sm-3">
                                    <a href="/GameInfo">
                                        FIFA 23 超級球星<br /><br />
                                        <span style={{ color: "gray" }}>立即購買</span>
                                    </a>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <a href="/GameInfo">
                                        Gotham Knights<br />
                                        高譚騎士<br /><br />
                                        <span style={{ color: "gray" }}>立即購買</span>
                                    </a>
                                </div>
                                <div className="col-6 col-sm-3 hotGameCard">
                                    <img src={hotGamePhoto_2} style={{ width: "100%" }} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* 大標：：進入各頁面入口 Enter */}
                        <h1 className="p-3" style={{ textAlign: "center" }}>快速入口 Enter</h1>
                        <div className="homeEnterCardArea p-3">
                            <div className="d-flex flex-wrap">
                                <div className="col-4 homeEnterCard">
                                    <a href="https://tw.piliapp.com/symbol/">
                                        <img src={enterGameInfo} alt="" />
                                        <h4>找周邊/遊戲</h4>
                                    </a>
                                </div>
                                <div className="col-4 homeEnterCard">
                                    <a href="https://tw.piliapp.com/symbol/">
                                        <img src={enterLiveSteam} alt="" />
                                        <h4>看實況</h4>
                                    </a>
                                </div>
                                <div className="col-4 homeEnterCard">
                                    <a href="https://tw.piliapp.com/symbol/">
                                        <img src={enterForum} alt="" />
                                        <h4>論壇</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* 視差滾動樣式 */}
                        <div className="parallax">
                            <div className="homebg1"></div>
                            <div className="homebg2"></div>
                            <div className="homebg3"></div>
                            <div className="homebg4"></div>
                        </div>
                        {/* 大標：：實況活動 Live Stream */}
                        <div className="col-12">
                            <div className="col-12 homeLiveStreamArea">
                                <h1 className="p-3" style={{ textAlign: "center" }}>實況活動 Live Stream</h1>
                                <img src={LiveStreamBG} alt="" className="homeLiveStream" />
                                <img src={LiveHost_1} alt="" className="homeLiveHost_1" />
                                <img src={LiveHost_2} alt="" className="homeLiveHost_2" />
                            </div>
                            {/* 精選實況影片 */}
                            <h4 className="p-3" style={{ textAlign: "center" }}>_ _ _ _ _ _ _ _ 精選實況影片 _ _ _ _ _ _ _ _</h4>
                            <div className="d-flex flex-wrap">
                                <div className="col-4 homeHotStream">
                                    <img src={hotStream_1} alt="" style={{ width: "100%" }} />
                                    {/* <video src="https://i.ytimg.com/an_webp/LQbGTfFU8uU/mqdefault_6s.webp?du=3000&sqp=CM3jx5wG&rs=AOn4CLAF0Xv_CU7j8KA7HP45PbSPdaQfgg" autoPlay muted width="100%"></video> */}
                                    <span className="homeHotStreamTitle">【統神】亞洲退費王，精華八分鐘 就退了五款遊戲</span>
                                </div>
                                <div className="col-4 homeHotStream">
                                    <img src={hotStream_2} alt="" style={{ width: "100%" }} />
                                    {/* <video src={videoBG} autoPlay muted width="100%"></video> */}
                                    <span className="homeHotStreamTitle">【統神】嘉航被預示者撞到卡在樹裡</span>
                                </div>
                                <div className="col-4 homeHotStream">
                                    <img src={hotStream_3} alt="" style={{ width: "100%" }} />
                                    {/* <video src="https://eus-streaming-video-rt-microsoft-com.akamaized.net/d826a00e-86d1-42df-b883-890275ddeb85/0eb92749-6356-4177-95dd-fb89040e_6750.mp4" autoPlay muted width="100%"></video> */}
                                    <span className="homeHotStreamTitle">【統神】地震！地震~！晨晨：大家都躲到這裡！</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 大標：：最新消息 NEWS */}
                    <h1 className="p-3" style={{ textAlign: "center" }}>最新消息 NEWS</h1>
                    {/* <div className="col-12 homeNewsCardArea" style={{ background: `url(${enterBG})` }}> */}
                    <div className="col-12 homeNewsCardArea">
                        <div className="d-flex flex-wrap p-3" >
                            <Swiper
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={"3"}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination={true}
                                modules={[EffectCoverflow, Pagination]}
                                className="mySwiper"
                            >
                                {
                                    this.state.data.map(
                                        (dataItem, index) =>
                                            <SwiperSlide key={index}>
                                                <div className="homeNewsCard">
                                                    <img src={dataItem.articleImg} alt="" />
                                                    <span>{dataItem.postdate}</span>
                                                    <h5 style={{ textAlign: "left", padding: "10px" }}>{dataItem.articleTitle}</h5>
                                                    <a href="/" className="btn btn-sm btn-success">閱讀更多</a>
                                                </div>
                                            </SwiperSlide>)
                                }
                                {/* <SwiperSlide>
                                    <div className="homeNewsCard">
                                        <img src={newsPhoto} alt="" />
                                        <span>2022-10-20</span>
                                        <h5 style={{ textAlign: "left", padding: "10px" }}>文章標題文章標題文章標題文章標題</h5>
                                        <a href="/" className="btn btn-sm btn-success">閱讀更多</a>
                                    </div>
                                </SwiperSlide> */}
                            </Swiper>
                        </div>
                    </div>
                    {/* 大標：：合作夥伴 Partners */}
                    <div className="col-12" style={{ height: "400px", alignItems: "center", background: `url(${partnerBG})`, backgroundPosition: "top" }}>
                        <h1 style={{ textAlign: "center" }}>合作夥伴 Partners</h1>
                        <br /><br /><br /><br />
                        <marquee><img src={logo_01} alt="合作夥伴" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={logo_02} alt="合作夥伴" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={logo_03} alt="合作夥伴" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={logo_04} alt="合作夥伴" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={logo_05} alt="合作夥伴" /></marquee>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default myHome;