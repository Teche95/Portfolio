import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
import projectimage01 from "../public/images/carousel/project-image01.png"
import projectimage02 from "../public/images/carousel/project-image02.png"
import projectimage03 from "../public/images/carousel/project-image03.png"

let productsp = [
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
        image: projectimage01
    },
    {
        id: 2,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
        image: projectimage02
    },
    {
        id: 3,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
        image: projectimage03
    },

];
var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Carousel = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        navClass: ["owl-prev", "owl-next"],
        navText: [
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 1,
            },
        },
    };

    return (
        <div className="row no-gutters">
            <div
                className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
                id="owl-carousel-products"
            >
                {/* <h3 className="text-center">
                    <span className="heading float-left w-100">Featured Products</span>
                </h3> */}
                <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={4}
                        nav={true}
                        navText={[
                            '<img src="/images/Arrow_left.png" />',
                            '<img src="/images/Arrow_right.png" />',
                        ]}
                        dots={false}
                        animateIn={true}
                        {...options}
                    >
                        {productsp && productsp.length > 0
                            ? productsp.map((product) => {
                                return (
                                    <>
                                        <div
                                            id="featuredProducts"
                                            className="item float-left w-100"
                                            key={product.name}
                                        >
                                            <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                                                <a href={product.url}>
                                                    <a className="product float-left">
                                                        <span className="image text-center">
                                                            <Image
                                                               
                                                                id={"img" + product.id}
                                                                src={product.image}
                                                                alt={product.name}
                                                                title={product.name}
                                                            />
                                                        </span>
                                                        {/* <span className="w-100 text-center mt-1 ">
                                                            <h5 className="brand text-capitalize float-left">
                                                                {product.brand}
                                                            </h5>
                                                            <span className="name">{product.name}</span>
                                                            <strong className="itemPrice p-0">
                                                                Price: {product.price}
                                                            </strong>
                                                        </span> */}
                                                    </a>
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                            : ""}
                    </OwlCarousel>
                </ul>
            </div>
        </div>
    );
};
export default Carousel;
