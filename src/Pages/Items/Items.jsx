import React, { useState, useEffect } from 'react';
import Top from '../../Components/Top/Top';
import NevBar from '../../Components/NevBar/NevBar';
import './Items.css';
import data from '../../DataSets/item.json'
export default function Items() {
    return (
        <div>
            <Top />
            <div className='item_conatiner'>
                <div className="filter">

                </div>
                <div className='items'>
                    {data != null ?
                        data.map(function (params) {
                            return <div className="card" style={{ width: '18rem' }}>
                                <img src={params.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{params.title.length>20?params.title.slice(0, 20)+"...":params.title}</h5>
                                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    <span style={{backgroundColor:`${params.rating.rate>3?"Green":"red"}`}} className='ratting'><i class="fa-solid fa-star"></i> {params.rating.rate}</span> [{params.rating.count}]<br />
                                    <b>₹ {params.price}</b><br />
                                    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        })
                        : "searching"}
                </div>
            </div>

            <NevBar />
        </div>
    )
}
