import React, { useEffect } from 'react';
import Styles from './styles.module.scss'

// Import Hooks
import { useMessages } from 'hooks/useMessages';

const Message = () => {

  const {message, setMessage} = useMessages()

  useEffect(() => {
    setTimeout(() => {
      setMessage({show:false})
    }, 2000);
  }, [setMessage])

  console.log(message)

  return (
    <div className={Styles.Message +' '+
      `${
        message.type === 'error'
        ? Styles.Error
        : message.type === 'success'
          ? Styles.Success
          : null
      }`
    }>
      <div>
        {message.icon}
        <h3>{message.title}</h3>
      </div>
      <p>{message.content}</p>
    </div>
  );
}

export default React.memo(Message);