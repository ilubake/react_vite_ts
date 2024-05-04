import React,{ useState } from 'react';
type FormItemProps = {
  children: JSX.Element;
};
const FormItem=function ({children}:FormItemProps) {
  const [value, setValue] = useState<string>('');
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(value);
  };

  const diyProps = { value, onChange: handleChange };
  return (
    <>
      {/* <Input {...inputProps} /> */}
      {React.cloneElement(children, diyProps)}
    </>
  );
}
export default FormItem;
