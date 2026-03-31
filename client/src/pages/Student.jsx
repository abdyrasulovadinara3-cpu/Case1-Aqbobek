import { useNavigate } from 'react-router-dom';
import { mockBilimData, analyzePerformance } from '../services/api';
const Student = () => {
  const navigate = useNavigate();
  const grades = [5, 4, 3, 2, 4]; // Данные из BilimClass
  const avg = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(1);
  const analysis = analyzePerformance(mockBilimData.studentGrades);
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/kiosk')}>📢 Объявления (Kiosk)</button>
      <h1>Дашборд Ученика: Алихан П.</h1>
      
      <div style={{ background: '#e3f2fd', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
        <h3>🤖 AI Тьютор (Предиктивная аналитика)</h3>
        <p>Вероятность провала: {analysis.risk}</p>
    <p>Причина: {analysis.reason}</p>
    {analysis.video && <p>📺 {analysis.video}</p>}
      </div>

      <div style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '20px' }}>
        <h3>🏆 Геймификация</h3>
        <p>Уровень: 12 | Очки: 1250 XP</p>
        <p>Ачивка: "Мастер формул" (за 5 пятерок подряд по физике)</p>
      </div>

      <div style={{ border: '1px solid #ddd', padding: '15px' }}>
        <h3>💼 Цифровое портфолио</h3>
        <ul>
          <li>Сертификат: Победитель олимпиады "Кенгуру" - 2023</li>
          <li>Грамота: Волонтер года</li>
        </ul>
      </div>
    </div>
  );
};

export default Student;