import { useState } from 'react';
import { LightningModal } from '@/components/LightningModal';
import QRCode from 'qrcode.react';

type PayWithLightningProps = {
    paymentRequest: string;
};

export default function PayWithLightning({ paymentRequest }: PayWithLightningProps) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="bg-yellow-400 px-4 py-2 rounded-md text-white"
            >
                Pay with Lightning ⚡
            </button>
            {showModal && <LightningModal paymentRequest={paymentRequest} onClose={() => setShowModal(false)} />}

        </>
    );
}
