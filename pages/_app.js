import '../styles/globals.css'
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
  )
}

export async function getStaticProps() {
    const first_footer_res = await fetch('https://bimeharman.faradns.ir/api/v1.0/cms/menuitem/list/FirstFooterList', {
        headers: {
            'cultureLcid': 1065
        }
    })
    const first_footer = (await first_footer_res.json())['result']

    const second_footer_res = await fetch('https://bimeharman.faradns.ir/api/v1.0/cms/menuitem/list/SecendFooterList', {
        headers: {
            'cultureLcid': 1065
        }
    })
    const second_footer = (await second_footer_res.json())['result']

    const third_footer_res = await fetch('https://bimeharman.faradns.ir/api/v1.0/cms/menuitem/list/ThirdFooterList', {
        headers: {
            'cultureLcid': 1065
        }
    })
    const third_footer = (await third_footer_res.json())['result']

    return {
        props: {
            first_footer,
            second_footer,
            third_footer,
        }
    }
}

export default MyApp
