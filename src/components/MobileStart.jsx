import React from "react";
import { startText } from "../constants";
import { Link } from "react-router-dom";



const MobileStart = () => {

    return (
        <>
            <section className="mobileStart">
                <div className="mobileStart__title">{startText.title}</div>
                <div className="mobileStart__subtitle">{startText.subTitle}</div>
                <div className="mobileStart__agreeChecks">
                    <div className="mobileStart__agreeCheck">
                        <div className="mobileStart__icon">
                            <img src={startText.img[0]} alt="" />
                        </div>
                        <div className="mobileStart__text">
                            <div>{startText.checkText[0].check_title}</div>
                            <div>{startText.checkText[0].check_info}</div>
                        </div>
                    </div>
                    <div className="mobileStart__agreeCheck">
                        <div className="mobileStart__icon">
                            <img src={startText.img[1]} alt="" />
                        </div>
                        <div className="mobileStart__text">
                            <div>{startText.checkText[1].check_title}</div>
                            <div>{startText.checkText[1].check_info}</div>
                        </div>
                    </div>
                    <div className="mobileStart__agreeCheck">
                        <div className="mobileStart__icon">
                            <img src={startText.img[2]} alt="" />
                        </div>
                        <div className="mobileStart__text">
                            <div>{startText.checkText[2].check_title}</div>
                            <div>{startText.checkText[2].check_info}</div>
                        </div>
                    </div>
                    <div className="mobileStart__agreeCheck">
                        <div className="mobileStart__icon">
                            <img src={startText.img[3]} alt="" />
                        </div>
                        <div className="mobileStart__text">
                            <div>{startText.checkText[3].check_title}</div>
                            <div>{startText.checkText[3].check_info}</div>
                        </div>
                    </div>
                </div>
                <div className="mobileStart__btn">
                    <Link to="/about" className="btn">
                        시작하기
                    </Link>
                </div>
            </section>
        </>
    )
}

export default MobileStart;