import React, { useState, useEffect } from "react";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//components
import DeliveryCategory from './deliveryCategory.component';
import { NextArrow, PrevArrow } from '../Navbar/carousalArrow.component';
import Slider from 'react-slick';

// Redux
import { useDispatch } from "react-redux";
import { getFoodCategories } from "../../redux/reducers/Food/food.action";
import { getImage } from "../../redux/reducers/Image/image.action";
import { useSelector } from "react-redux";

function DeliveryCarousel() {


    // const [photos, setPhotos] = useState([]);
    // const reduxState = useSelector(
    //     (globalState) => globalState.restaurant.selectedRestaurant.restaurant
    // );

    // useEffect(() => {
    //     if (reduxState)
    //         console.log(reduxState);
    //     dispatch(getImage(reduxState?.photos)).then((data) => {
    //         const images = [];
    //         console.log(data);
    //         data.payload.images.map(({ Location }) => images.push(Location));
    //         console.log(images);
    //         setPhotos(images);
    //     });
    // }, [reduxState]);

    const [categories, setCategories] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFoodCategories()).then((data) => {

            const formatted = data.payload.categoryData.map((item) => ({
                category: item.category,
                images: item.photoUrl
            }))
            console.log("formated", formatted);
            setCategories(formatted);

        });
    }, []);



    // const categories = [
    //     {
    //         image:
    //             "/Chicken.avif",
    //         title: "Chicken",
    //     },
    //     {
    //         image:
    //             "/Pizza.avif",
    //         title: "Pizza",
    //     },
    //     {
    //         image:
    //             "/Biryani.avif",
    //         title: "Biryani",
    //     },
    //     {
    //         image:
    //             "/Rolls.avif",
    //         title: "Rolls",
    //     },
    //     {
    //         image:
    //             "/Burger.avif",
    //         title: "Burger",
    //     },
    //     {
    //         image:
    //             "/Thali.avif",
    //         title: "Thali",
    //     },
    //     {
    //         image:
    //             "/Chat.avif",
    //         title: "Chaat",
    //     },
    //     {
    //         image:
    //             "/Paratha.avif",
    //         title: "Paratha",
    //     },
    //     {
    //         image:
    //             "/Momos.avif",
    //         title: "Momos",
    //     },
    // ];

    const settings = {
        className: "center",
        centerMode: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: "10px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                },
            },
        ],
    };

    return (
        <>
            <h1 className="text-xl mb-4 font-semibold">
                Inspiration for yout first order
            </h1>
            <div className='lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between'>
                {categories.map((food, index) => (
                    <DeliveryCategory {...food} key={index} />
                ))}
            </div>
            <div className='hidden lg:block' >
                <Slider {...settings}>
                    {categories.map((food, index) => (
                        <DeliveryCategory {...food} key={index} />
                    ))}
                </Slider>
            </div>
        </>
    )
}


export default DeliveryCarousel;
