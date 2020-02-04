import React, { useEffect } from 'react';
import { motion } from "framer-motion";

import { CSSProperties } from '@material-ui/styles';
import VisibilitySensor from 'react-visibility-sensor';
import { useInView } from 'react-intersection-observer'

import AOS from 'aos';

const App = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })

        console.log("Z")
    }, []);

    const bodyStyle = {
        height: 3000,
        background: 'linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)',
        padding: 0,
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    } as CSSProperties;

    // const itemStyle = {
    //     background: 'white',
    //     borderRadius: '30px',
    //     width: '150px',
    //     height: '150px',
    //     marginTop: '25px'
    // } as CSSProperties;

    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }

    const itemStyle = {
        width: '200px',
        height: '200px',
        margin: '50px auto',
        paddingTop: '75px',
        background: 'rgba(255,85,0, .7)',
        textAlign: 'center',
        color: '#4E4C48',
        fontSize: '1.5em',
    } as CSSProperties;

    return (
        // <div style={bodyStyle}>
        //     <motion.div style={itemStyle} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
        //     <VisibilitySensor>
        //         {({ isVisible }) => 
        //             <motion.div animate={{ opacity: isVisible ? 1 : 0 }} variants={item} style={itemStyle} />
        //         }

        //     </VisibilitySensor>

        //     <div data-aos="fade-up" style={itemStyle}></div>


        // </div>
        <>
            <a href="https://css-tricks.com/aos-css-driven-scroll-animation-library/">https://css-tricks.com/aos-css-driven-scroll-animation-library/</a>

            <a href="https://github.com/michalsnik/aos">https://github.com/michalsnik/aos</a>
            <h1>AOS Animate On Scroll Library</h1>
            <a href="https://michalsnik.github.io/aos/">https://michalsnik.github.io/aos/</a>
            <h1>FADE</h1>
            <div style={itemStyle} data-aos="fade-up" data-aos-anchor-placement="top-center">fade-up</div>
            <div style={itemStyle} data-aos="fade-down">fade-down</div>
            <div style={itemStyle} data-aos="fade-right">fade-right</div>
            <div style={itemStyle} data-aos="fade-left">fade-left</div>
            <div style={itemStyle} data-aos="fade-up-right">fade-up-right</div>
            <div style={itemStyle} data-aos="fade-up-left">fade-up-left</div>
            <div style={itemStyle} data-aos="fade-down-right">fade-down-right</div>
            <div style={itemStyle} data-aos="fade-down-left">fade-down-left</div>

            <h1>FLIP</h1>
            <div style={itemStyle} data-aos="flip-left">flip-left</div>
            <div style={itemStyle} data-aos="flip-right">flip-right</div>
            <div style={itemStyle} data-aos="flip-up">flip-up</div>
            <div style={itemStyle} data-aos="flip-down">flip-down</div>

            <h1>ZOOM</h1>
            <div style={itemStyle} data-aos="zoom-in">zoom-in</div>
            <div style={itemStyle} data-aos="zoom-in-up">zoom-in-up</div>
            <div style={itemStyle} data-aos="zoom-in-down">zoom-in-down</div>
            <div style={itemStyle} data-aos="zoom-in-left">zoom-in-left</div>
            <div style={itemStyle} data-aos="zoom-in-right">zoom-in-right</div>
            <div style={itemStyle} data-aos="zoom-out">zoom-out</div>
            <div style={itemStyle} data-aos="zoom-out-up">zoom-out-up</div>
            <div style={itemStyle} data-aos="zoom-out-down">zoom-out-down</div>
            <div style={itemStyle} data-aos="zoom-out-right">zoom-out-right</div>
            <div style={itemStyle} data-aos="zoom-out-left">zoom-out-left</div>

            <h1>DIFFERENT SETTINGS EXAMPLES</h1>
            <div style={itemStyle} data-aos="fade-up" data-aos-duration="3000">fade-up</div>
            <div style={itemStyle} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">fade-down linear</div>
            <div style={itemStyle} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">fade-right</div>
            <div style={itemStyle} data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">fade-left</div>
            <div style={itemStyle} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">fade-zoom-in</div>
            <div style={itemStyle} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">flip-left</div>

            <h1>ANCHOR PLACEMENT</h1>
            <div style={itemStyle} data-aos="fade-up" data-aos-anchor-placement="top-bottom">fade-up top-bottom</div>
            <div style={itemStyle} data-aos="fade-up" data-aos-anchor-placement="center-bottom">fade-up center-bottom</div>
            <div style={itemStyle} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">fade-up bottom-bottom</div>
            <div style={itemStyle} data-aos="fade-up" data-aos-anchor-placement="top-center">fade-up top-center</div>
            <div style={itemStyle} data-aos="fade-up" data-aos-anchor-placement="center-center">fade-up center-center</div>
            <div style={itemStyle} data-aos="fade-up" data-aos-anchor-placement="bottom-center">fade-up bottom-center</div>

        </>
    );
};


export default App;