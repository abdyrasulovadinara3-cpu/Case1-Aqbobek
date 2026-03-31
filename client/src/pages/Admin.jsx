import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/kiosk')}>📢 Объявления (Kiosk)</button>
      <h1>Админ-панель</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px' }}>
          <h3>🌍 Глобальный радар</h3>
          <p>Качество знаний: 78%</p>
          <p>Средний балл школы: 4.2</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px' }}>
          <h3>⚙️ Управление</h3>
          <button onClick={() => navigate('/admin/schedule')} style={{ width: '100%', marginBottom: '10px', padding: '10px', background: '#2196f3', color: '#fff' }}>
            📅 Smart Schedule (Умное расписание)
          </button>
          <button style={{ width: '100%', padding: '10px' }}>📢 Сделать объявление</button>
        </div>
      </div>
    </div>
  );
};
export default Admin;