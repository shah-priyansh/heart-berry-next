import React, { useState, useEffect } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading, you might replace this with actual data fetching logic
        const fetchData = async () => {
            // Your data fetching logic here
            // For example, using a setTimeout to simulate loading
            await new Promise(resolve => setTimeout(resolve, 1000));

            // After loading is done, set loading to false
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <>

            {loading ? (
                // Render preloader while loading is true
                <div id="ht-preloader">
                <div className="clear-loader d-flex align-items-center justify-content-center">
                    <div className="loader">
                        <span className="plus"></span>
                        <span className="plus"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            </div>
            ) : (<div></div>)}
            
        </>
    )
}
