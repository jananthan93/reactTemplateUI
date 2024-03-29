import React, { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <footer class="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 text-center text-md-left text-primary">
                <p class="mb-2 mb-md-0">Invicta Innovation company &copy; 2019</p>
              </div>
              <div class="col-md-6 text-center text-md-right text-gray-400">
                <p class="mb-0">Design by <a href="#" class="external text-gray-400">INVICTA Devs</a></p>
                
              </div>
            </div>
          </div>
        </footer>
        )
    }
}
export default Footer;