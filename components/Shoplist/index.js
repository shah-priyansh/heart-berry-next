import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Productcardlist from '../Productcardlist'
import { Sortby, Popularity, Average_Rating, Latest, Cancer_Medicines, Hepatitis_A, Hepatitis_B, Hepatitis_C, Hepatitis_Medicines, Hiv, Rheumatology, Uncategorized } from '../../constant/shop/data'

export default function Productlist() {

    const [selectedValue, setSelectedValue] = useState('1');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const totalProducts = (() => {
        switch (selectedValue) {
            case '1':
                return Sortby.length;
            case '2':
                return Popularity.length;
            case '3':
                return Average_Rating.length;
            case '4':
                return Latest.length;
            case '5':
                return Cancer_Medicines.length;
            case '6':
                return Hepatitis_A.length;
            case '7':
                return Hepatitis_B.length;
            case '8':
                return Hepatitis_C.length;
            case '9':
                return Hepatitis_Medicines.length;
            case '10':
                return Hiv.length;
            case '11':
                return Rheumatology.length;
            case '12':
                return Uncategorized.length;
            // ... (repeat for other cases)
            // default:
            //   return Sortby.length;
        }
    })();

    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleSelectChange = (event) => {
        const newSelectedValue = event.target.value;

        if (newSelectedValue !== selectedValue) {
            setSelectedValue(newSelectedValue);
            setCurrentPage(1);
        }
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;


    const currentProducts = (() => {
        switch (selectedValue) {
            case '1':
                return Sortby.slice(indexOfFirstProduct, indexOfLastProduct);
            case '2':
                return Popularity.slice(indexOfFirstProduct, indexOfLastProduct);
            case '3':
                return Average_Rating.slice(indexOfFirstProduct, indexOfLastProduct);
            case '4':
                return Latest.slice(indexOfFirstProduct, indexOfLastProduct);
            case '5':
                return Cancer_Medicines.slice(indexOfFirstProduct, indexOfLastProduct);
            case '6':
                return Hepatitis_A.slice(indexOfFirstProduct, indexOfLastProduct);
            case '7':
                return Hepatitis_B.slice(indexOfFirstProduct, indexOfLastProduct);
            case '8':
                return Hepatitis_C.slice(indexOfFirstProduct, indexOfLastProduct);
            case '9':
                return Hepatitis_Medicines.slice(indexOfFirstProduct, indexOfLastProduct);
            case '10':
                return Hiv.slice(indexOfFirstProduct, indexOfLastProduct);
            case '11':
                return Rheumatology.slice(indexOfFirstProduct, indexOfLastProduct);
            case '12':
                return Uncategorized.slice(indexOfFirstProduct, indexOfLastProduct);
            // ... (repeat for other cases)
            // default:
            //   return Sortby.slice(indexOfFirstProduct, indexOfLastProduct);
        }
    })();

    // Conditionally render the pagination based on the total number of products
    const renderPagination = totalProducts > productsPerPage && (
        <nav aria-label="Page navigation" className="mt-6">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <Link className="page-link" href="" onClick={() => handlePageChange(currentPage - 1)}>
                        Previous
                    </Link>
                </li>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                        <Link className="page-link" href="" onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </Link>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <Link className="page-link" href="" onClick={() => handlePageChange(currentPage + 1)}>
                        Next
                    </Link>
                </li>
            </ul>
        </nav>
    );


    useEffect(() => {
        const script = document.createElement("script");
        script.src = "assets/js/theme-script.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div className="page-wrapper">
                <section className="page-title parallaxie" data-bg-img="assets/images/bg/06.jpeg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="white-bg p-md-5 p-3 d-inline-block">
                                    <h1 className="text-theme">Product <span className="text-black">List</span></h1>
                                    <nav aria-label="breadcrumb" className="page-breadcrumb border-top border-light pt-3 mt-3">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/"><i className="las la-home me-1"></i>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item">Shop
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Product List</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="page-content">

                    {/* <!--product list start--> */}

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 col-md-12 order-lg-12">
                                    <div className="row mb-4 align-items-center">
                                        <div className="col-md-5 mb-3 mb-md-0"> <span className="text-muted">Showing 1–12 of 40 results</span>
                                        </div>
                                        <div className="col-md-7 d-flex align-items-center justify-content-md-end">
                                            <div className="view-filter"> <Link href="/shop"><i className="lab la-buromobelexperte"></i></Link>
                                                <Link className="active" href="/shoplist"><i className="las la-list"></i></Link>
                                            </div>
                                            <div className="sort-filter ms-2 d-flex align-items-center">
                                                <select className="form-select" onChange={handleSelectChange} value={selectedValue}>
                                                    <option value="1">Sort By</option>
                                                    <option value="2">popularity</option>
                                                    <option value="3">Average Rating</option>
                                                    <option value="4">Latest</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {selectedValue === '1' && (
                                            <>
                                                <div>
                                                    <Productcardlist productcardlist={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '2' && (
                                            <>
                                                <div>
                                                    <Productcardlist productcardlist={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '3' && (
                                            <>
                                                <div>
                                                    <Productcardlist productcardlist={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '4' && (
                                            <>
                                                <div>
                                                    <Productcardlist productcardlist={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '5' && (
                                            <>
                                                <div>
                                                    <Productcardlist productcardlist={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '6' && (
                                            <>
                                                <div>
                                                    <Productcardlist productcardlist={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '7' && (
                                            <>
                                                <div>
                                                    <Productcardlist productcardlist={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '8' && (
                                            <>
                                                <div>
                                                    <Productcardlist productcardlist={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '9' && (
                                            <>
                                                <div>
                                                    <Productcardlist productcardlist={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '10' && (
                                            <>
                                                <div>
                                                    <Productcardlist productcardlist={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '11' && (
                                            <>
                                                <div>
                                                    <Productcardlist productcardlist={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '12' && (
                                            <>
                                                <div>
                                                    <Productcardlist productcardlist={currentProducts} />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    {/* <Productcardlist productcardlist={Sortby} /> */}
                                    {/* <nav aria-label="Page navigation" className="mt-6">
                                        <ul className="pagination">
                                            <li className="page-item"><Link className="page-link" href="">Previous</Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" href="">1</Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" href="">2</Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" href="">3</Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" href="">Next</Link>
                                            </li>
                                        </ul>
                                    </nav> */}
                                    {renderPagination}
                                </div>
                                <div className="col-lg-3 col-md-12 sidebar mt-6 mt-lg-0 order-lg-1">
                                    <div className="widget product-categories widget-categories mb-4 p-4 border">
                                        <h4 className="widget-title mb-3">Categories</h4>
                                        <ul className="list-unstyled list-group list-group-flush flex flex-column gap-2">
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="5" className="text-black cursor-pointer" href="">
                                                    Cancer Medicines
                                                    <span className="ms-1">(12)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="6" className="text-black cursor-pointer" href="">
                                                    Hepatitis - A
                                                    <span className="ms-1">(15)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="7" className="text-black cursor-pointer" href="">
                                                    Hepatitis - B
                                                    <span className="ms-1">(9)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="8" className="text-black cursor-pointer" href="">
                                                    Hepatitis - C
                                                    <span className="ms-1">(5)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="9" className="text-black cursor-pointer" href="">
                                                    Hepatitis Medicines
                                                    <span className="ms-1">(5)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="10" className="text-black cursor-pointer" href="">
                                                    Hiv
                                                    <span className="ms-1">(5)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="11" className="text-black cursor-pointer" href="">
                                                    Rheumatology
                                                    <span className="ms-1">(5)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="12" className="text-black cursor-pointer" href="">
                                                    Uncategorized
                                                    <span className="ms-1">(5)</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget product-categories widget-categories mb-4 p-4 border">
                                        <h4 className="widget-title mb-3">Populer Product</h4>
                                        <div className="row align-items-center mb-4">
                                            <div className="col-sm-4">
                                                <img src="assets/images/product/01.jpeg" className="img-fluid" alt="..." />
                                            </div>
                                            <div className="col-sm-8">
                                                <h5 className="h6">
                                                    <Link href="/productdetails">Dealistic Microscope</Link>
                                                </h5>
                                                <div className="mt-1"> <span className="product-price"><del className="text-muted">$112.00</del> $95.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mb-4">
                                            <div className="col-sm-4">
                                                <img src="assets/images/product/03.jpeg" className="img-fluid" alt="..." />
                                            </div>
                                            <div className="col-sm-8">
                                                <h5 className="h6">
                                                    <Link href="/productdetails">Blood Test Tubes</Link>
                                                </h5>
                                                <div className="mt-1"> <span className="product-price"><del className="text-muted">$85.00</del> $74.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-sm-4">
                                                <img src="assets/images/product/04.jpeg" className="img-fluid" alt="..." />
                                            </div>
                                            <div className="col-sm-8">
                                                <h5 className="h6">
                                                    <Link href="/productdetails">Stethoscope</Link>
                                                </h5>
                                                <div className="mt-1"> <span className="product-price"><del className="text-muted">$55.00</del> $42.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget widget-price mb-4 p-4 border">
                                        <h4 className="widget-title mb-3">Price</h4>
                                        <div className="form-check mb-2">
                                            <input type="checkbox" className="form-check-input" id="priceCheck1" />
                                            <label className="form-check-label" for="priceCheck1">$10 - $100</label>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input type="checkbox" className="form-check-input" id="priceCheck2" />
                                            <label className="form-check-label" for="priceCheck2">$100 - $200</label>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input type="checkbox" className="form-check-input" id="priceCheck3" />
                                            <label className="form-check-label" for="priceCheck3">$200 - $300</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="priceCheck4" />
                                            <label className="form-check-label" for="priceCheck4">$300 - $400</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!--product list end--> */}

                </div>
            </div>
        </>
    )
}
