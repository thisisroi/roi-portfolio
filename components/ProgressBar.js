import React, {useState, useEffect} from 'react';

const ProgressBar = ({background, completed, title}) => {
  const [loading, setLoading] = useState(1);

  useEffect(() => {
    setLoading(completed);
  }, []);

  return (
    <div className="container max-w-screen-lg mx-auto wrapper">
      <div className="flex items-center">
        <p className="title">{title}</p>
      </div>
      <div className="pbcontainer">
        <div className="shadow filler">
          <span className="label">{`${completed}%`}</span>
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            margin-top: -4px;
            padding-bottom: 9px;
          }
          .title {
            color: #b5babd;
            font-size: 14px;
          }
          .pbcontainer {
            height: 23px;
            width: 100%;
            background: linear-gradient(
              to right,
              #49505200,
              #49505260 50%,
              #495052 100%
            );
            border-radius: 7px;
          }
          .filler {
            transition: width 1s ease-in-out;
            height: 100%;
            width: ${loading}%;
            background: ${background};
            border-radius: inherit;
            text-align: right;
          }
          .label {
            padding-right: 5px;
            font-size: 13px;
            color: white;
            font-weight: 500;
          }
        `}
      </style>
    </div>
  );
};

export default ProgressBar;
