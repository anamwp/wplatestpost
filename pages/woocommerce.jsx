import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function Woocommerce() {
    const apiurl = 'https://woocommerce.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="WooCommerce" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}