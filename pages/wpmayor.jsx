import React from 'react'
import Content from '../components/Content';
import Layout from '../components/Layout';
import SingleHeader from '../components/SingleHeader';

export default function WPMayor() {
    const apiurl = 'https://wpmayor.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="WP Mayor" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}