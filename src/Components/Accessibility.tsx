import React, { useEffect, useState } from 'react';
import './Accessibility.css';
import { Check } from 'react-feather';

type AccessProps = {
  title: string;
  active?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const Access = ({ title, active, onClick }: AccessProps) => (
  <div className={`access ${active ? 'access-active' : ''}`} onClick={onClick}>
    <div>{title}</div>
    {active ? <Check size={16} /> : ''}
  </div>
);

Access.defaultProps = {
  active: false,
};

const Accesses: AccessProps['title'][] = [
  'Bigger Font',
  'Bold Characters',
  'Black and White',
];

const Accessibility = () => {
  const [accessState, setAccessState] = useState<string[]>([]);

  useEffect(() => {
    chrome.storage.local.get('selectedAccesses', (data) => {
      if (typeof data !== 'object') {
        setAccessState([]);
      } else {
        setAccessState(data.selectedAccesses);
      }
    });
  }, []);

  useEffect(() => {
    chrome.storage.local.set({ selectedAccesses: accessState });
  }, [accessState]);

  return (
    <div className="access-container">
      {Accesses.map((title, index) => (
        <Access
          title={title}
          key={title}
          active={accessState.includes(title)}
          onClick={() =>
            accessState.includes(title)
              ? setAccessState(accessState.filter((i) => i !== title))
              : setAccessState([...accessState, title])
          }
        />
      ))}
    </div>
  );
};

export default Accessibility;
