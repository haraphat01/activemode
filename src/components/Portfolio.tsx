"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [
	{ src: "/img/dummy/buildify.jpg", alt: "active mode nigeria limited" },
	{ src: "/img/dummy/buildify1.jpg", alt: "active mode nigeria limited" },
	{ src: "/img/dummy/buildify2.jpg", alt: "active mode nigeria limited" },
	{ src: "/img/dummy/buildify3.jpg", alt: "active mode nigeria limited" },
	{ src: "/img/dummy/building5.jpg", alt: "active mode nigeria limited" },
	{ src: "/img/dummy/building6.jpg", alt: "active mode nigeria limited" },
	{ src: "/img/dummy/building7.jpg", alt: "active mode nigeria limited" },
];

export default function Portfolio() {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div id="portfolio" className="section relative z-0 py-12 md:py-16 bg-white ">

			<div className="container xl:max-w-6xl mx-auto px-4">
				<header className="text-center mx-auto mb-12 lg:px-20">
					<h2 className="text-2xl leading-normal mb-2 font-bold text-black">Our work</h2>
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
						x="0px" y="0px" viewBox="0 0 100 60" style={{ margin: '0 auto', height: '35px' }} xmlSpace="preserve">
						<circle cx={50.1} cy={30.4} r={5} className="stroke-primary"
							style={{ fill: 'transparent', strokeWidth: 2, strokeMiterlimit: 10 }}></circle>
						<line x1={55.1} y1={30.4} x2={100} y2={30.4} className="stroke-primary"
							style={{ strokeWidth: 2, strokeMiterlimit: 10 }}></line>
						<line x1={45.1} y1={30.4} x2={0} y2={30.4} className="stroke-primary"
							style={{ strokeWidth: 2, strokeMiterlimit: 10 }}></line>
					</svg>
					<p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">We create engaging
						experiences that are innovating and beautiful.</p>
				</header>
			</div>

			<div className="flex max-w-full px-3 w-full image-container image-slide">
				<Carousel autoPlay={true}>
					{images.map((image, index) => (
						<figure key={index} className="w-full h-full group" >
							<img
								src={image.src}
								className="block w-full h-full object-cover transform duration-500  hover:scale-125"
								alt={image.alt}
							/>
						</figure>
					))}
				</Carousel>
			</div>
		</div>
	);
}

