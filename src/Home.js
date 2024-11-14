import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import i1 from './images/i1.webp';
import i2 from './images/i2.webp';
import i3 from './images/i3.webp';
import i4 from './images/i4.webp';
import i5 from './images/i5.webp';
import n1 from './images/n1.webp';
import n2 from './images/n2.webp';
import n3 from './images/n3.webp';
import d1 from './images/d1.png';
import o1 from './images/o1.webp';
import o2 from './images/o2.webp';
import o3 from './images/o3.webp';
import z1 from './images/z1.webp';
import z2 from './images/z2.webp';
import z3 from './images/z3.webp';
import z4 from './images/z4.webp';
import z5 from './images/z5.webp';
import z6 from './images/z6.webp';
import z7 from './images/z7.webp';
import z8 from './images/z8.webp';
import x1 from './images/x1.webp';
import x2 from './images/x2.webp';
import x3 from './images/x3.webp';
import u1 from './images/u1.jpeg';
import v1 from './images/v1.avif';
import v2 from './images/v2.avif';
import v3 from './images/v3.avif';
import v4 from './images/v4.avif';
import v5 from './images/v5.avif';
import v6 from './images/v6.avif';
import v7 from './images/v7.avif';
import v8 from './images/v8.avif';
import v9 from './images/v9.avif';
import v10 from './images/v10.avif';
import v11 from './images/v11.avif';
import v12 from './images/v12.avif';
import v13 from './images/v13.avif';
import v14 from './images/v14.avif';
import v15 from './images/v15.avif';
import v16 from './images/v16.avif';
import v17 from './images/v17.avif';
import v18 from './images/v18.avif';
import v19 from './images/v19.avif';
import v20 from './images/v20.avif';
import v21 from './images/v21.avif';
import v22 from './images/v22.avif';
import v23 from './images/v23.avif';
import v24 from './images/v24.avif';
import v25 from './images/v25.avif';
import v26 from './images/v26.avif';
import v27 from './images/v27.avif';
import v28 from './images/v28.avif';
import testimonial from './images/testimonial.jpg';

const Home = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={i1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={i2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={i3} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={i4} className="d-block w-100" alt="Slide 4" />
          </div>
          <div className="carousel-item">
            <img src={i5} className="d-block w-100" alt="Slide 5" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br /><br /><br /><br />
      <h2 style={{ color: 'deeppink', textAlign: 'center' }}>The Bestseller</h2>
      <br />
      <br />
      <br />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
        <div className="card" style={{ width: '25rem' }}>
          <img src={n1} className="card-img-top" alt="Flowers" />
          <div className="card-body">
            <p className="card-text">
              Flowers are an essential part of our lives. They are responsible for bringing happiness in our lives and making our
              surrounding environment a prettier place to live in.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: '25rem', height: '33rem' }}>
          <img src={d1} className="card-img-top" alt="Flowers" style={{ height: '400px' }} />
          <div className="card-body">
            <p className="card-text">
              Flowers are an essential part of our lives. They are responsible for bringing happiness in our lives and making our
              surrounding environment a prettier place to live in.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: '24rem' }}>
          <img src={n3} className="card-img-top" alt="Flowers" />
          <div className="card-body">
            <p className="card-text">
              Flowers are an essential part of our lives. They are responsible for bringing happiness in our lives and making our
              surrounding environment a prettier place to live in.
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <h2 style={{ color: 'deeppink', textAlign: 'center' }}>Petal Perfection</h2><br /><br /><br /><br />
      <div class="card-containers">
        <div class="carde">
          <img src={v13} alt="Image 1" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 1.</p>*/}
          </div>
        </div>

        <div class="carde">
          <img src={v14} alt="Image 2" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 2.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v15} alt="Image 3" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 3.</p> */}
          </div>
        </div>
        <div class="carde">
          <img src={v16} alt="Image 3" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 3.</p> */}
          </div>
        </div>
      </div><br /><br /><br /><br />

      <h2 style={{ color: 'deeppink', textAlign: 'center' }}>Featured Products</h2><br /><br /><br /><br />


      <div style={{ display: 'flex', flexDirection: 'row', gap: '50px', width: '100%' }}>
        <div className="bg-image" style={{ maxWidth: '42rem' }}>
          <img src={o1} className="w-100" alt="Valentino - Bunch" />
          <div className="mask text-light d-flex justify-content-center flex-column text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h4>Valentino - Bunch</h4>
            <p className="m-0"></p>
          </div>
        </div>
        <div className="bg-image" style={{ maxWidth: '42rem' }}>
          <img src={o2} className="w-100" alt="Wild Mix - Classic Cubo" />
          <div className="mask text-light d-flex justify-content-center flex-column text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h4>Wild Mix - Classic Cubo</h4>
            <p className="m-0"></p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <h2 style={{ color: 'deeppink', textAlign: 'center' }}>Cut Flower Bunches</h2><br /><br /><br /><br />
      <div class="containere d-flex align-items-center justify-content-center position-relative flex-wrap">
        <div class="cards d-flex position-relative flex-column">
          <div class='imgContainer'>
            <img src={z1} />
          </div>
          <div class="contente">
            <h4>Flowers</h4>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat.</p>
          </div>
        </div>
        <div class="cards d-flex position-relative flex-column">
          <div class='imgContainer'>
            <img src={z2} />
          </div>
          <div class="contente">
            <h4>Flowers</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat.</p>
          </div>
        </div>
        <div class="cards d-flex position-relative flex-column">
          <div class='imgContainer'>
            <img src={z3} />
          </div>
          <div class="contente">
            <h4>Flowers</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat.</p>
          </div>
        </div>
        <div class="cards d-flex position-relative flex-column">
          <div class='imgContainer'>
            <img src={z4} />
          </div>
          <div class="contente">
            <h4>Flower</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat.</p>
          </div>
        </div>
      </div><br /><br /><br></br>
      <div class="containere d-flex align-items-center justify-content-center position-relative flex-wrap">
        <div class="cards d-flex position-relative flex-column">
          <div class='imgContainer'>
            <img src={z5} />
          </div>
          <div class="contente">
            <h4>Flowers</h4>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat.</p>
          </div>
        </div>
        <div class="cards d-flex position-relative flex-column">
          <div class='imgContainer'>
            <img src={z6} />
          </div>
          <div class="contente">
            <h4>Flowers</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat.</p>
          </div>
        </div>
        <div class="cards d-flex position-relative flex-column">
          <div class='imgContainer'>
            <img src={z7} />
          </div>
          <div class="contente">
            <h4>Flowers</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat.</p>
          </div>
        </div>
        <div class="cards d-flex position-relative flex-column">
          <div class='imgContainer'>
            <img src={z8} />
          </div>
          <div class="contente">
            <h4>Flower</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat.</p>
          </div>
        </div>
      </div><br /><br /><br /><br />
      <h2 style={{ color: 'deeppink', textAlign: 'center' }}>Nature's colorful embrace.</h2><br /><br /><br /><br />
      <div class="card-containers">
        <div class="carde">
          <img src={v13} alt="Image 1" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 1.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v14} alt="Image 2" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 2.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v15} alt="Image 3" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 3.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v16} alt="Image 3" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 3.</p> */}
          </div>
        </div>
      </div><br /><br /><br /><br />

      <div class="card-containers">
        <div class="carde">
          <img src={v17} alt="Image 1" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 1.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v18} alt="Image 2" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 2.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v19} alt="Image 3" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 3.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v20} alt="Image 3" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 3.</p> */}
          </div>
        </div>
      </div><br /><br /><br /><br />



      <h2 style={{ color: 'deeppink', textAlign: 'center' }}>Flower Occasions</h2><br /><br /><br /><br />
      <div style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
        <div>
          <img src={x1} alt="" style={{ opacity: "0.3", width: "400px", height: "400px" }} />
        </div>
        <div>
          <img src={x2} alt="" style={{ opacity: "0.3", width: "400px", height: "400px" }} />
        </div>
        <div>
          <img src={x3} alt="" style={{ opacity: "0.3", width: "400px", height: "400px" }} />
        </div>
      </div><br /><br /><br /><br />
      <h2 style={{ color: 'deeppink', textAlign: 'center' }}>Blossom with Beauty.</h2><br /><br /><br /><br />
      <div class="card-containers">
        <div class="carde">
          <img src={v1} alt="Image 1" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 1.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v2} alt="Image 2" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 2.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v3} alt="Image 3" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 3.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v4} alt="Image 3" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 3.</p> */}
          </div>
        </div>
      </div><br /><br /><br /><br />

      <div class="card-containers">
        <div class="carde">
          <img src={v5} alt="Image 1" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 1.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v6} alt="Image 2" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 2.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v7} alt="Image 3" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 3.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v8} alt="Image 3" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 3.</p> */}
          </div>
        </div>
      </div><br /><br /><br /><br />

      <div class="card-containers">
        <div class="carde">
          <img src={v9} alt="Image 1" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 1.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v10} alt="Image 2" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 2.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v11} alt="Image 3" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 3.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v12} alt="Image 3" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 3.</p> */}
          </div>
        </div>
      </div><br /><br /><br /><br />

      <h2 style={{ color: 'deeppink', textAlign: 'center' }}>The Flower Bunches Tale</h2><br /><br /><br /><br />

      <div className="container my-5">
        <h1 className="mb-4" style={{ color: "darkgreen" }}>Flower categories</h1>
        <hr></hr>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" >
            <img src={n3} className="img-fluid" alt="Wild Crafted & Organic Ingredients" style={{ height: "400px", width: "400px", marginLeft: "50px", marginTop: "50px" }} />
          </div>
          <div className="col-md-6">
            <p className="fs-4">
              Each milestone, each relationship, every kind of bond calls for a unique celebration.<br />
              A celebration of moments and emotions that are just blooming, even celebrating those that have already blossomed.<br />
              For such moments, there are luxury flower arrangements by The Flower Company.<br />
              Aesthetically appealing to the eye, these flower arrangements mark the strength of a bond,<br />
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h1 className="mb-4" style={{ color: "darkgreen", }}>Shop by Categories</h1>
        <hr></hr>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="fs-4">
              Each milestone, each relationship, every kind of bond calls for a unique celebration.<br />
              A celebration of moments and emotions that are just blooming, even celebrating those that have already blossomed.<br />
              For such moments, there are luxury flower arrangements by The Flower Company.<br />
              Aesthetically appealing to the eye, these flower arrangements mark the strength of a bond,<br />

            </p>
          </div>
          <div className="col-md-6 mb-4 mb-md-0" >
            <img src={d1} className="img-fluid" alt="Wild Crafted & Organic Ingredients" style={{ height: "400px", width: "400px", marginLeft: "150px", marginTop: "40px" }} />
          </div>
        </div>
      </div>
      <h2 style={{ color: 'deeppink', textAlign: 'center' }}>Flowers that enchant.</h2><br /><br /><br /><br />

      <div class="card-containers">
        <div class="carde">
          <img src={v21} alt="Image 1" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 1.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v22} alt="Image 2" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 2.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v23} alt="Image 3" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 3.</p> */}
          </div>
        </div>

        <div class="carde">
          <img src={v24} alt="Image 3" class="card-img" />
          <div class="card-contentu">
            <h3 style={{ marginTop: "30px", justifyContent: "Center", display: "flex", fontSize: "20px" }}>Colorful Flowers</h3>
            {/* <p>This is some description for card 3.</p> */}
          </div>
        </div>
      </div><br /><br /><br /><br />
      <h1 style={{ color: 'deeppink', textAlign: 'center' }}>Gifting combo</h1>
      <div className="mt-4 " style={{ display: "flex", flexDirection: "row" }} >{/* Added some margin-top for spacing */}

        <div className="images" style={{ width: '300px', gap: "27px" }}>
          <img src={v25} className="card-img-top rounded-pill" alt="Product" />
          <img src={v26} className="card-img-top  rounded-pill" alt="Product" />
          <img src={v27} className="card-img-top rounded-pill" alt="Product" />
          <img src={v28} className="card-img-top rounded-pill " alt="product" />
        </div>
      </div>
      <div className="end">
        <h4 style={{ textAlign: 'center', color: 'brown', marginTop: '150px' }}>Our Testimonials</h4>
        <h1 style={{ textAlign: 'center', color: 'rgb(87, 83, 83)' }}>Our Client Saying</h1>
      </div>

      <section id="testimonials" className="py-5">
        <div className="container">
          <div className="row">
            {/* Testimonial 1 */}
            <div className="col-md-4 mb-4">
              <div className="testimonial-box">
                <div className="customer-detail mb-3">
                  <div className="customer-photo mb-2">
                    <img src={testimonial} alt="Ross Lee" />
                    <p className="customer-name mt-2 mb-0">Ross Lee</p>
                    <hr />
                  </div>
                </div>
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptas cupiditate aspernatur odit doloribus non.
                </p>
                <div className="star-rating">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="col-md-4 mb-4">
              <div className="testimonial-box">
                <div className="customer-detail mb-3">
                  <div className="customer-photo mb-2">
                    <img src={testimonial} alt="Amelia Watson" />
                    <p className="customer-name mt-2 mb-0">Amelia Watson</p>
                    <hr />
                  </div>
                </div>
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptas cupiditate aspernatur odit doloribus non.
                </p>
                <div className="star-rating">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="col-md-4 mb-4">
              <div className="testimonial-box">
                <div className="customer-detail mb-3">
                  <div className="customer-photo mb-2">
                    <img src={testimonial} alt="Ben Roy" />
                    <p className="customer-name mt-2 mb-0">Ben Roy</p>
                    <hr />
                  </div>
                </div>
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptas cupiditate aspernatur odit doloribus non.
                </p>
                <div className="star-rating">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container my-5">
        <footer
          className="text-center text-lg-start text-black"
          style={{ backgroundColor: 'lightsalmon' }}
        >
          <div className="container p-4 pb-0">
            <section>
              <div className="row">
                {/* Shop Name */}
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6
                    className="text-uppercase mb-4 font-weight-bold"
                    style={{ textDecoration: 'underline' }}
                  >
                    Shop name
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>

                {/* Products */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6
                    className="text-uppercase mb-4 font-weight-bold"
                    style={{ textDecoration: 'underline' }}
                  >
                    Products
                  </h6>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">MDBootstrap</a></p>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">MDWordPress</a></p>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">BrandFlow</a></p>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">Bootstrap Angular</a></p>
                </div>

                {/* Useful Links */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6
                    className="text-uppercase mb-4 font-weight-bold"
                    style={{ textDecoration: 'underline' }}
                  >
                    Useful links
                  </h6>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">Your Account</a></p>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">Become an Affiliate</a></p>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">Shipping Rates</a></p>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">Help</a></p>
                </div>

                {/* Contact */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6
                    className="text-uppercase mb-4 font-weight-bold"
                    style={{ textDecoration: 'underline' }}
                  >
                    Contact
                  </h6>
                  <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p><i className="fa fa-envelope mr-3"></i> info@gmail.com</p>
                  <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                </div>
              </div>
            </section>

            <hr className="my-3" />
            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                {/* Copyright */}
                <div className="col-md-7 col-lg-8 text-center text-md-start ">
                  <div className=" p-3">
                    © 2020 Copyright:
                    <a className="text-dark" href="https://mdbootstrap.com/">MDFLOWER.com</a>
                  </div>
                </div>
                <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                    <i class="fab fa-google"></i>
                  </a>
                  <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>

              </div>


            </section>

          </div>
        </footer>
      </div>
    </div>



  );
};

export default Home;



