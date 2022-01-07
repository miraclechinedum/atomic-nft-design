import Link from "next/link";
import NewsLetter from "./NewsLetter";
import { Phone, Email } from "../Common/ContactInfo";
import "./index.scss";

export default () => {
  return (
    <footer class="bg-dark text-center text-white">
      {/* <!-- Grid container --> */}
      <div class="container p-4">
        {/* <!-- Section: Social media --> */}
        <section class="mb-4">
          {/* <!-- Facebook --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-facebook-f"></i
          ></a>
    
          {/* <!-- Twitter --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-twitter"></i
          ></a>
    
          {/* <!-- Google --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-google"></i
          ></a>
    
          {/* <!-- Instagram --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-instagram"></i
          ></a>
    
          {/* <!-- Linkedin --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-linkedin-in"></i
          ></a>
    
          {/* <!-- Github --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-github"></i
          ></a>
        </section>
        {/* <!-- Section: Social media --> */}
    
        {/* <!-- Section: Form --> */}
        <section class="">
          <form action="">
            {/* <!--Grid row--> */}
            <div class="row d-flex justify-content-center">
              {/* <!--Grid column--> */}
              <div class="col-auto">
                <p class="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              {/* <!--Grid column--> */}
    
              {/* <!--Grid column--> */}
              <div class="col-md-5 col-12">
                {/* <!-- Email input --> */}
                <div class="form-outline form-white mb-4">
                  <input type="email" id="form5Example21" class="form-control" />
                  <label class="form-label" for="form5Example21">Email address</label>
                </div>
              </div>
              {/* <!--Grid column--> */}
    
              {/* <!--Grid column--> */}
              <div class="col-auto">
                {/* <!-- Submit button --> */}
                <button type="submit" class="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </form>
        </section>
        {/* <!-- Section: Form --> */}
    
        {/* <!-- Section: Text --> */}
        <section class="mb-4">
          <p>
          DongCoin is a one stop solution for creating, trading and buying / selling NFTs that is already used by hundreds of thousands of loyal users.
          </p>
        </section>
        {/* <!-- Section: Text --> */}
    
        {/* <!-- Section: Links --> */}
        <section class="">
          {/* <!--Grid row--> */}
          <div class="row">
            {/* <!--Grid column--> */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>
    
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 4</a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
    
            {/* <!--Grid column--> */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>
    
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 4</a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
    
            {/* <!--Grid column--> */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>
    
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 4</a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
    
            {/* <!--Grid column--> */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>
    
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 4</a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </section>
        {/* <!-- Section: Links --> */}
      </div>
      {/* <!-- Grid container --> */}
    
      {/* <!-- Copyright --> */}
      {/* style={{backgroundColor: rgba(0, 0, 0, 0.2),}} */}
      <div class="text-center p-3">
        © 2020 Copyright:
        <a class="text-white" href="https://miraclechinedum.herokuapp.com/">Dongcoin.com</a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

const NavigateLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" }
];

const SchemesLinks = [
  { label: "Link 1", href: "" },
  { label: "Link 2", href: "" },
  { label: "Link 3", href: "" }
];
