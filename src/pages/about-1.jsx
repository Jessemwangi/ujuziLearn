import SEO from '../components/seo';
import { Wrapper } from '../layout';
import AboutOneMain from '../components/abouts/about-1';
import { useDispatch, useSelector } from 'react-redux';
import { initializeLessons } from '../redux/features/lessons-slice';
import { useEffect } from 'react';

const AboutOne = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeLessons())
      }, [dispatch]);
      let lessonList = useSelector((state) => state.less.lessonsData);
      let isloading = useSelector((state) => state.less.isLoading)
      console.log(lessonList.data)
//   if (isloading) return <>Loading data ................</>data.attributes.description data.attributes.description
      return (
        <Wrapper>
            <SEO pageTitle={'About One'} />
            <AboutOneMain />
        </Wrapper>
    )
}

export default AboutOne;