import { useNavigate } from 'react-router-dom';
import { mockBilimData } from '../services/api';
const Teacher = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/kiosk')}>📢 Объявления (Kiosk)</button>
      <h1>Панель Учителя</h1>

      <div style={{ background: '#fff3e0', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
        <h3>⚠️ Система раннего предупреждения (Early Warning)</h3>
        <p style={{ color: 'red' }}>● <b>Иванов Иван:</b> Резкое падение успеваемости на 30% за последнюю неделю.</p>
        <p>● <b>Смирнова Анна:</b> Пропустила 3 последних темы по алгебре.</p>
      </div>

      <button style={{ padding: '10px', cursor: 'pointer' }} onClick={() => alert("AI Отчет сгенерирован и отправлен завучу!")}>
        ✨ Сгенерировать AI-отчет успеваемости класса (1 клик)
      </button>
    </div>
  );
};
const riskyStudents = mockBilimData.allStudents.filter(s => s.trend === 'down');
{riskyStudents.map(student => (
  <p key={student.id} style={{ color: 'red' }}>
    ● {student.name}: {student.alert}
  </p>
))}
export default Teacher;