import { useEffect, useState } from 'react';

const Kiosk = () => {
  const [newsIndex, setNewsIndex] = useState(0);
  const news = [
    "📢 Внимание! Замена: Математика в 10А отменяется.",
    "🏆 Топ-ученик дня: Алихан П. (10 пятерок за неделю)",
    "🏀 Завтра в 15:00 — финал школьного турнира по баскетболу!",
    "🍏 Столовая: Сегодня в меню плов и свежие фрукты."
  ];

  useEffect(() => {
    // Функция синхронизации с расписанием
    const syncData = () => {
      const rawData = localStorage.getItem('global_schedule');
      if (rawData) {
        const schedule = JSON.parse(rawData);
        // Берем последний добавленный урок и выводим его как новость
        if (schedule.length > 0) {
          const lastLesson = schedule[schedule.length - 1];
          const newsUpdate = `🆕 СРОЧНО: ${lastLesson.subject} (${lastLesson.teacher}) в ${lastLesson.time}, каб. ${lastLesson.room}`;
          
          
        }
      }
    };

    syncData(); 
    const timer = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % news.length);
      syncData(); 
    }, 5000);

    return () => clearInterval(timer);
  }, [news.length]);
  return (
    <div style={{ 
      height: '100vh', 
      background: '#1a237e', 
      color: '#fff', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      padding: '50px'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '50px' }}>Aqbobek News</h1>
      <div style={{ fontSize: '3rem', border: '5px solid #fff', padding: '40px', borderRadius: '20px', transition: 'all 0.5s' }}>
        {news[newsIndex]}
      </div>
      <p style={{ marginTop: '50px', fontSize: '1.5rem' }}>Автоматическая ротация... Не требуется мышь или клавиатура</p>
    </div>
  );
};
export default Kiosk;