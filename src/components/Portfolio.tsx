
import Image from 'next/image'
export default function Portfolio() {
	return (
		<div id="portfolio" className="section relative z-0 py-12 md:py-16 bg-white ">
			<div className="container xl:max-w-6xl mx-auto px-4">

				<header className="text-center mx-auto mb-12 lg:px-20">
					<h2 className="text-2xl leading-normal mb-2 font-bold text-black">Our work</h2>
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px" y="0px" viewBox="0 0 100 60" style={{margin: '0 auto', height: '35px'}} xmlSpace="preserve">
    <circle cx={50.1} cy={30.4} r={5} className="stroke-primary"
        style={{fill: 'transparent', strokeWidth: 2, strokeMiterlimit: 10}}></circle>
    <line x1={55.1} y1={30.4} x2={100} y2={30.4} className="stroke-primary"
        style={{strokeWidth: 2, strokeMiterlimit: 10}}></line>
    <line x1={45.1} y1={30.4} x2={0} y2={30.4} className="stroke-primary"
        style={{strokeWidth: 2, strokeMiterlimit: 10}}></line>
</svg>
					<p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">We create engaging
						experiences that are innovatingand beautiful.</p>
				</header>
			</div>

			<div className="flex flex-wrap flex-row">
				<figure className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
					data-wow-duration="1s">
					<div className="relative overflow-hidden cursor-pointer mb-6">
						<a href="src/img/dummy/buildify.jpg" data-gallery="gallery1"

							className="glightbox3">

							<Image
								src="/buildify.jpg"
								className="block w-full h-auto transform duration-500  hover:scale-125"
								width={500}
								height={500}
								alt="Picture of the author"
							/>
							<div
								className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
								<h3 className="text-base leading-normal font-semibold my-1 text-white">Abuja</h3>

							</div>
						</a>
					</div>
				</figure>

				<figure className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
					data-wow-duration="1s" data-wow-delay=".1s">
					<div className="relative overflow-hidden cursor-pointer mb-6">
						<a href="src/img/dummy/buildify1.jpg" data-gallery="gallery1"

							className="glightbox3">

							<Image
								src="/buildify1.jpg"
								className="block w-full h-auto transform duration-500  hover:scale-125"
								width={500}
								height={500}
								alt="Picture of the author"
							/>
							<div
								className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
								<h3 className="text-base leading-normal font-semibold my-1 text-white">Abuja</h3>

							</div>
						</a>
					</div>
				</figure>

				<figure className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
					data-wow-duration="1s" data-wow-delay=".3s">
					<div className="relative overflow-hidden cursor-pointer mb-6">
						<a href="src/img/dummy/buildify2.jpg" data-gallery="gallery1"

							className="glightbox3">

							<Image
								src="/buildify2.jpg"
								className="block w-full h-auto transform duration-500  hover:scale-125"
								width={500}
								height={500}
								alt="Picture of the author"
							/>
							<div
								className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
								<h3 className="text-base leading-normal font-semibold my-1 text-white">Abuja</h3>

							</div>
						</a>
					</div>
				</figure>

				<figure className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
					data-wow-duration="1s" data-wow-delay=".5s">
					<div className="relative overflow-hidden cursor-pointer mb-6">
						<a href="src/img/dummy/buildify3.jpg" data-gallery="gallery1"

							className="glightbox3">

							<Image
								src="/buildify3.jpg"
								className="block w-full h-auto transform duration-500  hover:scale-125"
								width={500}
								height={500}
								alt="Picture of the author"
							/>
							<div
								className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
								<h3 className="text-base leading-normal font-semibold my-1 text-white">Abuja</h3>

							</div>
						</a>
					</div>
				</figure>

				<figure className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
					data-wow-duration="1s" data-wow-delay=".5s">
					<div className="relative overflow-hidden cursor-pointer mb-6">
						<a href="src/img/dummy/buildify4.jpg" data-gallery="gallery1"

							className="glightbox3">

							<Image
								src="/buildify4.jpg"
								className="block w-full h-auto transform duration-500  hover:scale-125"
								width={500}
								height={500}
								alt="Picture of the author"
							/>
							<div
								className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
								<h3 className="text-base leading-normal font-semibold my-1 text-white">Abuja</h3>

							</div>
						</a>
					</div>
				</figure>

			</div>
		</div>

	);
}