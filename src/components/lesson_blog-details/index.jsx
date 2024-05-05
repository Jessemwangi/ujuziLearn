import React from 'react';
import CourseBlogDetailsArea from './course-blog-details-area';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import { Footer, Header } from '../../layout';


const index = ({lessons, title}) => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title={title} subtitle={title} />
                <CourseBlogDetailsArea lessons={lessons} title={title}/>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;