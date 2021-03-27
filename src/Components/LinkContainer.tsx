import React from 'react';
import { ArrowRight } from 'react-feather';
import './LinkContainer.css';

type LinkProps = {
  title: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

type LinkContainerProps = {
  onMenuSelect: (title: LinkProps['title']) => void;
};

const Links: LinkProps['title'][] = [
  'Choose Themes',
  'Recommendations',
  'Color Blind Themes',
];

const Link = ({ title, onClick }: LinkProps) => (
  <div className="link" onClick={onClick}>
    <div>{title}</div>
    <ArrowRight className="link-arrow" size={18} />
  </div>
);

const LinkContainer = ({ onMenuSelect }: LinkContainerProps) => (
  <div className="link-container">
    {Links.map((title) => (
      <Link title={title} key={title} onClick={() => onMenuSelect(title)} />
    ))}
  </div>
);

export default LinkContainer;
