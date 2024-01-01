import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Productcardlist from '../Productcardlist'
import { Sortby } from '../../constant/shop/data'

export default function Productlist() {

    const [selectedValue, setSelectedValue] = useState('1');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    // Function to filter products based on type
    const getTypeFilteredProducts = (type) => {
        return Sortby.filter((product) => product.type === type);
    };

    const totalProducts = (() => {
        switch (selectedValue) {
            case '1':
                return Sortby.length;
            case '2':
                return getTypeFilteredProducts('popolarity').length;
            case '3':
                return getTypeFilteredProducts('averageratting').length;
            case '4':
                return getTypeFilteredProducts('latest').length;
            case '5':
                return getTypeFilteredProducts('cancermedicines').length;
            case '6':
                return getTypeFilteredProducts('hepatitisA').length;
            case '7':
                return getTypeFilteredProducts('hepatitisB').length;
            case '8':
                return getTypeFilteredProducts('hepatitisC').length;
            case '9':
                return getTypeFilteredProducts('hepatitismedicines').length;
            case '10':
                return getTypeFilteredProducts('hiv').length;
            case '11':
                return getTypeFilteredProducts('rheumatology').length;
            case '12':
                return getTypeFilteredProducts('uncategorized').length;
            // Add cases for other types
            default:
                return Sortby.length;
        }
    })();

    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Handle page change
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    // pegination
    const generatePageNumbers = () => {
        const pageNumbers = [];
        const maxPageNumbers = 4;

        if (totalPages <= maxPageNumbers) {
            // If total pages are less than or equal to 4, show all page numbers
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // If total pages are more than 4
            if (currentPage <= maxPageNumbers - 2) {
                // If current page is close to the beginning
                for (let i = 1; i <= maxPageNumbers - 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else if (currentPage >= totalPages - maxPageNumbers + 3) {
                // If current page is close to the end
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = totalPages - maxPageNumbers + 3; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                // Show pages around the current page
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    // Handle select change for sorting
    const handleSelectChange = (event) => {
        const newSelectedValue = event.target.value;

        if (newSelectedValue !== selectedValue) {
            setSelectedValue(newSelectedValue);
            setCurrentPage(1);
        }
    };

    // Calculate index of first and last product for current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;


    const currentProducts = (() => {
        switch (selectedValue) {
            case '1':
                return Sortby.slice(indexOfFirstProduct, indexOfLastProduct);
            case '2':
                return getTypeFilteredProducts('popolarity').slice(indexOfFirstProduct, indexOfLastProduct);
            case '3':
                return getTypeFilteredProducts('averageratting').slice(indexOfFirstProduct, indexOfLastProduct);
            case '4':
                return getTypeFilteredProducts('latest').slice(indexOfFirstProduct, indexOfLastProduct);
            case '5':
                return getTypeFilteredProducts('cancermedicines').slice(indexOfFirstProduct, indexOfLastProduct);
            case '6':
                return getTypeFilteredProducts('hepatitisA').slice(indexOfFirstProduct, indexOfLastProduct);
            case '7':
                return getTypeFilteredProducts('hepatitisB').slice(indexOfFirstProduct, indexOfLastProduct);
            case '8':
                return getTypeFilteredProducts('hepatitisC').slice(indexOfFirstProduct, indexOfLastProduct);
            case '9':
                return getTypeFilteredProducts('hepatitismedicines').slice(indexOfFirstProduct, indexOfLastProduct);
            case '10':
                return getTypeFilteredProducts('hiv').slice(indexOfFirstProduct, indexOfLastProduct);
            case '11':
                return getTypeFilteredProducts('rheumatology').slice(indexOfFirstProduct, indexOfLastProduct);
            case '12':
                return getTypeFilteredProducts('uncategorized').slice(indexOfFirstProduct, indexOfLastProduct);
            default:
                return Sortby.slice(indexOfFirstProduct, indexOfLastProduct);
        }
    })();

    //  Pegination 
    const renderPagination = totalProducts > productsPerPage && (
        <nav aria-label="Page navigation" className="mt-6">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <Link className="page-link" href="" onClick={() => handlePageChange(currentPage - 1)}>
                        Previous
                    </Link>
                </li>
                {generatePageNumbers().map((pageNumber, index) => (
                    <li key={index} className={`page-item ${pageNumber === '...' ? 'disabled' : ''}`}>
                        <Link
                            className={`page-link ${currentPage === pageNumber ? 'active' : ''}`}
                            href=""
                            onClick={() => handlePageChange(pageNumber)}
                        >
                            {pageNumber}
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
        // Coman JQuery File
        const script = document.createElement("script");
        script.src = "assets/js/theme-script.js";
        script.async = true;
        document.body.appendChild(script);


        // For Pagination
        setCurrentPage(1);

        return () => {
            // ComanJQuery File
            document.body.removeChild(script);
        };
    }, [selectedValue]);

    return (
        <>
        
            <div className="page-wrapper">
                <section className="page-title parallaxie" data-bg-img="assets/images/bg/06.jpeg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="white-bg p-md-5 p-3 d-inline-block">
                                    <h1 className="text-theme">Our <span className="text-black">Product</span></h1>
                                    <nav aria-label="breadcrumb" className="page-breadcrumb border-top border-light pt-3 mt-3">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/"><i className="las la-home me-1"></i>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Shop</li>
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
                                            <div className="view-filter"> <Link href="/medicines"><i className="lab la-buromobelexperte"></i></Link>
                                                <Link className="active" href="/medicineslist"><i className="las la-list"></i></Link>
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
                                    {renderPagination}
                                </div>
                                <div className="col-lg-3 col-md-12 sidebar mt-6 mt-lg-0 order-lg-1">
                                    <div className="widget product-categories widget-categories mb-4 p-4 border">
                                        <h4 className="widget-title mb-3">Categories</h4>
                                        <ul className="list-unstyled list-group list-group-flush flex flex-column gap-2">
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="5" className="list-group-item border-0 p-0 text-black cursor-pointer">
                                                    Cancer Medicines
                                                    <span className="ms-1">(12)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="6" className="list-group-item border-0 p-0 text-black cursor-pointer">
                                                    Hepatitis - A
                                                    <span className="ms-1">(15)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="7" className="list-group-item border-0 p-0 text-black cursor-pointer">
                                                    Hepatitis - B
                                                    <span className="ms-1">(9)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="8" className="list-group-item border-0 p-0 text-black cursor-pointer">
                                                    Hepatitis - C
                                                    <span className="ms-1">(5)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="9" className="list-group-item border-0 p-0 text-black cursor-pointer">
                                                    Hepatitis Medicines
                                                    <span className="ms-1">(5)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="10" className="list-group-item border-0 p-0 text-black cursor-pointer">
                                                    Hiv
                                                    <span className="ms-1">(5)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="11" className="list-group-item border-0 p-0 text-black cursor-pointer">
                                                    Rheumatology
                                                    <span className="ms-1">(5)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="12" className="list-group-item border-0 p-0 text-black cursor-pointer">
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
