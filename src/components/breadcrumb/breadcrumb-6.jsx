import Link from 'next/link';
import React from 'react';

const BreadcrumbSix = ({ intro_mage,title, page }) => {
    return (
        <div className="edu-breadcrumb-area breadcrumb-style-2 bg-image" style={{backgroundImage:`url(${intro_mage})`}}>
            <div className="container">
                <div className="breadcrumb-inner">
                    <div className="page-title">
                        <h1 className="title">{title}</h1>
                    </div>
                    <ul className="edu-breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className="separator"><i className="icon-angle-right"></i></li>
                        <li className="breadcrumb-item"><a href="#">Courses</a></li>
                        <li className="separator"><i className="icon-angle-right"></i></li>
                        <li className="breadcrumb-item active" aria-current="page">{page}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BreadcrumbSix;