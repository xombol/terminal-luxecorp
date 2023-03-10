import React, {useRef, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import axios from "axios";
import success_svg from '../../img/succes.svg'


const url = 'https://crm.luxecorp.ru/rest/11/21bsiihddg74i98b/crm.lead.add.json';

export const RequestPage = () => {

    const location = useLocation()
    const {data} = location.state;
    const {link} = location.state;

    const [success, setSuccess] = useState(false);
    const [lang, setLang] = useState(false);
    const [inputs, setInputs] = useState({});
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [layoutName, setLayoutName] = useState("default");
    const [inputName, setInputName] = useState("firstName");

    const keyboard = useRef();

    const onChangeAll = inputs => {
        setInputs({...inputs});

        if ((inputName === "firstName") && (errorName === true)) {
            setErrorName(false)
        }
        if ((inputName === "phone") && (errorPhone === true)) {
            setErrorPhone(false)
        }
    };

    const handleShift = () => {
        const newLayoutName = layoutName === "default" ? "shift" : "default";
        setLayoutName(newLayoutName);
    };

    const changeLang = () => {
        setLang(!lang);
    };

    const onKeyPress = button => {
        if (button === "{shift}" || button === "{lock}") handleShift();
        if (button === "{ru}" || button === "{en}") changeLang();


    };

    const onChangeInput = event => {
        const inputVal = event.target.value;


        setInputs({
            ...inputs,
            [inputName]: inputVal
        });

        keyboard.current.setInput(inputVal);
    };

    const getInputValue = inputName => {
        return inputs[inputName] || "";
    };


    const sendForm = (event) => {
        event.preventDefault();
        let phone_er = false;
        let name_er = false;


        if ((Object.keys(inputs).includes('firstName') === false) || (inputs.firstName === '')) {
            setErrorName(true);
            phone_er = true;
        }

        if ((Object.keys(inputs).includes('phone') === false) || (inputs.phone === '')) {
            setErrorPhone(true);
            name_er = true;
        }

        if ((errorName === true) || (errorPhone === true)) {
            return;
        }
        if ((phone_er === true) || (name_er === true)) {
            return;
        }


        const data_axios = {
            fields: {
                TITLE: '????????????????',
                NAME: inputs.firstName,
                ASSIGNED_BY_ID: 73,
                UF_CRM_1673272017132: data.name,
                EMAIL: [{
                    VALUE: inputs.email,
                    VALUE_TYPE: "WORK",
                }],
                PHONE: [{
                    VALUE: inputs.phone,
                    VALUE_TYPE: "WORK",
                }],
                WEB: [{
                    VALUE: "https://terminal.luxecorp.ru" + link,
                    VALUE_TYPE: "WORK",
                }],
                params: {
                    REGISTER_SONET_EVENT: "Y",
                },
                COMMENTS: "???????????? https://terminal.luxecorp.ru" + link + " -  " + data.name,
            }


        }


        axios.post(url, data_axios)
            .then(res => {
                const data_res = res.data;
                if (data_res.result) {
                    setSuccess(true)

                    setTimeout(() => {
                        setSuccess(false)
                        setInputs({
                            phone: '',
                            firstName: '',
                            email: '',
                        })
                    }, 5000);
                }

            })

    }

    const en = {

        default: [
            "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "q w e r t y u i o p [ ] \\",
            "{lock} a s d f g h j k l ; '",
            "{shift} z x c v b n m , . / {shift}",
            "{ru} {space} @"
        ],
        shift: [
            "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
            " Q W E R T Y U I O P { } |",
            '{lock} A S D F G H J K L : "',
            "{shift} Z X C V B N M < > ? {shift}",
            "{ru} {space} @"
        ],

    };
    const ru = {
        default: [
            "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            " ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? [ ] \\",
            "{lock} ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ; '",
            "{shift} ?? ?? ?? ?? ?? ?? ?? ?? ?? , . / {shift}",
            "{en} {space} @"
        ],
        shift: [
            "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
            " ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? { } |",
            '{lock} ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? : "',
            "{shift} ?? ?? ?? ?? ?? ?? ?? ?? ?? < > ? {shift}",
            "{en} {space} @"
        ]

    };


    return (
        <>
            <section className="container start">

                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="left-info">


                            <h2>
                                <Link to={link}>
                                    <i className="bi bi-arrow-bar-left"></i>

                                    <span className={"mx-3"}></span>
                                    ?????????????????? ??????????
                                </Link>
                            </h2>

                            <h4 className={"text-center mt-5"}>{data.name}</h4>
                            <p className='priceFeedback'>????????: {data.price}</p>
                            <div dangerouslySetInnerHTML={{__html: data.description}}/>
                        </div>

                    </div>
                    <div className='col-lg-6 position-relative'>
                        <form>
                            <h4>???????????? ???? ????????????????????????</h4>
                            <p>?????????????????? ???????????? ?? ???????????????????????? ???????????????? ???????????????? <br/> ?? ???????? ?????? ?????????????????? ????????????????????
                            </p>
                            <div className='row'>
                                <div className='col-lg-8'>
                                    <label>?????? ?????? ??????????? *</label>
                                    <input
                                        value={getInputValue("firstName")}
                                        onFocus={() => setInputName("firstName")}
                                        onChange={onChangeInput}
                                        type="text"
                                        name="Name"
                                        className={`form-control  ${errorName ? 'is-invalid' : null}`}
                                        required
                                        placeholder="????????????????: ????????"/>
                                </div>
                                <div className='col-lg-8'>
                                    <label>???????????????????? ??????????????: *</label>
                                    <input
                                        value={getInputValue("phone")}
                                        onFocus={() => setInputName("phone")}
                                        onChange={onChangeInput}
                                        type="tel"
                                        name="Phone"
                                        required
                                        className={`form-control  ${errorPhone ? 'is-invalid' : null}`}
                                        placeholder="????????????????: +7 8412 329 565"/>

                                </div>
                                <div className='col-lg-8'>
                                    <label>?????????????????????? ??????????: (???? ??????????????????????)</label>
                                    <input
                                        value={getInputValue("email")}
                                        onFocus={() => setInputName("email")}
                                        onChange={onChangeInput}
                                        type="email"
                                        name="Email"
                                        className='form-control'
                                        placeholder="????????????????: info@luxecorp.ru"/>
                                </div>
                                <p className='policy'>
                                    ?????????????????? ???????????? ?????????? ???? ???????????????????????? ?? ??????????????????
                                    ????????????????????????????????????
                                </p>
                                <div className='col-lg-8'>
                                    <button type='sumbit' onClick={sendForm} className='btn'>???????????????? ????????????</button>
                                </div>
                            </div>


                        </form>
                        <div className={`success_form ${!success ? 'd-none' : null}`}>
                            <img src={success_svg} alt={"1"} className={"img_success"}/>
                            <h1>{inputs.firstName}, ???? ?????????????? ?????????????? ???????? ????????????.</h1>
                            <p> ???????????? ?????? ???????????????? ?? ???????? ????????????????!</p>
                            <p>???????? ?????????? ?????????????? ?????????? 5 ??????.</p>

                        </div>
                    </div>
                </div>
                <div className="div" style={{height: "400px"}}></div>

            </section>


            <div className="keyboard">
                <Keyboard
                    keyboardRef={r => (keyboard.current = r)}
                    layoutName={layoutName}
                    inputName={inputName}
                    layout={lang ? en : ru}
                    onChangeAll={onChangeAll}
                    onKeyPress={onKeyPress}
                    buttonTheme={[
                        {
                            class: "blue_btn",
                            buttons: "{ru} {en}"
                        }
                    ]}
                    display={
                        {
                            '{bksp}': '??????????????',
                            '{ru}': '??????????????',
                            '{en}': '????????????????????',
                            '{lock}': '????????',
                            '{shift}': 'SHIFT ^',
                            '{space}': '????????????',
                        }
                    }
                />
            </div>
        </>
    )
}
