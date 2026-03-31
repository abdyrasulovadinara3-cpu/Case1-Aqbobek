const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Мок-данные
const users = {
  student: { id: 1, name: 'Алихан П.', role: 'student', grades: [5, 4, 3, 5, 2] },
  teacher: { id: 2, name: 'Г-жа Смирнова', role: 'teacher', classes: ['10A', '9B'] },
  admin: { id: 3, name: 'Администратор', role: 'admin' },
  parent: { id: 4, name: 'Родитель Алихана', role: 'parent', childId: 1 }
};

// API для входа
app.post('/api/login', (req, res) => {
  const { email, role } = req.body;
  // Простое сопоставление для демо: любая почта + выбранная роль
  const userData = users[role];
  if (userData) {
    res.json({ success: true, user: userData });
  } else {
    res.status(401).json({ success: false, message: 'Пользователь не найден' });
  }
});

// API для аналитики (Математический алгоритм + Заглушка AI)
app.get('/api/analytics/:studentId', (req, res) => {
  const grades = [5, 4, 3, 5, 2]; // В реальности берем из БД
  const avg = grades.reduce((a, b) => a + b, 0) / grades.length;
  
  let recommendation = "";
  if (avg < 4) recommendation = "AI Тьютор: Твой средний балл падает. Обрати внимание на тему 'Квадратные уравнения'.";
  else recommendation = "AI Тьютор: Отличная работа! Ты готов к олимпиаде.";

  res.json({ avg, recommendation, risk: avg < 3.5 });
});

app.listen(5000, () => console.log('Server running on port 5000'));