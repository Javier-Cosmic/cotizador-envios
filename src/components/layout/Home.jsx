import React, { useContext } from 'react';
import Form from './Form';
import Spinner from './Spinner';
import Context from '../context/Context';
import ShowData from './ShowData';

const Home = () => {
    const GlobalContext = useContext(Context);
    const { shippingdata, loading, backHome } = GlobalContext;
    const { data, value } = shippingdata;

    return (
        <main className='container'>
            <div className='box'>
                
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        {data ? (
                            <ShowData 
                                shippingdata={data} 
                                valuetotal={value} 
                                backHome={backHome}
                            />
                        ) : <Form />}
                    </>
                )}
            </div>
        </main>
    );
};

export default React.memo(Home);
