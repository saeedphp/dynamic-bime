import styles from './banner.module.css';
import Image from "next/image";
import imgPath from '../../../public/images/banner.webp';
import Slider from "react-slick";

const Banner = ({banners}) => {
    const settings = {
        dots: false,
        nav: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className={styles.banner}>

            <Slider {...settings}>
                {banners.map((banner, i) => (
                    <div key={i} className={styles['banner-wrapper']}>
                        <Image src={"https://bimeharman.faradns.ir/" + banner.customFileGetResponseDto.url} alt={banner.title} layout={"fill"}/>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Banner;