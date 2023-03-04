import QRCode from 'qrcode.react';
import { useState } from 'react';
import { IconCircleCheckFilled, IconClipboard } from '@tabler/icons-react';
import { LnPaymentButtons } from './LnPaymentButtons';

type LightningModalProps = {
    invoice: string;
    setShowModal: (showModal: boolean) => void;
};

export function LightningModal({
    invoice,
    setShowModal,
}: LightningModalProps) {
    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
    navigator.clipboard.writeText(invoice);
  };

  const handleOpenClick = () => {
    window.open(`lightning:${invoice}`);
  };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="modal-content bg-white shadow-lg rounded-md p-4 flex flex-col">
                <span
                    onClick={() => setShowModal(false)}
                    className="close cursor-pointer text-2xl text-gray-500 hover:text-gray-700"
                >
                    &times;
                </span>
                <div className="flex justify-center items-center flex-wrap p-4 mb-4">
                    <div className="flex flex-col items-center w-full">
                        <QRCode
                            value={invoice}
                            size={256}
                            onClick={handleCopy}
                            className="cursor-pointer"
                        />
                        <div className="flex justify-center">
      <button
        id="copy-button"
        className="border border-gray-300 text-gray-700 px-4 py-2 rounded-l-md hover:bg-gray-100 focus:outline-none focus:shadow-outline-blue active:bg-gray-200 transition duration-150 ease-in-out"
        onClick={handleCopyClick}
      >
        Copy
      </button>
      <button
        id="open-button"
        className="border border-gray-300 text-white bg-yellow-500 px-4 py-2 rounded-r-md hover:bg-yellow-600 focus:outline-none focus:shadow-outline-blue active:bg-yellow-700 transition duration-150 ease-in-out"
        onClick={handleOpenClick}
      >
        Open in Wallet
      </button>
    </div>
                    </div>
                </div>

            </div>
        </div>
    );
}


