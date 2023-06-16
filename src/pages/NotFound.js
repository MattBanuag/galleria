import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function NotFound() {
  return (
    <>
    <HelmetProvider>
        <Helmet>
          <title>Not Found</title>
        </Helmet>
    </HelmetProvider>   

    <section className="h-[50vh] flex justify-center items-center">
        <article className="flex flex-col justify-center 
        items-center gap-6">
            <h2 className="text-7xl">
                NOT FOUND <i className="fa-solid 
                fa-face-sad-tear text-yellow-400 text-8xl"></i>
            </h2>

            <p className="text-4xl">
                Sorry, the resource you were looking
                for was not found.
            </p>

            <Link to="/galleria" className="underline">Back to home</Link>
        </article>
    </section>
    </>
  )
}

export default NotFound;