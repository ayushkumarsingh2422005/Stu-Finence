import React, { useState, useEffect } from 'react';
import Top from '../../Components/Top/Top';
import NevBar from '../../Components/NevBar/NevBar';
import './Items.css';
import data from '../../DataSets/item.json';
import { motion } from "framer-motion";
import { Redirect, redirect } from 'react-router-dom';
export default function Items() {
    // const history = useHistory();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    return (
        <div>
            <Top />
            <div className='item_conatiner'>
                <div class="container">
                    <div class="filter">
                        <h3>Filter Options</h3>
                        <form>
                            <div class="form-group">
                                <label for="category">Category:</label>
                                <select id="category" onChange={handleCategoryChange}>
                                    <option value="all">All Categories</option>
                                    <option value="men's clothing">men's clothing</option>
                                    <option value="jewelery">jewelery</option>
                                    <option value="electronics">electronics</option>
                                    <option value="women's clothing">women's clothing</option>
                                    {/* <!-- Add more categories as needed --> */}
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="priceRange">Price Range:</label>
                                <input type="range" id="priceRange" min="0" max="1000" />
                                <span id="priceOutput">0</span>
                            </div>

                            <div class="form-group">
                                <label>Brand:</label>
                                <div class="brand-checkbox">
                                    <label for="brand1"><input type="checkbox" id="brand1" /> Brand 1</label>
                                </div>
                                <div class="brand-checkbox">
                                    <label for="brand2"><input type="checkbox" id="brand2" /> Brand 2</label>
                                </div>
                                {/* <!-- Add more brand checkboxes as needed --> */}
                            </div>

                            <button type="button" onclick="applyFilter()">Apply Filters</button>
                        </form>
                    </div></div>
                <div className='items'>
                    {data != null ?
                        data.map(function (params) {
                            if (selectedCategory === "all") {
                                return <motion.div
                                    initial={{ opacity: 0, x: 50 - (Math.random() * 100), y: 50 - (Math.random() * 100) }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="card" style={{ width: '18rem' }}
                                // onClick={() => {
                                //     return redirect("/home/" + params.id);
                                // }}
                                >
                                    <img src={params.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{params.title.length > 20 ? params.title.slice(0, 20) + "..." : params.title}</h5>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        <span style={{ backgroundColor: `${params.rating.rate > 3 ? "Green" : "red"}` }} className='ratting'><i class="fa-solid fa-star"></i> {params.rating.rate}</span> [{params.rating.count}]<br />
                                        <b>₹ {params.price}</b><br />
                                        {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </motion.div>
                            } else {
                                if (selectedCategory === params.category) {
                                    return <motion.div
                                        initial={{ opacity: 0, x: 50 - (Math.random() * 100), y: 50 - (Math.random() * 100) }}
                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="card" style={{ width: '18rem' }}
                                    // onClick={() => {
                                    //     return redirect("/home/" + params.id);
                                    // }}
                                    >
                                        <img src={params.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{params.title.length > 20 ? params.title.slice(0, 20) + "..." : params.title}</h5>
                                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                            <span style={{ backgroundColor: `${params.rating.rate > 3 ? "Green" : "red"}` }} className='ratting'><i class="fa-solid fa-star"></i> {params.rating.rate}</span> [{params.rating.count}]<br />
                                            <b>₹ {params.price}</b><br />
                                            {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                                        </div>
                                    </motion.div>
                                }
                            }

                        })
                        : "searching"}
                </div>
            </div >

            <NevBar />
        </div >
    )
}
