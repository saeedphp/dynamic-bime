import styles from './footer.module.css';
import FooterTop from "./footer-top";
import FooterBottom from "./footer-bottom";
import {BASE_URL} from "../../data/config";

const Footer = ({data}) => {

    return (
        <section className={styles.footer}>
            <FooterTop data={data} />
            <FooterBottom />
        </section>
    );
};

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(BASE_URL + "api/v1.0/cms/menuitem/list/FirstFooterList", {
        headers: {
            'cultureLcid': 1065,
        },
    });
    console.log('data: ' + res);
    const data = (await res.json())['result']

    // Pass data to the page via props
    return {
        props:
            {
                data,
            },
    };
}

export default Footer;