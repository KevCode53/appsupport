import React, { useEffect, useState } from 'react';
import Styles from './styles.module.scss'

// Import Hooks
import { useMessages } from 'hooks/useMessages';

const Message = () => {

  const {message, setMessage} = useMessages()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
      setMessage({
        show:visible,
        title: '',
        content: '',
        icon: ''
      })
    }, 2000);
  }, [visible])

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