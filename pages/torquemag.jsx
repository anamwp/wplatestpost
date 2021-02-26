import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/Content';
import SingleHeader from '../components/SingleHeader';

export default function Torquemag() {
    const apiurl = 'https://torquemag.io/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="Torque Mag" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}