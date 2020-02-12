import {useEffect} from 'react';
import {useLocalstorage} from './useLocalstorage';

const useDarkmode= () => {
  const [value, setValue]= useLocalstorage('darkMode');
  const body= document.querySelector('body');
  useEffect(() => {
    value === true ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
  }, [value]);

  return [value, setValue];
}//end useDarkmode

export default useDarkmode;