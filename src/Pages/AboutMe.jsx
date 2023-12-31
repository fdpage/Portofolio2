import React, { useEffect } from "react";
import ButtonCV from "../Components/ButtonCV"
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {

	  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


	return (
		<>
			<div className="md:px-[10%] px-[6%]" id="About">
				<div className="text-4xl text-[#ced4d7] font-bold md:pb-8 pb-4" data-aos="fade-up" data-aos-duration="400">ABOUT ME</div>
				<div className="flex flex-col md:flex-row ">
					{/* Kolom Kiri */}
					<div className=" md:w-1/2 flex justify-center items-center md:pr-10 pr-0 md:w-auto ">
						<div data-aos="fade-up" data-aos-duration="1000">
							<img
								src="/Photo.png"
								alt=""
								className="
                            w-[30rem] h-auto rounded-xl "
								id="ImgAbout"
							/>
						</div>
					</div>

					{/* Kolom Kanan */}
					<div className="md:w-full flex flex-col justify-between">
						<p className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0" data-aos="fade-up" data-aos-duration="600">
							Saya adalah seorang siswa yang menekuni di bidang Teknik Komputer Jaringan dengan
							fokus pada pengembangan front-end web. Saya memiliki tekad yang kuat untuk terus
							belajar dan mengasah keterampilan saya demi mencapai kesempurnaan, saya selalu
							berusaha untuk menemukan solusi yang terbaik dalam setiap proyek yang saya kerjakan
							dan memilki minat besar di bidang front end web.
						</p>

						<div className="relative "  data-aos="fade-up" data-aos-duration="800">
							<ButtonCV />
						</div>

						<div class="grid grid-cols-3 md:gap-4 gap-5 mt-5" data-aos="fade-up" data-aos-duration="1000">
							<div
								class="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm"
								id="InfoAbout">
								<b className="text-3xl text-[#ced4d7]">1+</b>
								<div className="text-center text-[#a6adba]">Years of Experience</div>
							</div>
							<div
								class="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm"
								id="InfoAbout">
								<b className="text-3xl text-[#ced4d7]">4+</b>
								<div className="text-center text-[#a6adba]">Project Created</div>
							</div>
							<div
								class="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm"
								id="InfoAbout">
								<b className="text-3xl text-[#ced4d7]">3+</b>
								<div className="text-center text-[#a6adba]">Certificate</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutMe
