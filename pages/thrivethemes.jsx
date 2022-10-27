import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function Thrivethemes() {
    const apiurl = 'https://thrivethemes.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="Thrive Themes" back="/product-company" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}