'use client'
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";

export default function Resume() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data?.type === 'CLOSE_MODAL') {
                setIsModalOpen(false);
            }
        };

        window.addEventListener('message', handleMessage);
        // setIsModalOpen(false)
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return <Layout className="bg-[#ffffff97]">
        <div>
            <div className="max-w-[1325px] mx-auto font-crimson">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                >
                    Open Modal
                </button>

                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <h2 className="text-xl font-semibold mb-4">Hello from Modal!</h2>
                    <iframe
                        src="/testing"
                        width="100%"
                        height="600"
                        style={{ "border": "none" }}
                        title="Book App">
                    </iframe>
                </Modal>


            </div>
        </div>
    </Layout>
}