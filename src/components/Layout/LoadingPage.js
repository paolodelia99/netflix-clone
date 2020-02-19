import React, {Fragment} from 'react';
import {Spinner} from 'reactstrap'

const LoadingPage = () => {
    return (
        <Fragment>
            <div style={ {width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}>
                <div style={{
                    margin: 'auto',
                    height:'400px',
                    width: '400px',
                    background: 'none',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Spinner color='danger' style={{ width: '3rem', height: '3rem', margin: 'auto',display: 'block' }} />
                </div>
            </div>
        </Fragment>
    );
};

export default LoadingPage;