function Footer() {
    return (
      <footer className="py-10 flex flex-col justify-center
      items-center gap-20 text-center bg-black">
          <div>
              <article className="flex flex-col gap-12">
                  <p className="text-white">
                      Why go to the mall, when you can 
                      go online.
                  </p>
  
                  <ul className="flex justify-center items-center
                  gap-12">
                      <li><a href="">
                          <i className="fa-brands fa-facebook text-2xl 
                          text-white"></i>
                      </a></li>
                      <li><a href="">
                          <i className="fa-brands fa-instagram text-2xl
                          text-white"></i>
                      </a></li>
                      <li><a href="">
                          <i className="fa-brands fa-twitter text-2xl
                          text-white"></i>
                      </a></li>
                      <li><a href="">
                          <i className="fa-brands fa-youtube text-2xl
                          text-white"></i>
                      </a></li>
                      <li><a href="">
                          <i className="fa-brands fa-google text-2xl
                          text-white"></i>
                      </a></li>
                      <li><a href="">
                          <i className="fa-brands fa-yahoo text-2xl
                          text-white"></i>
                      </a></li>
                      <li><a href="">
                          <i className="fa-brands fa-reddit text-2xl
                          text-white"></i>
                      </a></li>
                  </ul>
              </article>
          </div>
          
          <article>
            <h2 className="text-white">
                Copyright &copy; 2023 
            </h2>

            <h2 className="logo-text text-white">
                Galleria
            </h2>
          </article>
      </footer>
    )
  }
  
  export default Footer;