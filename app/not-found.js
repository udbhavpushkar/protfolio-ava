'use client'
import Layout from '@/components/Layout'
import Link from 'next/link'

export default function NotFound() {
    return (
        <Layout>
            <div className="h-96 py-12 px-24">
                <h2 className="text-3xl">Page Not Found</h2>
                <Link href="/">Return Home</Link>
            </div>
        </Layout>
    )
}