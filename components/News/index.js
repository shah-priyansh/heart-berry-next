import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Blog from '../Blog';
import { Newses } from '../../constant/news/data'

export default function News() {
    const [selectedValue, setSelectedValue] = useState('1');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3;

    // Function to filter products based on type
    const getTypeFilteredProducts = (type) => {
        return Newses.filter((product) => product.type === type);
    };

    const totalProducts = (() => {
        switch (selectedValue) {
            case '1':
                return getTypeFilteredProducts('blog').length;
            case '2':
                return getTypeFilteredProducts('computer').length;
            case '3':
                return getTypeFilteredProducts('coronavirus').length;
            case '4':
                return getTypeFilteredProducts('postformat').length;
            case '5':
                return getTypeFilteredProducts('provideassistance').length;
            case '6':
                return getTypeFilteredProducts('uncategorized').length;
            // Add cases for other types
            default:
                return Newses.length;
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
                return getTypeFilteredProducts('blog').slice(indexOfFirstProduct, indexOfLastProduct);
            case '2':
                return getTypeFilteredProducts('computer').slice(indexOfFirstProduct, indexOfLastProduct);
            case '3':
                return getTypeFilteredProducts('coronavirus').slice(indexOfFirstProduct, indexOfLastProduct);
            case '4':
                return getTypeFilteredProducts('postformat').slice(indexOfFirstProduct, indexOfLastProduct);
            case '5':
                return getTypeFilteredProducts('provideassistance').slice(indexOfFirstProduct, indexOfLastProduct);
            case '6':
                return getTypeFilteredProducts('uncategorized').slice(indexOfFirstProduct, indexOfLastProduct);
            default:
                return Newses.slice(indexOfFirstProduct, indexOfLastProduct);
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
                                    <h1 className="text-theme">Latest <span className="text-black">News</span></h1>
                                    <nav aria-label="breadcrumb" className="page-breadcrumb border-top border-light pt-3 mt-3">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/"><i className="las la-home me-1"></i>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">News</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="page-content">
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 mb-6 mb-lg-0 order-lg-1">
                                    <div className=''>
                                        {selectedValue === '1' && (
                                            <>
                                                <div className='d-flex align-items-center flex-column gap-4 blog_content'>
                                                    <Blog blog_data={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '2' && (
                                            <>
                                                <div className='d-flex align-items-center flex-column gap-4 blog_content'>
                                                    <Blog blog_data={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '3' && (
                                            <>
                                                <div className='d-flex align-items-center flex-column gap-4 blog_content'>
                                                    <Blog blog_data={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '4' && (
                                            <>
                                                <div className='d-flex align-items-center flex-column gap-4 blog_content'>
                                                    <Blog blog_data={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '5' && (
                                            <>
                                                <div className='d-flex align-items-center flex-column gap-4 blog_content'>
                                                    <Blog blog_data={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                        {selectedValue === '6' && (
                                            <>
                                                <div className='d-flex align-items-center flex-column gap-4 blog_content'>
                                                    <Blog blog_data={currentProducts} />
                                                </div>
                                            </>
                                        )}

                                    </div>
                                    {renderPagination}
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className='d-flex flex-column gap-5'>
                                        <div className="p-4 border">
                                            <form>
                                                <div className="input-group">
                                                    <input className="form-control h-auto" type="search" placeholder="Search Here" aria-label="Search" />
                                                    <button className="btn btn-theme mt-2 my-sm-0" type="submit"><span><i className="las la-search"></i></span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="p-4 border">
                                            <h4 className="mb-3">Categories</h4>
                                            <ul className="list-unstyled list-group list-group-flush flex flex-column gap-1">
                                                <li><Link onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="1" className="list-group-item text-black border-0 py-0" href="">Blog</Link></li>
                                                <li><Link onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="2" className="list-group-item text-black border-0 py-0" href="">Computer</Link></li>
                                                <li><Link onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="3" className="list-group-item text-black border-0 py-0" href="">Coronavirus</Link></li>
                                                <li><Link onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="4" className="list-group-item text-black border-0 py-0" href="">Post Format</Link></li>
                                                <li><Link onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="5" className="list-group-item text-black border-0 py-0" href="">Provide Assistance</Link></li>
                                                <li><Link onClick={(event) => setSelectedValue(event.target.getAttribute("data-value"))} data-value="6" className="list-group-item text-black border-0 py-0" href="">Uncategorized</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>


            </div >
        </>
    )
}
