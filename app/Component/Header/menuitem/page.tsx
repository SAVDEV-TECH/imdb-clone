import React from 'react';
import Link from 'next/link';

interface MenuItemProps {
  address: string;
  title: string;
}

const MenuItem = ({ address, title }: MenuItemProps) => {
  return (
    <div>
      <Link 
        className='text-[18px] px-2 rounded-sm font-extrabold bg-[#f5c518]' 
        href={address}
      >
        {title}
      </Link>
    </div>
  );
};

export default MenuItem;
 
