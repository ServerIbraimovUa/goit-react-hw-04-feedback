import { useState } from 'react';
import { Container } from './Feedback.styled';
import Button from '../Buttons/Buttons';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = { good, neutral, bad };
  //клік по кнопці
  const onButtonClick = idx => {
    switch (idx) {
      case 0:
        setGood(prevState => prevState + 1);
        break;
      case 1:
        setNeutral(neutral + 1);
        break;
      case 2:
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  //рахунок загальних оцінок
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // формула позитивного відсотку
  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const keys = Object.keys(feedback);
  const totalCount = countTotalFeedback();

  // рендер
  return (
    <Container>
      <h1>Please leave feedback</h1>

      {/* компонент кнопок */}
      <Button keys={keys} onButtonClick={onButtonClick} />
      <div>
        <h2>Statistics</h2>

        {/* умова при якій рендерется відповідна розмітка в залежності від активу */}
        {totalCount === 0 ? (
          <Notification text="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCount}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    </Container>
  );
}
