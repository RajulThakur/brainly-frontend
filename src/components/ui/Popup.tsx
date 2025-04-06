import { useState } from 'react';
import Duplicate from '../icons/Duplicate';
import Button from './Button';
import CrossButton from './CrossButton';
import { useAuth } from '../../context/AuthContext';
interface PopupProps {
  showPopup: boolean;
  setShowPopup: (showPopup: boolean) => void;
}
export default function Popup({ showPopup, setShowPopup }: PopupProps) {
  const [isSharing, setIsSharing] = useState<boolean>(false);
  const [shareLink, setShareLink] = useState<string>('');
  const [showCopiedMessage, setShowCopiedMessage] = useState<boolean>(false);
  const { user } = useAuth();
  if (!showPopup) return null;
  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      setShowPopup(false);
    }
  }
  function handleCopyLink() {
    navigator.clipboard.writeText(
      `${import.meta.env.VITE_APP_URL}/${shareLink}`
    );
    setShowCopiedMessage(true);
    setTimeout(() => setShowCopiedMessage(false), 2000);
  }

  async function handleShare() {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/brain/share`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: user }),
        credentials: 'include',
      });
      if (res.ok) {
        console.log('Brain shared');
        const { link } = await res.json();
        setShareLink(link);
        setIsSharing(true);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50"
      onClick={handleOverlayClick}>
      <div className="flex w-96 flex-col items-center gap-4 rounded-lg border border-white/20 bg-white/70 px-6 pt-2 pb-6 shadow-xl backdrop-blur-md">
        <nav className="flex w-full items-center justify-between">
          <p className="text-3xl font-bold">Share Your Second Brain</p>
        </nav>
        <div className="flex flex-col gap-6">
          <p className="text-sm leading-5 font-light tracking-wide text-slate-500">
            Share your entire collection of notes, documents, links and videos
            with others. They'll be able to import your content into their own
            Second Brain.
          </p>
          {isSharing ? (
            <div className="relative flex w-full gap-2">
              <input
                type="text"
                value={`${import.meta.env.VITE_APP_URL}/${shareLink}`}
                disabled
                className="w-full rounded-md border border-white/20 bg-white/20 p-2 outline-hidden backdrop-blur-xs focus:shadow-xs"
              />
              <Button
                varient="none"
                size="lg"
                startIcon={<Duplicate />}
                onClick={handleCopyLink}
              />
              {showCopiedMessage && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 transform rounded-md bg-slate-800 px-3 py-1 text-sm text-white">
                  Copied!
                </div>
              )}
            </div>
          ) : (
            <div className="flex w-full flex-col gap-2">
              <Button
                varient="primary"
                size="lg"
                text="Share Brain"
                startIcon={<Duplicate />}
                onClick={handleShare}
              />
            </div>
          )}
        </div>
        <CrossButton onClick={() => setShowPopup(false)} />
      </div>
    </div>
  );
}
