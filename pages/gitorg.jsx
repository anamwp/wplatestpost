import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Layout from '../components/Layout'
import GitOrg from '../components/GitOrg'
export default function TG() {
    return (
        <Layout>
            <SingleHeader title="Github Org" />
            <GitOrg />
        </Layout>
    )
}
