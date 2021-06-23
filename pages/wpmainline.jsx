import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function WPMainline() {
    const apiurl = 'https://wpmainline.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="WP Mainline" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}