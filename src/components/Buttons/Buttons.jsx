import { BoxButtons } from './Buttons.styled';

const Button = ({ keys, onButtonClick }) => {
  return (
    <BoxButtons>
      {keys.map((key, idx) => (
        <button key={key} type="button" onClick={() => onButtonClick(idx)}>
          {key}
        </button>
      ))}
    </BoxButtons>
  );
};
export default Button;
