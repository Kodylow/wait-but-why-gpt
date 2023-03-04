import QRCode from 'qrcode.react';
import { useState } from 'react';

type LightningModalProps = {
    paymentRequest: string;
    onClose: () => void;
};

export function LightningModal({ paymentRequest, onClose }: LightningModalProps) {

    const [qrCopied, setQrCopied] = useState(false);
    const [paymentRequestCopied, setPaymentRequestCopied] = useState(false);

    const handleCopyQR = () => {
        navigator.clipboard.writeText(paymentRequest);
        setQrCopied(true);
        setTimeout(() => setQrCopied(false), 1500);
    };

    const handleCopyPaymentRequest = () => {
        navigator.clipboard.writeText(paymentRequest);
        setPaymentRequestCopied(true);
        setTimeout(() => setPaymentRequestCopied(false), 1500);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(paymentRequest);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span onClick={() => setShowModal(false)} className="close">
                    &times;
                </span>
                <div className="flex flex-col items-center justify-center p-4">
                    <QRCode value={paymentRequest} size={256} onClick={handleCopyQR} className="cursor-pointer" />
                    <p className="mt-4 text-sm">Scan this QR code to pay with Lightning ⚡</p>
                    {qrCopied && <span className="text-green-500 font-medium">Copied!</span>}
                </div>
                <div className="flex justify-center items-center space-x-4">
                    <button onClick={handleCopyQR} className="copy-qr cursor-pointer mt-4 bg-yellow-400 px-4 py-2 rounded-md text-white">
                        Copy QR
                    </button>
                    {paymentRequestCopied && <span className="text-green-500 font-medium">Copied!</span>}
                </div>
            </div>
        </div>
    );
}


