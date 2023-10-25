import styles from '../styles/Login.module.css';
import Button from '../components/button/button';
import Input from '../components/input/input';
import LoginCard from '../components/loginCard/loginCard';
import { useState } from 'react';
import { signup } from './api/api-client/api-client';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
   
     console.log(await signup(formData))
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.background}>
      <LoginCard title={"Sign Up"}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="your full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            type="email"
            placeholder="enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            type="password"
            placeholder="enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
        </form>
      </LoginCard>
    </div>
  );
}
