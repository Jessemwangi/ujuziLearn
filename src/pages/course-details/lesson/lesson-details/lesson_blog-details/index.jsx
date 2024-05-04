import React from 'react';
import BlogDetailsArea from './blog-details-area';
import BreadcrumbThree from '../../../../../components/breadcrumb/breadcrumb-3';
import { Footer, Header } from '../../../../../layout';


const index = ({blog}) => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="Lesson Details" subtitle="Lets Learn" />
                <BlogDetailsArea blog={blog}/>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;