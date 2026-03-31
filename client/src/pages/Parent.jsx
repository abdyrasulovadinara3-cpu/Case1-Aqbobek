import { useNavigate } from 'react-router-dom';

const Parent = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/kiosk')}>📢 Объявления (Kiosk)</button>
      <h1>Режим Родителя</h1>
      <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '10px' }}>
        <h3>👤 Ребенок: Алихан П. (10 "А")</h3>
        <p><b>AI-выжимка за неделю:</b> "Ваш ребенок отлично справился с тестом по истории, но проявил неуверенность в геометрии. Рекомендуем обсудить распределение времени на домашние задания."</p>
        <hr/>
        <h4>Последние оценки:</h4>
        <p>Математика: 5, 4 | Физика: 3 | История: 5</p>
      </div>
    </div>
  );
};
export default Parent;