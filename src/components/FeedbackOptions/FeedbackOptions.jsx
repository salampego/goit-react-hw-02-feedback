export const Options = ({ options, onLeaveFeedback }) => {
  return options.map(button => {
    console.log(button);
    return (
      <button
        key={button}
        type="button"
        onClick={onLeaveFeedback}
        name={button}
        className="btn"
      >
        {button}
      </button>
    );
  });
};
