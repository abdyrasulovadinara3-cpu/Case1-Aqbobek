
export const mockBilimData = {
  
  student: {
    name: "Алихан П.",
    id: "ID-9921",
    grades: [
      { subject: 'Математика', score: 5, date: '2023-10-01', topic: 'Тригонометрия' },
      { subject: 'Математика', score: 4, date: '2023-10-05', topic: 'Функции' },
      { subject: 'Физика', score: 3, date: '2023-10-02', topic: 'Кинематика' },
      { subject: 'Физика', score: 2, date: '2023-10-08', topic: 'Динамика' },
      { subject: 'История', score: 5, date: '2023-10-03', topic: 'Золотая Орда' },
    ],
    achievements: ["Победитель Кенгуру 2023", "Волонтер года"]
  },

  
  teacherDashboard: [
    { id: 1, name: "Иван Иванов", avg: 3.2, trend: "down", missing: 3 },
    { id: 2, name: "Анна Смирнова", avg: 4.8, trend: "up", missing: 0 },
    { id: 3, name: "Алихан П.", avg: 4.2, trend: "stable", missing: 1 }
  ]
};


export const analyzeGrades = (grades) => {
  const physicsGrades = grades.filter(g => g.subject === 'Физика').map(g => g.score);
  const average = physicsGrades.reduce((a, b) => a + b, 0) / physicsGrades.length;
  
  if (average < 3.5) {
    return {
      status: "danger",
      message: "Внимание: Вероятность провала СОЧ по физике — 75%. Пробел в теме 'Динамика'.",
      recommendation: "Рекомендуем: 1. Повторить законы Ньютона. 2. Посмотреть видео 'Курс Физики ч.1'"
    };
  }
  return { status: "ok", message: "Успеваемость в норме." };
};