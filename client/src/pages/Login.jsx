import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();
  localStorage.setItem('userRole', role); 
  navigate(`/${role}`);
};

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Aqbobek Portal</h1>
      <form onSubmit={handleLogin} style={{ display: 'inline-block', textAlign: 'left', border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
        <input type="email" placeholder="Email" required style={{ width: '100%', marginBottom: '10px' }} /><br/>
        <input type="password" placeholder="Пароль" required style={{ width: '100%', marginBottom: '20px' }} /><br/>
        
        <p>Выберите роль:</p>
        {['student', 'teacher', 'admin', 'parent'].map(r => (
          <label key={r} style={{ display: 'block', marginBottom: '5px' }}>
            <input type="radio" name="role" value={r} checked={role === r} onChange={(e) => setRole(e.target.value)} />
            {r === 'student' ? 'Ученик' : r === 'teacher' ? 'Учитель' : r === 'admin' ? 'Админ' : 'Родитель'}
          </label>
        ))}
        <button type="submit" style={{ width: '100%', marginTop: '20px', padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Войти</button>
      </form>
    </div>
  );
};
export default Login;