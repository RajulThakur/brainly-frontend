import { ReactNode } from 'react';
import Plus from '../icons/Plus';
import Share from '../icons/Share';
import Button from './Button';

export default function MainNav({
  setShowPopup,
  children,
  setShowAddIdea,
}: {
  setShowPopup: (showPopup: boolean) => void;
  setShowAddIdea: (showAddIdea: boolean) => void;
  children?: ReactNode;
}) {
  return (
    <nav className="flex h-auto w-full items-center justify-between capitalize">
      {children}
      <div className="hidden gap-4 md:flex">
        <Button
          startIcon={<Share />}
          varient="secondary"
          size="lg"
          text="Share Brain"
          onClick={() => setShowPopup(true)}
        />
        <Button
          startIcon={<Plus />}
          varient="primary"
          size="lg"
          text="New Brain"
          onClick={() => setShowAddIdea(true)}
        />
      </div>
      <div className="flex md:hidden">
        <button
          className="bg-accent-700/10 rounded-full p-2"
          onClick={() => setShowPopup(true)}>
          <Share />
        </button>
        <button
          className="bg-accent-700/10 rounded-full p-2"
          onClick={() => setShowAddIdea(true)}>
          <Plus />
        </button>
      </div>
    </nav>
  );
}
