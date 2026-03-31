import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ScheduleManager = () => {
  const navigate = useNavigate();
  
  // Инициализация: пытаемся загрузить расписание из памяти, если его нет - ставим дефолтное
  const [schedule, setSchedule] = useState(() => {
    const saved = localStorage.getItem('global_schedule');
    return saved ? JSON.parse(saved) : [
      { id: 1, teacher: 'Иванов', room: '301', time: '08:00', subject: 'Математика' }
    ];
  });

  const [newLesson, setNewLesson] = useState({ teacher: '', room: '', time: '', subject: '' });

  const addLesson = () => {
    // 1. ПРОВЕРКА ЗАПОЛНЕНИЯ ПОЛЕЙ
    if (!newLesson.subject || !newLesson.teacher || !newLesson.room || !newLesson.time) {
      alert("⚠️ Пожалуйста, заполните все поля!");
      return;
    }

    // 2. АЛГОРИТМ ПРОВЕРКИ КОНФЛИКТОВ (Hardcore logic)
    const conflict = schedule.find(item => 
      item.time === newLesson.time && (item.teacher === newLesson.teacher || item.room === newLesson.room)
    );

    if (conflict) {
      alert(`❌ КОНФЛИКТ! В это время ${newLesson.time} либо учитель ${newLesson.teacher} занят, либо кабинет ${newLesson.room} уже используется.`);
      return;
    }

    // 3. Создаем обновленный список
    const updatedSchedule = [...schedule, { ...newLesson, id: Date.now() }];
    
    // 4. Обновляем состояние и сохраняем в LocalStorage для Киоска
    setSchedule(updatedSchedule);
    localStorage.setItem('global_schedule', JSON.stringify(updatedSchedule));
    
    alert("✅ Урок успешно добавлен. Данные отправлены в Kiosk.");
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/admin')}>🔙 Назад в Админ</button>
      <h2>Умная генерация расписания</h2>
      
      <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
        <h4>Добавить урок:</h4>
        <input placeholder="Предмет" value={newLesson.subject} onChange={e => setNewLesson({...newLesson, subject: e.target.value})} style={{marginRight: '5px'}} />
        <input placeholder="Учитель" value={newLesson.teacher} onChange={e => setNewLesson({...newLesson, teacher: e.target.value})} style={{marginRight: '5px'}} />
        <input placeholder="Кабинет" value={newLesson.room} onChange={e => setNewLesson({...newLesson, room: e.target.value})} style={{marginRight: '5px'}} />
        <input type="time" value={newLesson.time} onChange={e => setNewLesson({...newLesson, time: e.target.value})} style={{marginRight: '5px'}} />
        <button onClick={addLesson} style={{background: '#4caf50', color: 'white', border: 'none', padding: '5px 15px', cursor: 'pointer'}}>Проверить и добавить</button>
      </div>

      <h3>Текущее расписание:</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {schedule.map(s => (
          <div key={s.id} style={{ borderBottom: '1px solid #eee', padding: '10px', background: '#f9f9f9' }}>
            <b>{s.time}</b> — {s.subject} <span style={{color: '#666'}}>({s.teacher}, каб. {s.room})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleManager;