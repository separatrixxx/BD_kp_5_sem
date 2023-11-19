import styles from './Input.module.css';
import { InputProps } from './Input.props';

export const Input = ({ text, value, onChange }: InputProps): JSX.Element => {
	return <input className={styles.input}
		placeholder={text}
		value={value}
		onChange={onChange}
		type='text'
		name={text}
		aria-label={text} />;
};