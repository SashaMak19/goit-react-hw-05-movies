import { useForm } from 'react-hook-form';

const Form = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(({ query }) => {
        onSubmit(query);
      })}
    >
      <input {...register('query')}></input>
      <button type="submit">Search</button>
    </form>
  );
};

export { Form };
