import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import datas from './ToursData'

function Tours() {
    const [data, setData] = useState(datas)
    const [isLoading, setIsLoading] = useState(true)
    const remove = (id) => {
        let newData = data.filter(items => {
            return items.id !== id
        })

        setData(newData)

    }
    const refreshPage = () => {
        window.location.reload(false);
    }

    useEffect(() => {
        setIsLoading(false)
    }, [])
    if (isLoading) {
        return <h1 className='text-center'>Loading....</h1>
    }
    if (data.length === 0) {
        return (
            <main>
                <div className='title container text-capitalize text-center mt-5'>
                    <h2>no tours left</h2>
                    <button className='btn btn-primary' onClick={refreshPage}>
                        refresh
              </button>
                </div>
            </main>
        )
    }
    return (

        <>
            <section>
                <div className="container w-50">
                    <h2 className='text-capitalize text-center mt-5 '>Our Tours</h2>
                    <div className="line mx-auto mb-5"></div>

                    {data.map(item => {
                        const { url, id, title, info, price } = item
                        return (
                            <div className="card" key={id}>
                                <img className='card-img-top img-thumbnail' src={url} alt="" />
                                <div className="card-body p-3">
                                    <div className="title d-flex justify-content-between ">
                                        <h5 className="card-title mb-2">{title}</h5>
                                        <h6 className="card-title p-1 bg-secondary text-light rounded">${price}</h6>
                                    </div>
                                    <p className="card-text">{info}</p>
                                    <button className="btn btn-outline-danger btn-block text-capitalize" onClick={() => remove(id)}>not interested</button>
                                </div>
                            </div>
                        )
                    })}
                    <h4></h4>
                </div>
            </section>
        </>
    )
}

export default Tours
