
import React from 'react';

const MapArea = () => {
  return (
    <>
       <div className="map-area-section section-padding pt-0 fix">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <div className="map-area">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.695779059038!2d-73.57916468703354!3d45.496070631189376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a6a21831787%3A0xe0388e9d2de1c2e5!2s1440%20Saint-Catherine%20St%20W%20Unit%20500%2C%20Montreal%2C%20QC%20H3G%201R3!5e0!3m2!1sen!2sca!4v1747971844850!5m2!1sen!2sca" style={{border: "0px"}} allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
            </div>
         </div>
        </div>
    </>
  );
};

export default MapArea;