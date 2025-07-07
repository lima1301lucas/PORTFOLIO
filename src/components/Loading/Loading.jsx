import './Loading.css';

const Loading = ({ fadeOut }) => {
  return (
    <div className={`loading-container ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="loading-text">&lt;/&gt;</h1>
    </div>
  );
};

export default Loading;