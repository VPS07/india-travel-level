import React, { useRef, useCallback } from 'react';
import IndianMap from '../components/IndianMap';
import DownloadImageBtn from '../components/DownloadImageBtn';
import Nav from '../components/Nav';
import FacebookLogo from '../components/FacebookLogo';
import TwitterLogo from '../components/TwitterLogo';

function Map() {
    const MapRef = useRef(null);

    const handleFacebookShare = useCallback(() => {
        const navUrl = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;
        window.open(navUrl);
    }, [location.search]);

    const handleTwitterShare = useCallback(() => {
        const navUrl = "http://twitter.com/share?text=See%20My%20travel%20Map%20of%20India%20-&url=" + window.location.href;
        window.open(navUrl);
    }, [location.search]);

    return (
        <>
            <Nav />
            <section ref={MapRef}><IndianMap /></section>
            <section className='btn-container'>
                <DownloadImageBtn MapRef={MapRef} />
                <button className='btn fb-btn' onClick={handleFacebookShare}>
                    <FacebookLogo /> share
                </button>
                <button className='btn twitter-btn' onClick={handleTwitterShare}>
                    <TwitterLogo /> share
                </button>
            </section>
            <section className='footer'>
                <div>Made with ❤ in India by <a href="https://twitter.com/vps05" target='_blank'>vps</a>.</div>
                <div>
                    Source code of project is available <a href="https://github.com/VPS07/india-travel-level" target='_blank'>here</a> and highly inspired by this <a href="https://www.my-philippines-travel-level.com/map" target='_blank'>project</a>.</div>
            </section>
        </>
    )
}

export default Map